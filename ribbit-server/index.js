// We make use of this 'server' variable to provide the address of the
// REST Janus API. By default, in this example we assume that Janus is
// co-located with the web server hosting the HTML pages but listening
// on a different port (8088, the default for HTTP in Janus), which is
// why we make use of the 'window.location.hostname' base address. Since
// Janus can also do HTTPS, and considering we don't really want to make
// use of HTTP for Janus if your demos are served on HTTPS, we also rely
// on the 'window.location.protocol' prefix to build the variable, in
// particular to also change the port used to contact Janus (8088 for
// HTTP and 8089 for HTTPS, if enabled).
// In case you place Janus behind an Apache frontend (as we did on the
// online demos at http://janus.conf.meetecho.com) you can just use a
// relative path for the variable, e.g.:
//
// 		var server = "/janus";
//
// which will take care of this on its own.
//
//
// If you want to use the WebSockets frontend to Janus, instead, you'll
// have to pass a different kind of address, e.g.:
//
// 		var server = "ws://" + window.location.hostname + ":8188";
//
// Of course this assumes that support for WebSockets has been built in
// when compiling the server. WebSockets support has not been tested
// as much as the REST API, so handle with care!
//
//
// If you have multiple options available, and want to let the library
// autodetect the best way to contact your server (or pool of servers),
// you can also pass an array of servers, e.g., to provide alternative
// means of access (e.g., try WebSockets first and, if that fails, fall
// back to plain HTTP) or just have failover servers:
//
//		var server = [
//			"ws://" + window.location.hostname + ":8188",
//			"/janus"
//		];
//
// This will tell the library to try connecting to each of the servers
// in the presented order. The first working server will be used for
// the whole session.
//
// var server = "http://35.188.197.130/janus";
var server = "http://10.128.0.19/janus";

var janus = null;
var screentest = null;
var opaqueId = "screensharingtest-"+Janus.randomString(12);

var myusername = null;
var myid = null;

var capture = null;
var role = null;
var room = null;
var source = null;

var spinner = null;


// Just an helper to generate random usernames
function randomString(len, charSet) {
    charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var randomString = '';
    for (var i = 0; i < len; i++) {
    	var randomPoz = Math.floor(Math.random() * charSet.length);
    	randomString += charSet.substring(randomPoz,randomPoz+1);
    }
    return randomString;
}


$(document).ready(function() {
	// Initialize the library (all console debuggers enabled)
	Janus.init({debug: "all", callback: function() {
		$(this).attr('disabled', true).unbind('click');
		// Make sure the browser supports WebRTC
		if(!Janus.isWebrtcSupported()) {
			bootbox.alert("No WebRTC support... ");
			return;
		}
		// Create session
		janus = new Janus(
			{
				server: server,
				success: function() {
					// Attach to video room test plugin
					janus.attach(
						{
							plugin: "janus.plugin.videoroom",
							opaqueId: opaqueId,
							success: function(pluginHandle) {
								$('#details').remove();
								screentest = pluginHandle;
								Janus.log("Plugin attached! (" + screentest.getPlugin() + ", id=" + screentest.getId() + ")")
								shareScreen();
							},
							error: function(error) {
								Janus.error("  -- Error attaching plugin...", error);
								bootbox.alert("Error attaching plugin... " + error);
							},
							consentDialog: function(on) {
								// do nothing
							},
							webrtcState: function(on) {
								Janus.log("Janus says our WebRTC PeerConnection is " + (on ? "up" : "down") + " now");
								$("#screencapture").parent().unblock();
								if(on) {
									window.location.hash = '' + room;
									window.open('http://localhost:3000/ready?room=' + room);
								} else {
									bootbox.alert("Your screen sharing session just stopped.", function() {
										janus.destroy();
										window.location.reload();
									});
								}
							},
							onmessage: function(msg, jsep) {
								Janus.debug(" ::: Got a message (publisher) :::");
								Janus.debug(msg);
								var event = msg["videoroom"];
								Janus.debug("Event: " + event);
								if(event != undefined && event != null) {
									if(event === "joined") {
										myid = msg["id"];
										$('#session').html(room);
										$('#title').html(msg["description"]);
										Janus.log("Successfully joined room " + msg["room"] + " with ID " + myid);
										if(role === "publisher") {
											// This is our session, publish our stream
											Janus.debug("Negotiating WebRTC stream for our screen (capture " + capture + ")");
											screentest.createOffer(
												{
													media: { video: capture, audioSend: true, videoRecv: false},	// Screen sharing Publishers are sendonly
													success: function(jsep) {
														Janus.debug("Got publisher SDP!");
														Janus.debug(jsep);
														var publish = { "request": "configure", "audio": true, "video": true };
														screentest.send({"message": publish, "jsep": jsep});
													},
													error: function(error) {
														Janus.error("WebRTC error:", error);
														bootbox.alert("WebRTC error... " + JSON.stringify(error));
													}
												});
										} else {
											// no watching
										}
									}
									// Dont care about events
								}
								if(jsep !== undefined && jsep !== null) {
									Janus.debug("Handling SDP as well...");
									Janus.debug(jsep);
									screentest.handleRemoteJsep({jsep: jsep});
								}
							},
							onlocalstream: function(stream) {
								Janus.debug(" ::: Got a local stream :::");
								Janus.debug(stream);
								$('body').append('<video class="rounded centered" id="screenvideo" width="100%" height="100%" autoplay playsinline muted="muted"/>');
								Janus.attachMediaStream($('#screenvideo').get(0), stream);
								if(screentest.webrtcStuff.pc.iceConnectionState !== "completed" &&
										screentest.webrtcStuff.pc.iceConnectionState !== "connected") {
									$("#screencapture").parent().block({
										message: '<b>Publishing...</b>',
										css: {
											border: 'none',
											backgroundColor: 'transparent',
											color: 'white'
										}
									});
								}
							},
							onremotestream: function(stream) {
								// The publisher stream is sendonly, we don't expect anything here
							},
							oncleanup: function() {
								// Refresh page instead
							}
						});

				},
				error: function(error) {
					Janus.error(error);
					bootbox.alert(error, function() {
						window.location.reload();
					});
				},
				destroyed: function() {
					window.location.reload();
				}
			});
	}});
});


function shareScreen() {
  capture = "screen";
	// Create a new room
	var desc = "fake_title"
	role = "publisher";
	var create = { "request": "create", "description": desc, "bitrate": 500000, "publishers": 1 };
	screentest.send({"message": create, success: function(result) {
		var event = result["videoroom"];
		Janus.debug("Event: " + event);
		if(event != undefined && event != null) {
			// Our own screen sharing session has been created, join it
			room = result["room"];
			Janus.log("Screen sharing session created: " + room);
			myusername = randomString(12);
			var register = { "request": "join", "room": room, "ptype": "publisher", "display": myusername };
			screentest.send({"message": register});
		}
	}});
}

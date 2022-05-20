var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
}).listen(8181);





app.get('/command', (req, res) => {
    if (hostControlOnly && req.body.hostKey !== hostKey) {
        res.send();
        return;
    }
    if (password && req.body.password !== password) {
        res.send();
        return;
    }
    robot.setMouseDelay(0);
    robot.setKeyboardDelay(0);
    let down;
    switch (req.query.type) {
        case 'move':
            let x = req.query.x;
            let y = req.query.y;
            if (isNaN(x) || isNaN(y)) {
                res.send('error');
            }
            if (x < 0) {
                x = 0;
            }
            else if (x > 1) {
                x = 1;
            }
            if (y < 0) {
                y = 0;
            }
            else if (y > 1) {
                y = 1;
            }
            let yCoord = y * size.height;
            robot.moveMouse(x * size.width, yCoord);
            break;
        case 'mouse':
            if (mod && req.query.right) {
                down = req.query.down;
                if (down === 'true') {
                    robot.mouseToggle('down', 'right');
                }
                else {
                    robot.mouseToggle('up', 'right');
                }
            }
            else {
                down = req.query.down;
                if (down === 'true') {
                    robot.mouseToggle('down', 'left');
                }
                else {
                    robot.mouseToggle('up', 'left');
                }
            }
            break;
        case 'scroll':
            const xc = -req.query.x;
            const yc = -req.query.y;
            if (Math.abs(xc) > Math.abs(yc)) {
                robot.scrollMouse(xc, 0);
            }
            else {
                robot.scrollMouse(0, yc);
            }
            break;
        case 'paste':
            robot.typeString(req.query.string);
            break;
        case 'key':
            const key = req.query.key;
            let modifier = req.query.modifier;
            if (modifier) {
                robot.keyTap(key, modifier);
            }
            else {
                robot.keyTap(key);
            }
            break;
    }
    res.send();
});
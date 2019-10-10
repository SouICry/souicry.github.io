const fs = {};


requirejs(["firebase"], function(firebase) {
  requirejs(["firestore"], function() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCNQ5Cr8pMi6GPYEDpM4SgZRuBXBruiIlY',
      authDomain: 'firestore-255009.firebaseapp.com',
      projectId: 'firestore-255009',
    });
    const db = firebase.firestore();

    fs.addUser = function (name) {
      db.collection("users").add({
        name: name,
      })
        .then(function (docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
    };

    fs.readUsers = function() {
      db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
        });
      });
    }
  });
});


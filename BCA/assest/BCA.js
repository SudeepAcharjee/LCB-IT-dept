// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA6w5I07tZYvLe7eDclzk2LesZHgukS2Fc",

  authDomain: "attendance-system-9297a.firebaseapp.com",

  databaseURL: "https://attendance-system-9297a-default-rtdb.firebaseio.com",

  projectId: "attendance-system-9297a",

  storageBucket: "attendance-system-9297a.appspot.com",

  messagingSenderId: "415117796338",

  appId: "1:415117796338:web:fcdf8ecf947bca306c416b"

  
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            alert("Added to databse" )
            // console.log(result)
            // ...
        })
        .catch((error) => {
           
            alert("Error" )
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed In" )
            window.location.assign("./dashboard.html");

            // console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            alert("Login Error")
        });
}



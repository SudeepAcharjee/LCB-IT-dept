// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBYIVxC6Lcitpuc48gkuegXgwGYQnAXCvQ",

authDomain: "attandance-lcb.firebaseapp.com",

databaseURL: "https://attandance-lcb-default-rtdb.firebaseio.com",

projectId: "attandance-lcb",

storageBucket: "attandance-lcb.appspot.com",

messagingSenderId: "4474297257",

appId: "1:4474297257:web:8e6e416127c19b034442b8",

measurementId: "G-427HG10G4F"
  
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
        });
}


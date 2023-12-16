// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB49_tpK54e5JGwYnt86kTkURF1bWcDzxM",

    authDomain: "head-admin-attandance.firebaseapp.com",
  
    projectId: "head-admin-attandance",
  
    storageBucket: "head-admin-attandance.appspot.com",
  
    messagingSenderId: "119802161037",
  
    appId: "1:119802161037:web:839fb77496f6972585bfc4",
  
    measurementId: "G-15RQWD959V"
  
  
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
            // document.write("You are Signed In" )
            window.location.assign("./create-id.html");

            // console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}
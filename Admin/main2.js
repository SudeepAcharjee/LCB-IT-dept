// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB0jE5PsPCDAg2hZGXQVt39KmB-bfdrX10",

    authDomain: "admin-panel-fdeeb.firebaseapp.com",
  
    projectId: "admin-panel-fdeeb",
  
    storageBucket: "admin-panel-fdeeb.appspot.com",
  
    messagingSenderId: "322045580007",
  
    appId: "1:322045580007:web:4ef9208010ffb6189e8842",
  
    measurementId: "G-FJNY35X2B5"
  
  
  
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
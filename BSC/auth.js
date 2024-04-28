

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";

import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";



const firebaseConfig1 = {

    apiKey: "AIzaSyA6w5I07tZYvLe7eDclzk2LesZHgukS2Fc",

    authDomain: "attendance-system-9297a.firebaseapp.com",

    databaseURL: "https://attendance-system-9297a-default-rtdb.firebaseio.com",

    projectId: "attendance-system-9297a",

    storageBucket: "attendance-system-9297a.appspot.com",

    messagingSenderId: "415117796338",

    appId: "1:415117796338:web:fcdf8ecf947bca306c416b"


};



const app = initializeApp(firebaseConfig1);

const auth = getAuth();

console.log(app);



onAuthStateChanged(auth, (user) => {

    if (user) {

        // alert("Welcome teachers to BCA online Attendance System");

          console.log(user);



    } else {

        // User is not signed in, redirect to the login page

        window.location.href = "../login-teachers.html";

    }

});



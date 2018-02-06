
$(document).ready(function(){
    //FIREBASE=========================================================
    var config = {
        apiKey: "AIzaSyCscYuOVxVLfjcSIRTI0ORllFf_fyClu00",
        authDomain: "traintimes-598ea.firebaseapp.com",
        databaseURL: "https://traintimes-598ea.firebaseio.com",
        projectId: "traintimes-598ea",
        storageBucket: "traintimes-598ea.appspot.com",
        messagingSenderId: "815908440364"
    
      };
    firebase.initializeApp(config);
    //VARIABLES=========================================================
    var database = firebase.database();

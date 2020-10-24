username = localStorage.getItem("username :");
document.getElementById("name").innerHTML = "Welcome " + username;

//ADD YOUR FIREBASE LINKS HERE 
var firebaseConfig = {
    apiKey: "AIzaSyDuQ28J4bnvFepLXga1zpRgQgKe_85Sc6M",
    authDomain: "lets-chat-e0096.firebaseapp.com",
    databaseURL: "https://lets-chat-e0096.firebaseio.com",
    projectId: "lets-chat-e0096",
    storageBucket: "lets-chat-e0096.appspot.com",
    messagingSenderId: "447594894678",
    appId: "1:447594894678:web:a6b79b64b961c6aeccb2f7",
    measurementId: "G-7Q395984M0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey  = childSnapshot.key;
             Room_names = childKey; 
    //Start code 
    
    //End code 
});});} 
getData();






  
username = localStorage.getItem("username :");
document.getElementById("name").innerHTML = "Welcome " + username;


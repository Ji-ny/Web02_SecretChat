const firebaseConfig = {
    apiKey: "AIzaSyBtBbfMcEpW-mgP3hc6O_2GiOiM3tjJ9sM",
    authDomain: "codecamp-bd76b.firebaseapp.com",
    databaseURL: "https://codecamp-bd76b-default-rtdb.firebaseio.com",
    projectId: "codecamp-bd76b",
    storageBucket: "codecamp-bd76b.appspot.com",
    messagingSenderId: "373147815346",
    appId: "1:373147815346:web:2096acacf95a62e10d28ab",
    measurementId: "G-CEVWLDLZ5B"
  };
firebase.initializeApp(firebaseConfig);
database = firebase.database();


function sendMsg(){
    let date = new Date();
    let msg = $("#message").val();
    database.ref("msgs/"+date.getTime()).set(msg);
    $("#message").val("");
}

function loadMsgs(){
    database.ref("msgs").on("value", callback);
    function callback(snapshot){
        $("#chatlist").html("");
        console.log(snapshot);
        snapshot.forEach(function(child){
             $("#chatlist").append("<div>"+child.val()+"</div>");
        });
        $("#chatlist").scrollTop(15000);
    }
}

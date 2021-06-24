var firebaseConfig = {
    apiKey: "AIzaSyAEaxPuuG5pkSZaLw7HzI70hEIFra_jf5Q",
    authDomain: "kwitter-f2d45.firebaseapp.com",
    databaseURL: "https://kwitter-f2d45-default-rtdb.firebaseio.com",
    projectId: "kwitter-f2d45",
    storageBucket: "kwitter-f2d45.appspot.com",
    messagingSenderId: "327097656322",
    appId: "1:327097656322:web:dafeb37c91774f90ea731b",
    measurementId: "G-39Y0KBEV2M"
  };

  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "index3.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "index3.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
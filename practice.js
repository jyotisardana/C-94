
// ADD YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyDMI5Dh5FfKefsG13ET6Kvv4FB2jURuFts",
  authDomain: "class-test-f754c.firebaseapp.com",
  databaseURL: "https://class-test-f754c-default-rtdb.firebaseio.com",
  projectId: "class-test-f754c",
  storageBucket: "class-test-f754c.appspot.com",
  messagingSenderId: "972604663264",
  appId: "1:972604663264:web:73a5cd7275da1fdd7e3785",
  measurementId: "G-DR845LRXVF"
};
function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}



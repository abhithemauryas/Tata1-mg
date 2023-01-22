var userdata = JSON.parse(localStorage.getItem("userdata"));
var login = document.querySelector("#formlogin");

login.addEventListener("submit", loginsubmit);
function loginsubmit(event) {
  event.preventDefault();
  var Email = login.useremail.value;
  var Password = login.userpassword.value;
  for (i = 0; i < userdata.length; i++) {
    if (userdata[i].email == Email && userdata[i].pass == Password) {
      window.location.href = "index.html";
      alert("login successful")
      break;
    } else if (i == userdata.length - 1) {
      alert("wrong email or password")
      break;
   
  
    }
  }

}

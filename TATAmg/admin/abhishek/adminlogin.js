let username = "alpha";
let password = "alpha";
let login_button = document.querySelector("#admin_login form");


login_button.addEventListener("submit",login_input);

function login_input(event){
    event.preventDefault();
    let login_input_all = document.querySelectorAll("#admin_login input");

    let obj = {};
    for(let i=0;i<login_input_all.length-1;i++){
        obj[login_input_all[i].id]=login_input_all[i].value;
    }
    console.log(obj);
     if(obj.username === username && obj.password === password)
     {
        alert("Login Successful !");
        window.location.href="./customers_admin.html";
     }
     else{
        alert("Wrong Credentials!");
     }
}
    
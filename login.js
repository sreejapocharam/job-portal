let loginform=document.getElementById("loginform")
let email=document.getElementById("email")
let password=document.getElementById("password")
let message=document.getElementById("message")

loginform.addEventListener("submit",(e)=>{
    e.preventDefault();

    let emailValue=email.value;
    let passwordValue=password.value;
    
    if(emailValue===""){
      message.textContent="Please Enter your Email";
      return;
    }

    if(passwordValue===""){
        message.textContent="Please Enter your Password";
        return;
    }

    message.textContent="Login Successful";

    let storedEmail=localStorage.getItem("email");
    let storedPassword=localStorage.getItem("password");
    console.log(storedEmail);

    if(emailValue===storedEmail && passwordValue===storedPassword){
        localStorage.setItem("isLoggedIn","true")

        message.textContent="Login Successfull";
        message.style.color = "green";

        window.location.href="project.html"
    }else{
        message.textContent="Invalid Credentials"
    }

});
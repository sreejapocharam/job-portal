//login and logout code
let loginstatus=localStorage.getItem("isLoggedIn")
let authbtn=document.getElementById("authbtn");
if(loginstatus==="true"){
    authbtn.textContent="Logout"
}else{
    authbtn.textContent="Login"
}

authbtn.addEventListener("click",()=>{
    if(loginstatus ==="true"){
        localStorage.removeItem("isLoggedIn")
    }
    
    window.location.href="login.html"
})

// login button
let loginbtn=document.getElementById("loginBtn");
let message=document.getElementById("message")

loginbtn.addEventListener("click",()=>{
    message.textContent="Login page is about to come!!!!"
})

//applications link
let applicationslink=document.getElementById("applicationsLink");
applicationslink.addEventListener("click",(e)=>{
     e.preventDefault();
    message.textContent="applications page is coming soon!!!"
});

//interviews link
let interviewslink=document.getElementById("interviewsLink");
interviewslink.addEventListener("click",(e)=>{
     e.preventDefault();
    message.textContent="interviews page is coming soon!!!"
})

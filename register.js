let registerForm = document.getElementById("registerform");

let registerName = document.getElementById("registername");

let registerEmail = document.getElementById("registeremail");

let registerPassword = document.getElementById("registerpassword");

let confirmPassword = document.getElementById("confirmpassword");

let message = document.getElementById("message");


registerForm.addEventListener("submit", (e) => {

    e.preventDefault();

    let registernameValue = registerName.value;
    let registeremailValue = registerEmail.value;
    let registerpasswordValue = registerPassword.value;
    let confirmpasswordValue = confirmPassword.value;

    if (registernameValue === "") {
        message.textContent = "Please enter your name";
        return;
    }
    if (registeremailValue === "") {
        message.textContent = "Please enter your email";
        return;
    }
    if (registerpasswordValue === "") {
        message.textContent = "Please enter your password";
        return;
    }

    if (confirmpasswordValue === "") {
        message.textContent = "Re-enter your password";
        return;
    }

    if (registerpasswordValue !== confirmpasswordValue) {
        message.textContent = "Password is not matching";
        return;
    }

// local storage
localStorage.setItem("name",registernameValue)
localStorage.setItem("email",registeremailValue)
localStorage.setItem("password",registerpasswordValue)

    message.textContent = "Registration Successful";
    message.style.color = "green";

});
let print=localStorage.getItem("name");
    console.log(print)



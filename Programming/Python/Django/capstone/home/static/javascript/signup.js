var email = document.getElementsByClassName("email");
var password = document.getElementsByClassName("password");
var repeatPassword = document.getElementsByClassName("repeatPassword");
var signup = document.getElementsByClassName("signupButton");
var cancel = document.getElementsByClassName("cancelButton");
var username = document.getElementByClassName("username")

function errorChecking() {
    signup.addEventListener("click", function () {
        if (email === null) {
        window.alert("Enter a valid email address");
        }
        if (password === null) {
            window.alert("Enter a valid email address");
        }
        if (repeatPassword === null) {
            window.alert("Enter a password");
        }
        if (repeatPassword !== password) {
            window.alert("Enter the same value as the password box");
        }
        if (username == null) {
          window.alert("Enter a valid username");
        }
    });
}

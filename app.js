const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phone-number");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const createAccount = document.querySelector(".createAccount");
const error = document.querySelector(".error");

createAccount.addEventListener("click", (e) => {
    let messages = [];

    if (firstName.value == "" || lastName.value == "") {
        messages.push("Name is required")  
    }
    if (password.value <= 8) {
        messages.push("Hasło jest zbyt krótkie")
    }
    if (password.value != confirmPassword.value) {
        messages.push("Hasła muszą być takie same")
    }
    
    if (messages.length > 0) {
        e.preventDefault();
        error.textContent = messages.join(", ")
    }
    
})

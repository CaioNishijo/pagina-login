// Elementos
const loginAccess = document.querySelector("#login-access");
const loginForm = document.querySelector("#login-form");
const loginMessage = document.querySelector("#login-message");
const loginPage = document.querySelector("#login-page");
const registerPage = document.querySelector("#register-page");
const registerAccess = document.querySelector("#register-access")
const registerMessage = document.querySelector("#register-message");
const registerForm = document.querySelector("#register-form");

// Events
loginAccess.addEventListener("click", () => {
    loginPage.classList.toggle("hide");
});

loginForm.addEventListener("submit", (e) => {
    e.preventDefault()

    loginPage.classList.toggle("hide");
    loginMessage.classList.toggle("hide");
});

registerAccess.addEventListener("click", () => {
    registerPage.classList.toggle("hide");
})

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    registerMessage.classList.toggle("hide");
    registerPage.classList.toggle("hide");
});
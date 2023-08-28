// Dom elements
const loginCont = document.querySelector(".login-cont");
const registerCont = document.querySelector(".register-cont")
const loginBtn = document.querySelector(".login-btn");
const registerBtn = document.querySelector(".register-btn");
const signIn = document.querySelector(".signin-link");
const signUp = document.querySelector(".signup-link");



signIn.addEventListener('click', () => {
  loginCont.classList.add('hide')
  registerCont.classList.remove('hide')
  document.title = 'Register | Paylog'
});

signUp.addEventListener('click', () => {
  registerCont.classList.add('hide')
  loginCont.classList.remove('hide')
  document.title = 'Login | Paylog'
});
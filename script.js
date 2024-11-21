let signUpBtn = document.querySelector('.signupbtn')
let signInBtn = document.querySelector('.signinbtn')
let tittle = document.querySelector('.tittle')
let nameBox = document.querySelector('.namebox')
let underline = document.querySelector('.underline')
let text = document.querySelector('.text');

signInBtn.addEventListener('click', ()=>{
    nameBox.style.maxHeight = '0';
    tittle.innerHTML = 'SignIn';
    text.innerHTML = 'Forgot Password?';
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
    underline.style.width = '35px';
})
signUpBtn.addEventListener('click', ()=>{
    nameBox.style.maxHeight = '60px';
    tittle.innerHTML = 'SignUp';
    text.innerHTML = 'Password Suggestions';
    signUpBtn.classList.remove('disable');
    signInBtn.classList.add('disable');
    underline.style.width = '40px';
})
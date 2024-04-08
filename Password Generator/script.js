const passwordBox = document.getElementById("password");
const len = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "!@#$%^&U()_+{}:<>?-=[];',./\|";

const allChars = upperCase+lowerCase+number+symbols;

function createPassword(){
    let password="";
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += symbols[Math.floor(Math.random()*symbols.length)];
    while(len>password.length){
        password += allChars[Math.floor(Math.random()*allChars.length)];
    }

    passwordBox.value=password;

    
    const copyButton = document.getElementById("copyButton");
    copyButton.addEventListener("click", copyPassword);
        function copyPassword(){
        passwordBox.select();
        navigator.clipboard.writeText(passwordBox.value);
    }
}
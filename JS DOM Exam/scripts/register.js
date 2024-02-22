function createUserByEmailPw(email, pw) {
    let userInfo = { email, pw };
    return userInfo;
}

var validUsersSet = new Set();
validUsersSet.add(createUserByEmailPw("bluesunshine92@example.com", "Sparkle789!"));
validUsersSet.add(createUserByEmailPw("greenleaf45@example.com", "Nature2022!"));
validUsersSet.add(createUserByEmailPw("silvermoon77@example.com", "LunaMagic#1"));
validUsersSet.add(createUserByEmailPw("crimsonsky33@example.com", "SunsetDreams!22"));
validUsersSet.add(createUserByEmailPw("azurewave19@example.com", "OceanBreeze123!"));

var validRegexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
var validRegexPw = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!*&$]).{8,}$/

document.addEventListener('DOMContentLoaded', function (){
    const emailInp = document.querySelector(".login-form .register-email");
    const pwInp = document.querySelector(".login-form .register-password");
    const repPwInp = document.querySelector(".login-form .repeat-password");
    var error = document.querySelector(".register-error");
    var regBtn = document.querySelector(".register-btn");
    var backBtn = document.querySelector(".back");

    backBtn.addEventListener("click",(event) => {
        window.location.href = "./index.html";
    })

    repPwInp.addEventListener("input", () => {
        const passwordsMatch = repPwInp.value === pwInp.value;

        if (!passwordsMatch) {
            repPwInp.classList.add("invalid-field");
        } else {
            repPwInp.classList.remove("invalid-field");
        }
    });

    regBtn.addEventListener("click",(event) => {
        event.preventDefault();

        if(emailInp.value !== "" && pwInp.value !== "" && repPwInp.value != ""){
            existsEmail = false;
            validUsersSet.forEach(function({email,pw}){
                if(emailInp.value === email){
                    existsEmail = true;
                }
            })

            if(existsEmail){
                error.textContent = "Already registered email";
                error.style.color = "red"; 
            }
            else if(!emailInp.value.match(validRegexEmail)){
                error.textContent = "Invalid email format";
                error.style.color = "red";
            }
            else if(!pwInp.value.match(validRegexPw)){
                error.textContent = "Invalid password format";
                error.style.color = "red";
            }
            else if(!repPwInp.classList.contains("error")){
                validUsersSet.add(createUserByEmailPw(emailInp.value,pwInp.value));
                window.location.href = './home.html';
            }

        }
    })
})
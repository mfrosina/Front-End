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

var validRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

document.addEventListener('DOMContentLoaded',function(){
    const emailInp = document.querySelector('.right-content .login-form input[type="text"]');
    const pwInp = document.querySelector('.right-content .login-form input[type="password"]');
    const loginBtn = document.querySelector('.right-content .login-form .login-btn');
    var error = document.querySelector(".register-error");
    var createAccWrapper = document.querySelector(".create-account-wrapper");
    const createAccBtn = createAccWrapper.querySelector("button");

    loginBtn.addEventListener("click", (event) => {
        event.preventDefault();

        if (emailInp.value !== "" && pwInp !== "") {
            validEmail = false;
            validPw = false;
            validUsersSet.forEach(function ({ email, pw }) {
                if (emailInp.value === email) {
                    validEmail = true;
                }
                if (pwInp.value === pw) {
                    validPw = true;
                }
            })
            if(!emailInp.value.match(validRegex)){
                validEmail = false;
                error.textContent = "Invalid email format";
                error.style.color = "red";
                emailInp.classList.add("invalid-field");
            }
            else if (validEmail && validPw) {
                window.location.href = "./home.html";
            }
            else if (!validEmail) {
                error.textContent = "There is no registered user with that email";
                error.style.color = "red";
                emailInp.classList.add("invalid-field");
                pwInp.classList.add("invalid-field");
            }
            else if (!validPw) {
                error.textContent = "Wrong password";
                error.style.color = "red";
                pwInp.classList.add("invalid-field");
            }
            
        }
    }
    )

    createAccBtn.addEventListener("click",() => {
        window.location.href = "./register.html";
    })
})
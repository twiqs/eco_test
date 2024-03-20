//AUTORIZATION 
//NE TROGAT
import confetti from 'https://cdn.skypack.dev/canvas-confetti';
const btn = document.querySelector('.form_btn')
const checkbox = document.getElementById('autoCheckbox');
const btnChangeAutobtnChangeAuto = document.getElementById('change-btn');
const users = [
    { username: "Admin", password: "123" },
    { username: "Adelina", password: "qwerty" },
    { username: "Asdfg", password: "uiop" },
    { username: "Hjkl", password: "zxcvb" },
    { username: "Figma", password: "1122as" },
    { username: "You", password: "we" },
    { username: "She", password: "he" },
    { username: "They", password: "other" }
  ];
  
  btn.addEventListener('click', function () {
      let inputLogin = document.querySelector('.input__login').value;
      let inputPsw = document.querySelector('.input__psw').value;
  
      const user = users.find(function(item) {
          return item.username === inputLogin;
      });
  
      if (user) {
          if (checkbox.checked) {
              if (user.password === inputPsw) {
                  confetti();
                  document.querySelector('.success').style.display = "block";
                  document.querySelector('.js-name').innerText = inputLogin;
                  document.querySelector('.form').style.display = "none";
              } else {
                  document.querySelector('.input_txt__psw').style.display = "block";
              }
          }
      } else {
          document.querySelector('.input_txt__login').style.display = "block";
      }
  });
  

// const formSignUp = document.querySelector('sign_up')
// const formSignIn = document.querySelector('sign_in')

// btnChangeAuto.addEventListener('click', function () {
//     if (this.classList.contains('open')) {
//         this.classList.remove('open')
//         // text.style.fontWeight = 400
//     } else{
//         this.classList.add('open')
//         // text.style.fontWeight = 700
//     }
// })
document.addEventListener("DOMContentLoaded", function() {
    const signInBtn = document.querySelector('.sign_in-btn');
    const signUpBtn = document.querySelector('.sign_up-btn');
    const signInForm = document.querySelector('.sign_in-form');
    const signUpForm = document.querySelector('.sign_up-form');

    signInBtn.addEventListener('click', function() {
        signInForm.style.display = 'block';
        signUpForm.style.display = 'none';
    });

    signUpBtn.addEventListener('click', function() {
        signUpForm.style.display = 'block';
        signInForm.style.display = 'none';
    });
});


const generateButton = document.querySelector("#generator_ps");
    // const copyButton = document.querySelector("#copy-button");
    const passwordInput = document.querySelector("#password_sign_up");

    // Функция для генерации случайного пароля
    const generatePassword = () => {
      // Массив символов для включения в пароль
      const characters =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

      let password = "";

      // Цикл для выбора случайных символов и добавления их в пароль
      // 12 - это количество символов в пароле
      for (let i = 0; i < 12; i++) {
        password += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      }

      return password;
    };

    // Прослушиватель событий для кнопки создания пароля
    generateButton.addEventListener("click", () => {
      passwordInput.value = generatePassword();
      passwordInput.disabled = false;
      copyButton.disabled = false;
    });
    const displayUserDashboard = (user) => {
        const userDashboard = document.createElement('div');
        userDashboard.classList.add('user-dashboard');
    
        const heading = document.createElement('h1');
        heading.textContent = `Welcome ${user.username}`;
    
        const passwordInfo = document.createElement('p');
        passwordInfo.textContent = `Your password is: ${user.password}`;
    
        userDashboard.appendChild(heading);
        userDashboard.appendChild(passwordInfo);
    
        document.body.appendChild(userDashboard); // Append the user dashboard to the body or any desired container
    };


    function createUserObject(username, password) {
        return { username, password };
    }
    
    let inputLoginSignUp= document.querySelector('.input__login').value;
    let inputPswWSignUp = document.querySelector('.input__psw').value;
    
    // Creating a new object using input values
    let newUser = createUserObject(inputLogin, inputPsw);
    
    // Adding the new user object to the users array
    users.push(newUser);
    
    console.log(users);
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
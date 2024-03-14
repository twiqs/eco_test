//AUTORIZATION 
//NE TROGAT
const btn = document.querySelector('.btn')
const access = {
    "Admin": "123",
    "Adelina": "qwerty",
    "Asdfg": "uiop",
    "Hjkl": "zxcvb",
    "Figma": "1122as",
    "You": "we",
    "She": "he",
    "They": "other",
}
// console.log(access["Admin"])
console.log()



btn.addEventListener('click', function () {
    let inputLogin = document.querySelector('.input__login').value
    let inputPsw = document.querySelector('.input__psw').value


    if (inputLogin in access) {
        if (access[inputLogin] === inputPsw){
            document.querySelector('.success').style.display = "block"
            document.querySelector('.js-name').innerText = inputLogin
            document.querySelector('.form').style.display = "none"
        }else {
        document.querySelector('.input_txt__psw').style.display = "block"
    }
} else {
    document.querySelector('.input_txt__login').style.display = "block"

}



})
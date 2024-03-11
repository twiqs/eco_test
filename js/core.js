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



// malika

$(document).ready(function () {
    // Toggle menu and burger icon
    $('.header_burger').click(function (event) {
        $('.header_burger, .header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    // Close menu when clicking on a menu item
    $('.header_link').click(function (event) {
        $('.header_burger, .header_menu').removeClass('active');
        $('body').removeClass('lock');
    });

    // Close menu when clicking anywhere outside the menu
    $(document).click(function (event) {
        if (!$(event.target).closest('.header').length) {
            $('.header_burger, .header_menu').removeClass('active');
            $('body').removeClass('lock');
        }
    });

    // Prevent closing menu when clicking inside the menu
    $('.header_menu').click(function (event) {
        event.stopPropagation();
    });
});



const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

function openModal() {
    document.getElementById("videoModal").style.display = "block";
}

function closeModal() {
    document.getElementById("videoModal").style.display = "none";
}

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        document.querySelector('.back-to-top').style.display = "block";
    } else {
        document.querySelector('.back-to-top').style.display = "none";
    }
}

let tab = function(){
    let tabNav = document.querySelectorAll('.tabs-nav__item'),
    tabContent = document.querySelectorAll('.tabs__content'),
    tabName;

    tabNav.forEach(item=> {
        item.addEventListener('click', selectTabNav)
    })

    function selectTabNav(){
        tabNav.forEach(item => {
            item.classList.remove('is-active')
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName)
    }
    function selectTabContent(tabName){
        tabContent.forEach(item => {
            item.classList.contains(tabName)? item.classList.add('is-active') : item.classList.remove('is-active')

        })
        
    }

    

};


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



const scene = new THREE.Scene();

// Создаем камеру
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Создаем рендерер
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Создаем сферу (3D-шар)
const geometry = new THREE.SphereGeometry(2, 50, 50);
const texture = new THREE.TextureLoader().load('../img/earthmap.jpg');
// const texture = new THREE.TextureLoader().load('../img/earthbump.jpg');
const material = new THREE.MeshBasicMaterial({ map: texture });
const earth = new THREE.Mesh(geometry, material);
scene.add(earth);

// Добавляем освещение
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(5, 3, 5);
scene.add(directionalLight);

// Создаем анимацию вращения Земли
function animate() {
  requestAnimationFrame(animate);
  earth.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();


// Создаем сферу облаков
const cloudsGeometry = new THREE.SphereGeometry(2.1, 32, 32);
const cloudsMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 });
const clouds = new THREE.Mesh(cloudsGeometry, cloudsMaterial);
scene.add(clouds);


// Создаем текстуру облаков
const cloudsTexture = new THREE.TextureLoader().load('../img/earthbump.jpg');
cloudsMaterial.map = cloudsTexture;


// Задаем переменные для хранения текущего и предыдущего положения мыши
let mouseX = 0;
let mouseY = 0;
let previousMouseX = 0;
let previousMouseY = 0;

// Добавляем обработчик события нажатия кнопки мыши
document.addEventListener('mousedown', function(event) {
  // Обновляем предыдущее положение мыши
  previousMouseX = event.clientX;
  previousMouseY = event.clientY;
  
  // Добавляем обработчики событий перемещения мыши и отпускания кнопки мыши
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});

// Функция обработки события перемещения мыши
function onMouseMove(event) {
  // Вычисляем изменение положения мыши
  let deltaX = event.clientX - previousMouseX;
  let deltaY = event.clientY - previousMouseY;
  
  // Обновляем текущее положение мыши
  previousMouseX = event.clientX;
  previousMouseY = event.clientY;
  
  // Вращаем Землю и облака в соответствии с изменением положения мыши
  earth.rotation.y += deltaX * 0.01;
  clouds.rotation.y += deltaX * 0.01;
}

// Функция обработки события отпускания кнопки мыши
function onMouseUp() {
  // Удаляем обработчики событий перемещения мыши и отпускания кнопки мыши
  document.removeEventListener('mousemove', onMouseMove);
  document.removeEventListener('mouseup', onMouseUp);
}


// Добавляем обработчик события нажатия кнопки мыши
document.addEventListener('mousedown', function(event) {
  // Обновляем предыдущее положение мыши
  previousMouseX = event.clientX;
  previousMouseY = event.clientY;
  
  // Добавляем обработчики событий перемещения мыши и отпускания кнопки мыши
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});

// Функция обработки события перемещения мыши
function onMouseMove(event) {
  // Вычисляем изменение положения мыши
  let deltaX = event.clientX - previousMouseX;
  let deltaY = event.clientY - previousMouseY;
  
  // Обновляем текущее положение мыши
  previousMouseX = event.clientX;
  previousMouseY = event.clientY;
  
  // Вращаем Землю и облака в соответствии с изменением положения мыши
  earth.rotation.y += deltaX * 0.01;
  clouds.rotation.y += deltaX * 0.01;
  
  // Ограничиваем вращение вверх/вниз в пределах [-Math.PI/2, Math.PI/2]
  earth.rotation.x = Math.max( -Math.PI / 2, Math.min( Math.PI / 2, earth.rotation.x - deltaY * 0.01 ) );
  clouds.rotation.x = Math.max( -Math.PI / 2, Math.min( Math.PI / 2, clouds.rotation.x - deltaY * 0.01 ) );
}

// Функция обработки события отпускания кнопки мыши
function onMouseUp() {
  // Удаляем обработчики событий перемещения мыши и отпускания кнопки мыши
  document.removeEventListener('mousemove', onMouseMove);
  document.removeEventListener('mouseup', onMouseUp);
}

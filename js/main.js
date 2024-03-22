
// $(document).ready(function () {
//     // Toggle menu and burger icon
//     $('.header_burger').click(function (event) {
//         $('.header_burger, .header_menu').toggleClass('active');
//         $('body').toggleClass('lock');
//     });

//     // Close menu when clicking on a menu item
//     $('.header_link').click(function (event) {
//         $('.header_burger, .header_menu').removeClass('active');
//         $('body').removeClass('lock');
//     });

//     // Close menu when clicking anywhere outside the menu
//     $(document).click(function (event) {
//         if (!$(event.target).closest('.header').length) {
//             $('.header_burger, .header_menu').removeClass('active');
//             $('body').removeClass('lock');
//         }
//     });

//     // Prevent closing menu when clicking inside the menu
//     $('.header_menu').click(function (event) {
//         event.stopPropagation();
//     });
// });



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

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        document.querySelector('.back-to-top').style.display = "block";
    } else {
        document.querySelector('.back-to-top').style.display = "none";
    }
}

let tab = function () {
    let tabNav = document.querySelectorAll('.tabs-nav__item'),
        tabContent = document.querySelectorAll('.tabs__content'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    })

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('is-active')
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName)
    }
    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active')

        })

    }



};


tab();


// slider


const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    
    // Handle scrollbar thumb drag
    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
        
        // Update thumb position on mouse move
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;

            // Ensure the scrollbar thumb stays within bounds
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
            
            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }

        // Remove event listeners on mouse up
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        // Add event listeners for drag interaction
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    // Slide images according to the slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

     // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    }

    // Update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }

    // Call these two functions when image list scrolls
    imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
        handleSlideButtons();
    });
}

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);


const wrapper = document.querySelector(".wrapper");
const header = document.querySelector(".header");

wrapper.addEventListener("scroll", (e) => {
 e.target.scrollTop > 30
  ? header.classList.add("header-shadow")
  : header.classList.remove("header-shadow");
});

const toggleButton = document.querySelector(".dark-light");

toggleButton.addEventListener("click", () => {
 document.body.classList.toggle("dark-mode");
});

var form = document.getElementById('subscribe-form')
		var email = document.getElementById('email')
		var emailError = document.querySelector('#email + .error-message')
	
		email.addEventListener('input', function (event) {
		  if (email.validity.valid) {
			emailError.innerHTML = ''
			email.classList.remove('is-invalid')
		  } else {
			showError()
		  }
		})
	
		form.addEventListener('submit', function (event) {
		  if (!email.validity.valid) {
			event.preventDefault()
			showError()
		  }
		})
	
		function showError() {
		  if (email.validity.valueMissing) {
			emailError.innerHTML = 'Email is required'
		  } else if (email.validity.typeMismatch) {
			emailError.innerHTML = 'Please enter a valid email address'
		  }
	
		  email.classList.add('is-invalid')
		}
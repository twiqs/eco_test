

var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true
    },
    keyboard: {
      enabled: true
    },
    mousewheel: {
      thresholdDelta: 70
    },
    spaceBetween: 60,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
  // Branding Identity
(function ($) {
  $(function () {


    if (!('ontouchstart' in window)) {
      const videoPropCont = document.querySelectorAll('.js-create_video');

      videoPropCont.forEach(function (item) {
        item.addEventListener('mouseenter', function () {
          var video = this.querySelector('video');

          if(!item.classList.contains('js-active')){

            item.classList.add('js-active');

            video.play();
            video.loop = false;

            video.addEventListener('ended', function () {
              item.classList.remove('js-active');
              item.classList.remove('js-video-end');
              item.classList.remove('js-video-pause');
            });

            video.addEventListener('timeupdate', function () {
              if((video.currentTime >= 2) && !item.classList.contains('js-video-end')) {
                video.pause();
                item.classList.add('js-video-pause');
              }
            });
          }
        });

        item.addEventListener('mouseleave', function () {
          var video = this.querySelector('video');

          if(item.classList.contains('js-active')) {
            if(item.classList.contains('js-video-pause')){
              item.classList.add('js-video-end');
              video.play()
            } else {
              item.classList.add('js-video-end');
            }
          }

        });

      });
    }


  });
})(jQuery);
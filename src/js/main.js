$(document).ready(function(){


$(document).on('click', '.form .submit-btn', function (event) {
    event.preventDefault(); // Останавливаем стандартное поведение отправки формы

    const form = $(this).closest('.form'); // Получаем конкретную форму, по которой кликнули
    const formData = form.serialize(); // Сериализуем данные этой формы

    // Отправляем AJAX-запрос
    $.ajax({
        type: "POST",
        url: "php/mail.php",
        data: formData,

        success: function (response) {
          $("#success-form").addClass("active");
          bodyEl.classList.remove('noscroll');
        }
    });
  });

  const btnSuccessClose = document.getElementById("btn-success-close");
  const successModal = document.getElementById("success-form");
  let modalFrames = document.querySelectorAll('[data-modal]');

  btnSuccessClose.addEventListener("click", (e) => {
    e.stopPropagation();
    successModal.classList.remove("active");
  });

  successModal.addEventListener('click', function (e) {
    if (e.target === e.currentTarget) {
        e.preventDefault();
        successModal.classList.remove('active');
        bodyEl.classList.remove('noscroll');
        modalFrames.forEach((item) => {
          item.classList.add('hidden')
        });
    }
  });

  const preloader = document.querySelector('#preloader');
  setTimeout(function() {
    preloader.classList.add("preloader-hide")
  }, 3000);

    $('.cases-slider').slick({
      swipeToSlide: true,
      draggable: true,
      swipe: true,
        dots: false,
        infinite: true,
        autoplay: true,
        pauseOnHover: true,
        autoplaySpeed: 4000,
        speed: 500,
        // fade: true,
        // cssEase: 'linear',
        responsive: [
          {
            breakpoint: 575,
            settings: {
              adaptiveHeight: true
            }
          }
          ]
    });
    $('.testimonials-slider').slick({
      swipeToSlide: true,
      draggable: true,
      swipe: true,
      speed: 600,
        arrows : false,
        centerMode: true,
        centerPadding: '300px',
        pauseOnHover: true,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        dots: true,
        responsive: [
          {
            breakpoint: 1023,
            settings: {
              centerMode: false,
              centerPadding: '100px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 575,
            settings: {
              centerMode: false,
              centerPadding: '0px',
              slidesToShow: 1,
              // adaptiveHeight: true
            }
          }
          ]
    });
    $('.logos-slider').slick({
        swipeToSlide: true,
        draggable: true,
        swipe: true,
        pauseOnHover: true,
        speed: 600,
        centerMode: true,
        arrows: false,
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1023,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 2,
            }
          }
          ]
    });
    $('.services-slider').slick({
        // adaptiveHeight: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
          {
            breakpoint: 1068,
            settings: {

              slidesToShow: 3,
              arrows: false
            }
          },
          {
            breakpoint: 1023,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 575,
            settings: {
              centerMode: true,
              slidesToShow: 1
            }
          }
        ]
    });
});


$(document).ready(function() {

    // CERRAR MENÚ
    $('.navbar-nav .nav-link').on('click', function () {
        $('#navbarNav').collapse('hide');
    });

    const $navbarToggler = $(".navbar-toggler");
    const $navbarCollapse = $("#navbarNav");

    $navbarToggler.on("click", function () {
        $navbarCollapse.toggleClass("show");
    });

    $(".nav-link").on("click", function () {
        if ($navbarCollapse.hasClass("show")) {
            $navbarCollapse.removeClass("show");
        }
    });

    // QUITAR CLASES BORDER TOP Y BORDER BOTTOM
    $(document).ready(function() {
        function updateBorders() {
          if ($(window).width() >= 767) {
            $("nav .nav-item").removeClass("border-top border-bottom");
          } else {
            $("nav .nav-item").addClass("border-top");
            $("nav .nav-item:last").addClass("border-bottom");
          }
        }
        
        updateBorders();
    
        $(window).resize(function() {
          updateBorders();
        });
    });

    // CARRUSEL CON SWIPER
    var swiper = new Swiper('.swiper', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        mousewheel: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: 0,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        on: {
            slideChangeTransitionStart: function () {
                $('.swiper-slide').removeClass('swiper-slide-active');
                var activeIndex = swiper.activeIndex;
                var activeSlide = swiper.slides[activeIndex];
                $(activeSlide).addClass('swiper-slide-active');
            }
        }
    });

    // VALIDAR FORM
    $(".formularioCatering").on("submit", function (e) {
        e.preventDefault();

        var form = $("#cateringValidation")[0];
        var isValid = form.checkValidity();

        if (isValid) {
            $('#reservationModal').modal('show');
        } else {
            form.classList.add('was-validated');
        }
    });
});

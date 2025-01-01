$(document).ready(function() {

    // CERRAR MENÚ
    $('.navbar-nav .nav-link').on('click', function () {
        $('#navbarNav').collapse('hide');
    });

    // CARRUSEL CON SWIPER
    $(document).ready(function () {
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
    });

    // VALIDAR FORM
    $('form').submit(function (event) {
        event.preventDefault();

        let isValid = true;
        const name = $('#exampleFormControlInput1[type="text"]').val().trim();
        const email = $('#exampleFormControlInput1[type="email"]').val().trim();
        const eventType = $('#exampleFormControlSelect1').val();
        const description = $('#exampleFormControlTextarea1').val().trim();

        // Validar nombre
        if (name === '') {
            alert("Por favor, ingresa tu nombre y apellidos.");
            isValid = false;
        }

        // Validar email con regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Por favor, ingresa un email válido.");
            isValid = false;
        }

        // Validar tipo de evento
        if (eventType === '...') {
            alert("Por favor, selecciona un tipo de evento.");
            isValid = false;
        }

        // Validar descripción
        if (description === '') {
            alert("Por favor, proporciona una breve descripción del evento.");
            isValid = false;
        }

        // Si el formulario es válido, enviar
        if (isValid) {
            alert("Formulario enviado correctamente.");
            this.submit(); // Envía el formulario si todo está correcto
        }
    });
});
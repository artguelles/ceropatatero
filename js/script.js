$(document).ready(function() {

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
});
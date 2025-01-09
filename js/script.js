$(document).ready(function() {

    // CERRAR MENÚ
    $('.navbar-nav .nav-link').on('click', function () {
        $('#navbarNav').collapse('hide');
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
    // $('form').submit(function (event) {
    //     event.preventDefault();

    //     let isValid = true;
    //     const name = $('#exampleFormControlInput1[type="text"]').val().trim();
    //     const email = $('#exampleFormControlInput1[type="email"]').val().trim();
    //     const eventType = $('#exampleFormControlSelect1').val();
    //     const description = $('#exampleFormControlTextarea1').val().trim();

    //     if (name === '') {
    //         alert("Por favor, ingresa tu nombre y apellidos.");
    //         isValid = false;
    //     }

    //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     if (!emailRegex.test(email)) {
    //         alert("Por favor, ingresa un email válido.");
    //         isValid = false;
    //     }

    //     if (eventType === '...') {
    //         alert("Por favor, selecciona un tipo de evento.");
    //         isValid = false;
    //     }

    //     if (description === '') {
    //         alert("Por favor, proporciona una breve descripción del evento.");
    //         isValid = false;
    //     }

    //     if (isValid) {
    //         alert("Formulario enviado correctamente.");
    //         this.submit();
    //     }
    // });
});

// Media query que cambia el grid del html de quienes somos 
const mediaQuery = window.matchMedia("(max-width: 767px)");

if (window.location.pathname.includes("quienes-somos.html")) {
function handleMobileView(e) {
    if (e.matches) {
        document.getElementById("patatas-intro").innerHTML = `
               <div class="container-fluid">
                <div class="row">
                    <div class="col">
                        <img src="/media/img/patatas-3.webp" class="img-fluid" alt="Patatas fritas">
                        <p>
                            Las patatas
                        </p>
                        <img src="/media/img/patatas-2.jpg" class="img-fluid" alt="Patatas fritas">
                        <p>
                            que te harán
                        </p>
                        <img src="/media/img/patatas-1-1.avif" class="img-fluid" alt="Patatas fritas">
                        <p>
                            chuparte los dedos
                        </p>
                    </div>
                </div>
            </div>
        `;
    } else {
        // Cambios para pantallas más grandes
        document.getElementById("patatas-intro").innerHTML = `
           <div class="container-fluid">
                <div class="row">
                    <div class="col">
                        <img src="media/img/patatas-3.webp" class="img-fluid" alt="Patatas fritas">
                    </div>
                    <div class="col d-flex align-items-center justify-content-center">
                        <p>Las patatas</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col d-flex align-items-center justify-content-center">
                        <p>que te harán</p>
                    </div>
                    <div class="col">
                        <img src="media/img/patatas-2.jpg" class="img-fluid" alt="Patatas fritas">
                    </div>
                    <div class="row">
                        <div class="col">
                            <img src="media/img/patatas-1-1.avif" class="img-fluid" alt="Patatas fritas">
                        </div>
                        <div class="col d-flex align-items-center justify-content-center">
                            <p>chuparte los dedos</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

mediaQuery.addEventListener("change", handleMobileView);

handleMobileView(mediaQuery);
}

// Cerrar menu al clicar icono hamburguesa
$(document).ready(function () {
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
});

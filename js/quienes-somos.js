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
                        <img src="media/img/patatas-3.webp" class="img-fluid" alt="Patatas fritas">
                        <p>
                            Las patatas
                        </p>
                        <img src="media/img/patatas-2.jpg" class="img-fluid" alt="Patatas fritas">
                        <p>
                            que te harán
                        </p>
                        <img src="media/img/patatas-1-1.avif" class="img-fluid" alt="Patatas fritas">
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
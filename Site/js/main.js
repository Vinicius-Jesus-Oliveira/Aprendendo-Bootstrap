jQuery(document).ready(function($) {

    window.onscroll = function() {
        if (window.pageYOffset > 50)
            $("#header").addClass("active");
        else
            $("#header").removeClass("active");
    };


    // ISOTOPE
    let btns = $("#servicos .buttons-group button");

    btns.click(function (e) {
        $("#servicos .buttons-group button").removeClass("active");
        e.target.classList.add("active");
        
        let selector = $(e.target).attr("data-filter");
        $("#servicos .grid").isotope({
            filter: selector,
        });
    });

    $(window).on("load", function () {
        $("#servicos .grid").isotope({
            filter: "*",
        });
    });

    //MAGNIFIC
    $(".grid .popup-link").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
            tPrev: "Anterior",
            tNext: "Próxima",
            tCounter: "%curr% de %total%",
        },
    });

    //OWL-CAROUSEL
    $(".owl-carousel").owlCarousel({
        loop: false,
        margin: 30,
        autoplay: false,
        autoplayTimeout: 6000,
        dots: true,
        lazyload: true,
        nav: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    });
});
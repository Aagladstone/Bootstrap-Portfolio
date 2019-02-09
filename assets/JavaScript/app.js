






$(".about-nav").on("click", function() {

    $("html,body").animate({
        scrollTop: $("#about-head").offset().top
    }, "slow");
    });

$(".portfolio-nav").on("click", function() {

    $("html,body").animate({
        scrollTop: $("#portfolio-head").offset().top
    }, "slow");
    });

$(".contact-nav").on("click", function() {

    $("html,body").animate({
        scrollTop: $("#contact-head").offset().top
    }, "slow");
    });

$(".info-nav").on("click", function() {

    $("html,body").animate({
        scrollTop: $("#info-head").offset().top
    }, "slow");
    });


// I want to parallax one of those cool backgrounds and when you scroll have one of each picture of 
// each project with a link that also includes an info and contact link.
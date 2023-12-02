$(document).ready(function () {
    setTimeout( function(){
        $(".spinner-box").addClass("d-none");
        $(".body").removeClass("d-none");
    }, 1500);
});

// ScrollTop

window.addEventListener("scroll", function(){
    document.querySelector(".scrollTop").classList.toggle("scrolltopactiv", window.scrollY > 400);
});

// ScrollTop

$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    margin: 10,
    center: true,
    responsiveClass: true,
    navText: ["<img src='./images/left@2x.png'>", "<img src='./images/rigth@2x.png'>"],
    dots: true,
    loop:true,
    lazyLoad: true,
    autoplay:true,
    autoplayTimeout:10000,
    autoplayHoverPause:false,
    responsive: {
      0: {
        items: 1,
        autoHeight: true,
      },
      769: {
        items: 1,
        autoHeight: true,  
        nav: true,
      }
    }
    });
});

function openNav() {
  document.getElementById("mobile-text").style.width = "250px";
  document.getElementById("burger").style.display = "none";
  document.getElementById("closebtn").style.display = "block";
}

function closeNav() {
  document.getElementById("mobile-text").style.width = "0";
  document.getElementById("burger").style.display = "block";
  document.getElementById("closebtn").style.display = "none";
}

$('.content').click(function() {
  closeNav();
});

$(".mobile-nav a").click(function() {
  closeNav();
});
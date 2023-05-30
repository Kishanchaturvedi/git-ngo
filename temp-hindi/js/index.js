$(document).ready(() => {
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 0) {
      $('.navbar').addClass('scrolled');
    } else {
      $('.navbar').removeClass('scrolled');
    }
  });

  var blog = new Swiper(".blog-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  var gallary1 = new Swiper(".gallary-swiper-1", {
    loop: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    speed: 3000,
    slidesPerView: "auto",
    spaceBetween: 15,
  });

  var gallary2 = new Swiper(".gallary-swiper-2", {
    loop: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    speed: 3000,
    slidesPerView: "auto",
    spaceBetween: 15,
    direction: 'horizontal',

  });


})

$(document).ready(function () {

  $('.nav-links').click(function () {
    $('.nav-links').removeClass("active");
    $(this).addClass("active");
  });
});

function showMenu() {
  $('#sidebar').addClass('open')
  $('.overlay-menu').fadeIn()
  $('body').css('overflow', 'hidden')
}

function hideMenu() {
  $('#sidebar').removeClass('open')
  $('.overlay-menu').fadeOut()
  $('body').css('overflow', 'auto')
}


function setInputValue(value) {
  $("#inputBox").val(value);
}








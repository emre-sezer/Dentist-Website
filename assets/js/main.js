 
var swiper = new Swiper(".serviceSlider", {
  slidesPerView: "4",
  spaceBetween: 30,
 

  navigation: {
    nextEl: ".swiper-button-right",
    prevEl: ".swiper-button-left",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },


  breakpoints: {
    0: {
      slidesPerView: "2",
      loop:true,
    },
    
    767: {
      slidesPerView: "3",
      loop:true,
    },
    991: {
      slidesPerView: "4",
    },
    1920: {
      slidesPerView: "4",
    },
 
  },


});



 
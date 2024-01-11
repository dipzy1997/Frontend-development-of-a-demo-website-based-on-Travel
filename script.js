
//LOADER ANIMATION

let preloader = document.querySelector(".preloader");

  window.addEventListener("load", function(){
    preloader.style.display = "none";
  })


//CUSTOMISED MOUSE POINTER
var cursor = document.querySelector('.cursor');

	document.addEventListener("mousemove", function(e){
		var x = e.clientX;
		var y = e.clientY;
		cursor.style.left = x + 'px';
		cursor.style.top = y + 'px';
	});

//BACK-TO-TOP

   let backtotop = document.querySelector(".back-to-top");

    window.addEventListener("scroll", function(){
      if(window.scrollY > 300){
        backtotop.classList.add("add");
      }
      else{
        backtotop.classList.remove("add");
      }
    })

  //STICKY NAVBAR
 
      let header = document.querySelector("header");
      let hamcontent = document.querySelector(".hamcontent");
    
      window.addEventListener("scroll", function(){
        if(window.scrollY > 200){
          header.classList.add("fixed");  
        }
        else{
          header.classList.remove("fixed");
        }
      })
    

//HAMBURGER MENU CREATION

 let ham = document.querySelector(".ham");
 let menusidebar = document.querySelector(".menusidebar");
 let backdrop = document.querySelector(".backdrop");
 ham.addEventListener("click", function(){
     ham.classList.toggle("hamactive");
     menusidebar.classList.toggle("hamactive");
     backdrop.classList.toggle("backshow");
 })


//HEADER LOG IN FORM
let loginform_head = document.querySelector(".loginform_head");
let loginformhead = document.querySelector(".loginformhead");
let logcross = document.querySelector("#logcross");

loginform_head.addEventListener("click", function(){
  loginformhead.classList.toggle("showformhead");
});

logcross.addEventListener("click", function(){
  loginform_head.classList.remove("showformhead");
})

//BOTTOM LOG IN FORM

let loginform_header_bottom = document.querySelector(".loginform_header_bottom");
let loginformbottom = document.querySelector(".loginformbottom");
let logcross_bottom = document.querySelector("#logcross_bottom");


loginform_header_bottom.addEventListener("click", function(){
  loginformbottom.classList.toggle("showformbottom");
})

logcross_bottom.addEventListener("click", function(){
  loginform_header_bottom.classList.remove("showformbottom");
})

//ACTIVE NAV LINKS FOR TOP NAV LINKS IN BIG SCREEN [CREATING BY ONCLICK]

$(document).ready(function(){
  $(document).on("click", "#mainli li", function(){
    $(this).addClass('mainli_active').siblings().removeClass('mainli_active');
  })
});


/*let sections = document.querySelectorAll("section");
let navlinks = document.querySelector("#mainli a");

window.onscroll = () =>{
  sections.forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navlinks.forEach(links =>{
        links.classList.remove('mainli_active');
        document.querySelector('#mainli a[href*'= + id +']').classList.add('mainli_active');
      })
    }
  })
} */

//ACTIVE NAV LINKS FOR HAMBURGUR [CREATING BY ONCLICK]

$(document).ready(function(){
  $(document).on("click", ".hamul li", function(){
    $(this).addClass('activeli').siblings().removeClass('activeli');
    $(".backdrop").removeClass("backshow");
    $(".menusidebar").removeClass("hamactive");
    $(".ham").removeClass("hamactive");
  })
})


//BANNER_1 SWIPER

        var swiper = new Swiper(".b1swiper", {
          spaceBetween: 30,
          effect: "fade",
          loop:true,
          autoplay: {
          delay: 3500,
          disableOnInteraction: false,
         },
         navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
         
        });


//BANNER_5 OWL CAROUSEL

$('#b5slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    pagination:true,
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        900:{
            items:2
        },
        1300:{
          items:3
      }
    }
})

//BANNER_7 OWL CAROUSEL

$('.b7slide').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    pagination:true,
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        900:{
          items:2
      },
      1300:{
        items:3
    }
    }
})
   
//BANNER_8 SWIPER

var swiper = new Swiper(".blogslide", {   
    grid: {
      rows: 2,
    },
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
        grid: {
          rows: 2,
        }
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        grid: {
          rows: 2,
        }
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      }     
    }
  });


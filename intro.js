$(document).ready(function(){

  
 $('#hamburger_menu').click(function(){
  $('.nav').fadeIn();
  $('#hamburger_menu').fadeOut();
  $('#close_button').fadeIn();
})

$('#close_button').click(function(){
 $('.nav').fadeOut();
 $('#hamburger_menu').fadeIn();
 $('#close_button').fadeOut();
})

function reveal() {
    var reveal = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveal.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveal[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveal[i].classList.add("active");
      } else {
        reveal[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);


  
let slideIndex = 0;

 showSlides ();
function showSlides (){
    let j;
    let slides = document.getElementsByClassName('myslides');
    for(j = 0; j< slides.length; j++) {
        slides[j].style.display = 'none';
    }
    slideIndex++;
    if(slideIndex >slides.length){
        slideIndex = 1;
    };
    slides[slideIndex-1].style.display = 'block';
    setTimeout(showSlides,5000);
};

});
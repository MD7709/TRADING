$(document).ready(function(){
    var nav = document.querySelector('nav');
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 100) {
        nav.classList.add('bg-white','shadow');
      }
      else {
        nav.classList.remove('bg-white','shadow');
      }
    });
  //dropdown menu hover effect 
      $(".dropdown").hover(function(){
          var dropdownMenu = $(this).children(".dropdown-menu");
          if(dropdownMenu.is(":visible")){
              dropdownMenu.parent().toggleClass("open");
          }
      });

   });

   
   
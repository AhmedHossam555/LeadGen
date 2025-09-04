$(document).ready(function(){
  // Varaibles Dom
  const windowDom = $(window);
  const headerDom = $('header');
    // Add or remove 'black-header' class based on scroll position
  windowDom.scroll(function(){
    if(windowDom.scrollTop() > 42){
      headerDom.addClass('black-header');
    }else{
      headerDom.removeClass('black-header');
    }
  });
  // Owl Carousel for slider image 
    $(".owl-carousel").owlCarousel({
         responsive: true,
         items : 1,
         navigationText : ["prev","next"],
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false
    });


});
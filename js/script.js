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




});
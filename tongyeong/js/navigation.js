$(document).ready(function(){
  $('#menu li').on('mouseover focusin', function(){
    $(this).children('ul').stop().fadeIn(0);
  });
  $('#menu li').on('mouseleave', function(){
    $(this).children('ul').stop().fadeOut(0);
  });
  $('#menu').on('mouseover focusin', function(){
    $('.bg_gnb').stop().fadeIn(0);
    $('#gnb').addClass('mouse');
  });
  $('#menu').on('mouseleave focusout', function(){
      $('.bg_gnb').stop().fadeOut(0);
      $('#gnb').removeClass('mouse');
  }); 
  $('#menu > li').on('focusout', function(){
    $(this).children('ul').stop().fadeOut(0);
  });
});

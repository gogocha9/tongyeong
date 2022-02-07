$(document).ready(function(){
    var snb = $('.nav-main');
    var snb_nav = $('#navigation li');

    snb_nav.each(function() {
        if($(this).hasClass('on')) {
            $(this).children('ul').show();
        }
    });

    snb.on('click', function() {
        $(this).parent().addClass('on').children('ul').stop().slideDown(400);
        $(this).parent().siblings('li').removeClass('on').children('ul').stop().slideUp(200);
        return false;
    });
});
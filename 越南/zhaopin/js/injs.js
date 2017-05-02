/**
 * Created by Administrator on 2017/4/19.
 */



/*
$(function(){

    $(".ku-li").hover(function(){
        $(".hove").show();
    },function () {
        $(".hove").show();
    });


});*/
$(function(){
    $(window).scroll(function() {
        if($(window).scrollTop() >= 100){
            $('.actGotop').fadeIn(300);
        }else{
            $('.actGotop').fadeOut(300);
        }
    });
    $('.actGotop').click(function(){
        $('html,body').animate({scrollTop: '0px'}, 800);});



    $(".ku-li").hover(function(){
        $(".pl").hide();
        //$(".hove").show();
    },function () {
        //$(".pl").show();
        $(".hove").hide();
    });













});
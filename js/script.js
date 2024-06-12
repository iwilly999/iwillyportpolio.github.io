
//탑메뉴 
$(document).ready(function(){
    $('.gnb a').click(function(){
        
        var i = $(this).parent().index();
        
        $('.body_wrap > div').fadeOut(0);
        $('.body_wrap > div').eq(i).fadeIn(0);
    });
});





//디자인 슬라이드
$(document).ready(function(){
    setInterval(function(){
        $('.ai_contents_slide ul').animate({
            left: '-=' + 900
        },'slow',function(){
            $('.ai_contents_slide li').first().appendTo('.ai_contents_slide ul');
            $('.ai_contents_slide ul').css('left',0);
        }); 
    },3000);
});




//토글--공모전
$(function () {
    /* $(".bottom_01").hide(); */

    $('.ai_contents_gonmo h3').click(function () {
        $('.ai_contents_gonmo_list').stop().slideToggle('fast');
        $(this).toggleClass("active");
    });
});

//토글--포스터
$(function () {

    $('.ai_contents_poster h3').click(function () {
        $('.ai_contents_poster_list').stop().slideToggle('fast');
        $(this).toggleClass("active");
    });
});

//토글--일러/포토샵
$(function () {

    $('.ai_contents_potoiller h3').click(function () {
        $('.ai_contents_potoiller_list').stop().slideToggle('fast');
        $(this).toggleClass("active");
    });
});


//토글--일러/포토샵
$(function () {

    $('.ai_contents_website h3').click(function () {
        $('.ai_contents_website_list').stop().slideToggle('fast');
        $(this).toggleClass("active");
    });
});



//상세페이지 슬라이드
$(document).ready(function(){
    setInterval(function(){
        $('.product_page_sl_list ul').animate({
            left: '-=' + 400
        },'slow',function(){
            $('.product_page_sl_list li').first().appendTo('.product_page_sl_list ul');
            $('.product_page_sl_list ul').css('left',0);
        }); 
    },2000);
});



//토글-- 해신탕,녹차
$(function () {

    $('.haesintang>h3').click(function () {
        $('.haesintang_page').stop().slideToggle('fast');
        $(this).toggleClass("active");
    });
});


//토글-- 장어탕 / 오이소박이
$(function () {

    $('.jang-eotang>h3').click(function () {
        $('.jang-eotang_page').stop().slideToggle('fast');
        $(this).toggleClass("active");
    });
});


//토글-- 전복장 / 싸리울노각
$(function () {

    $('.jeonbogjang>h3').click(function () {
        $('.jeonbogjang_page').stop().slideToggle('fast');
        $(this).toggleClass("active");
    });
});


//토글-- 막걸리식초 / 진도강황
$(function () {

    $('.maggeollisigcho>h3').click(function () {
        $('.maggeollisigcho_page').stop().slideToggle('fast');
        $(this).toggleClass("active");
    });
});





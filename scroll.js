$(function() {
   $(window).scroll(function(){
    if($(document).scrollTop()){
        $(".first_div").hide().fadeOut("slow");
        $(".certif").show().fadeIn("slow");
    }
    else if ($(document).scrollTop()){
        $(".certif").hide().fadeout("slow");
        $(".contact").show().fadeIn("slow");
    }
    else{
        $(".first_div").show();
        $(".certif").show();
    };
   }); 
});
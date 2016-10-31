$(document).foundation()

var upper = $("#up");

$(window).scroll(function(){
    if($(this).scrollTop() > 90){
        upper.fadeIn(300);
    }else{
        upper.fadeOut(100);
    }
});

upper.on('click',function(){
    $("html, body").animate({"scrollTop":0}, 200);
});
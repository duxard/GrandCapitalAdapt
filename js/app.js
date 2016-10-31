$(document).foundation()

var upper = $("#up");

$(document).scroll(function(){
    if($(this).scrollTop() > 90){
        upper.fadeIn(300);
    }else{
        upper.fadeOut(100);
    }
});

upper.on('click',function(){
    $("body,html").animate({"scrollTop":0}, 200);
});
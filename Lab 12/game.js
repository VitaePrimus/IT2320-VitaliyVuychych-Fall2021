$(function(){

    $("#up").on("click", function(){
        $("#box").stop();
        $("#box").animate({top: 0}, 1000);
    });

    $("#down").on("click", function(){
        $("#box").stop();
        $("#box").animate({top: $("#container").height() - $("#box").height()}, 1000);
    });

    $("#left").on("click", function(){
        $("#box").stop();
        $("#box").animate({left: 0}, 1000);
    });

    $("#right").on("click", function(){
        $("#box").stop();
        $("#box").animate({left: $("#container").width() - $("#box").width()}, 1000);
    });

    $("#fadeout").on("click", function(){
        $("#box").stop();
        $("#box").fadeOut(1000);
    });

    $("#fadein").on("click", function(){
        $("#box").stop();
        $("#box").fadeIn(1000);
    });

    $("#blink").on("click", function(){
        // Ignored per instructions
    });

    $("#reset").on("click", function(){
        $("#box").stop();
        $("#box").animate({top: 0}, 1);
        $("#box").animate({left: 0}, 1);
        $("#box").fadeIn(1);
    });
   

});
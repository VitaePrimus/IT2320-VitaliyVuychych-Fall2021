
$(function(){    

    $("#btn1").on("click",function(){
        $(".wrapperDiv").hide();
    });    

    $("#btn2").on("click",function(){
        $(".wrapperDiv").show();
    });

    $("#btn3").on("click",function(){
        $("#1").css("background-color","black");
        $("#1").text("one");
        $("#1").css("color","white");

        $("#2").css("background-color","white");
        $("#2").text("two");
        $("#2").css("color","black");

        $("#3").css("background-color","black");
        $("#3").text("three");
        $("#3").css("color","white");

        $("#4").css("background-color","white");
        $("#4").text("four");
        $("#4").css("color","black");
    });

    $(".wrapperDiv").mouseenter(function(){
        $(".wrapperDiv").removeAttr("style");
        $("#1").text("1");
        $("#2").text("2");
        $("#3").text("3");
        $("#4").text("4");
    })

    $(".wrapperDiv").hover(function(){
        $(this).css("background-color", "yellow");
    })

    $(".wrapperDiv").mouseout(function(){
        $(this).removeAttr("style");
    })

});
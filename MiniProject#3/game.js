
$(function(){
    var curImage = "";
    var prevImage = "";
    var curDiv = "";
    var prevDiv = "";
    var matches = 0;

    $("#newGame").on("click", function(){
        $("img").animate({opacity: "100%"}, 1);
        $("#messages").text("Let's begin!!! Remember the cards...");
        $("img").delay(5000).animate({opacity: "0%"}, 1);
        window.setTimeout(function () {
            $("#messages").html("Click on any 2 cards to find a match");
        }, 5000);
    });

    $("#container").find("div").find("img").on("click", function(){
        if($(this).css("opacity") == 0){
            // console.log($(this).css("opacity"));
            flipCard(this);
            if(prevImage == ""){
                prevImage = $(this).attr("src");
                prevDiv = $(this);
            }
            else{
                curImage = $(this).attr("src");
                curDiv = $(this);
            }
            checkElem();    
        }
    })

    function flipCard(image){
        $(image).animate({opacity: "100%"}, 1);
        //$(image).animate({ deg: 360})
    }

    function checkElem(){
        if(curDiv != "" && prevDiv != ""){
            if(prevImage == curImage){
                $("#messages").text("Hurray!!! Match found...");
                prevImage = "";
                curImage = "";
                prevDiv = "";
                curDiv = "";
                matches++;
                if(matches >= 6){
                    $("#messages").text("All matches found. Game over");
                }
            }
            else{
                $("#messages").text("Oops!!! Please try again...");
                $(prevDiv).animate({opacity: "0%"}, 1);
                $(curDiv).animate({opacity: "0%"}, 1);
                prevImage = "";
                curImage = "";
                prevDiv = "";
                curDiv = "";
            }
        }
    }
});
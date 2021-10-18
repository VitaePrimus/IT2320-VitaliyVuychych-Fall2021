/*********************************************************************/
//Global Area
window.onload = function(){
    var btns = document.getElementsByClassName("btnOrig");

    for(var i = 0; i < btns.length; i++){
        btns[i].addEventListener("click", function(){
            ChangeButtonText(this);
        });
    }

    var sqrs = document.getElementsByClassName("square3");

    for(var i = 0; i < sqrs.length; i++){
        sqrs[i].addEventListener("click", function(){
            ChangeSquare(this);
        });
    }
}


/***************** Function definition area *************/
function ChangeButtonText(btns){
    btns.innerText = "Active";
}

function ChangeSquare(sqrs){
    sqrs.style.backgroundColor = "green";
}
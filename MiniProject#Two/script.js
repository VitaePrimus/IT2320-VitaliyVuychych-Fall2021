//Global area
var count = 0;

window.onload=function() {
var btns = document.getElementsByClassName("col");

    for(var i = 0; i < btns.length; i++){
        btns[i].addEventListener("click", function(){
            userTurn(this);
            computerTurn(btns);
        });
    }
}

/************** Function area *******************/

//function provided. Add parameter(s) if needed
function userTurn(btns){
    if(btns.innerText != "O"){
        changeButton("X", btns, "green");
    }
    else{
        return;
    }
}

//function provided. Add parameter(s) if needed
function computerTurn(btns){
    var rng = random(btns.length);
    var XBtn = btns.innerText = "X";
    var OBtn = btns.innerText = "O";

    while(count < 4){
        if(btns[rng].innerText != XBtn && btns[rng].innerText != OBtn){
            changeButton("O",btns[rng], "red");
            count++;
            break;
        }
        else{
            rng = rng + 1;
        }
        if(rng >= btns.length){
            rng = 0;
        }
    }
}

function changeButton(text, btns, color){
    btns.innerText = text;
    btns.style.backgroundColor = color;
}

// Creating random for computer move
function random(topNum) {
    return Math.floor(Math.random() * topNum);
}
//Global area
var count = 0;

window.onload=function() {
    var reset = document.getElementById("reset")
    reset.addEventListener("click", resetGameBoard);    
    
    var btns = document.getElementsByClassName("col");

        for(var i = 0; i < btns.length; i++){
            btns[i].addEventListener("click", function(){
                userTurn(this);
                computerTurn(btns);
            });
        }
}

var winningPos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

/************** Function area *******************/

//function provided. Add parameter(s) if needed
function userTurn(btns){
    // Stoping game after a win
    if(is_winner("X") == 1){
        return;
    }
    if(is_winner("O") == 1){
        return;
    }

    
    if(btns.innerText != "O"){
        changeButton("X", btns, "green");
    }
    else{
        return;
    }
    determineWinner("X");
}

//function provided. Add parameter(s) if needed
function computerTurn(btns){
    var rng = random(btns.length);
    var XBtn = btns.innerText = "X";
    var OBtn = btns.innerText = "O";

    // Stoping game after a win
    if(is_winner("X") == 1){
        return;
    }
    if(is_winner("O") == 1){
        return;
    }


    while(count < 8){
        if(btns[rng].innerText != XBtn && btns[rng].innerText != OBtn){
            changeButton("O",btns[rng], "red");
            break;
        }
        else{
            rng = rng + 1;
        }
        if(rng >= btns.length){
            rng = 0;
        }
    }
    determineWinner("O");
}

function changeButton(text, btns, color){
    btns.innerText = text;
    btns.style.backgroundColor = color;
}

// Creating random for computer move
function random(topNum) {
    return Math.floor(Math.random() * topNum);
}

function determineWinner(elem){
    var stat = document.getElementById("status");
    var message = document.getElementById("message");    
    
    for(var i = 0; i < winningPos.length; i++){
        if( document.getElementById(winningPos[i][0]).innerHTML == elem &&
            document.getElementById(winningPos[i][1]).innerHTML == elem &&
            document.getElementById(winningPos[i][2]).innerHTML == elem){
            
            stat.innerHTML = "GAME OVER";
            
            if(elem == "X"){
                message.innerText = "User is the winner!!!";
            }
            else if(elem == "O"){
                message.innerText = "Computer is the winner!!!";
            }
        }
    }
    count++;

    if(count > 8){
        stat.innerHTML = "GAME OVER"
    }
}

function resetGameBoard(){
    var stat = document.getElementById("status");
    var message = document.getElementById("message");    
    var btns = document.getElementsByClassName("col");

    for(var i = 0; i < btns.length; i++){
        btns[i].innerHTML = "";
        btns[i].style.backgroundColor = "white";
    }

    stat.innerText = "";
    message.innerText = "This is a new game!!! Click on any of the squares to start the game";

    count = 0;
}

function is_winner(elem){
    var is_winner = 0;
    
    for(var i = 0; i < winningPos.length; i++){
        if( document.getElementById(winningPos[i][0]).innerHTML == elem &&
            document.getElementById(winningPos[i][1]).innerHTML == elem &&
            document.getElementById(winningPos[i][2]).innerHTML == elem){
          
            is_winner = 1;
            break;
        }
    }

    return is_winner;
}
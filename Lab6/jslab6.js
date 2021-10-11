/*********************************************************************/
//Global Area




/***************** Function definition area *************/
function createLink(){
    var parent = document.getElementById("parentLink");
    var child = document.createElement("a");

    child.setAttribute("href", "http://www.tri-c.edu");
    child.innerHTML = "Tri-C link";

    parent.appendChild(child);
}


function removeLink(){
    var parent = document.getElementById("parentLink");
    var child = parent.lastElementChild;
    parent.removeChild(child);
}


function changeColor(){
    var color = document.getElementById("inputColor").value;
    
    var box = document.getElementById("box");
    box.style.backgroundColor = color;
    
}


function changeSq()
{
    //I want to get all the divs that have class = "square"
    var squares = document.getElementsByClassName("square");//returns more than 1 element
    //squares is an array
    for(var i=0; i<squares.length;i++)
    {
        squares[i].style.backgroundColor = "yellow";
        squares[i].style.borderRadius = "50px";
        squares[i].style.boxShadow = "2px 2px 2px grey";
        var x = squares[i].innerHTML;
        squares[i].innerHTML = x+ " Box";

    }
}

/*********************************************************************/
//Global Area
var color = 0;  // I decided to do different colors for the squeres using a global variable




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


function changeSquare(){
    var squares1 = document.getElementsByClassName("square1");
    var squares2 = document.getElementsByClassName("square2");

    const color1 = ["black", "yellow", "green", "orange"];
    const color2 = ["white", "blue", "teal", "pink"];

    for(var i=0; i<squares1.length;i++)
    {
        squares1[i].style.backgroundColor = color1[color];
        squares2[i].style.backgroundColor = color2[color];
    }

    color++;
    if(color >= 4){color = 0};

}


function changeShape(){
    var squares1 = document.getElementsByClassName("square1");
    var radius = document.getElementById("inputRadius").value;
    
    for(var i=0; i<squares1.length;i++)
    {
        squares1[i].style.borderRadius = radius;
    }
}

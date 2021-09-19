//Javascript is case sensitive

/*Javascript statement end in a semicolon
Javascript comments can span single or multiple lines*/


console.log("console log - hello world");//log in developer tools
var globalX = 100;//global scope

function hello() //function definition
{
    alert("alert - hello world!");//popup window    
}

function add()//function definition
{
    var x = 3;
    var y = 5;
    var sum = x + y;
    alert("Sum is " + sum);
}

function substract()
{
    var a = 1000;
    var b = 100;
    var diff = a - b;
    alert("Difference is" + diff);
}

//Homework Lab- Complete Multiplication and Division functionality

function increment()
{ 
    var y = 10;//local scope - resets y everytime function is called
    globalX = globalX+10;//can add any number to itself
    //y = y+10;
    y+=10;//same as y = y+10;
    alert("x="+globalX + "y="+y); 

}

/* JS statements
Conditional statements:
If statement
Switch statement

Loops:
For loop
While loop
Do while loop

Break
*/

function compare()
{
    var charlie = 120;
    var john = 120;
    
    //conditional if statement
    
    if (charlie > john)
    {
        alert("Charlie is taller");
    }
    else if( charlie == john)//"=" is assignment; "==" is comparison
    {
        alert("Charlie and John are of the same height");
    }
    else
    {
        alert("John is taller");
    }

}

function IsTropical(fruit)//fruit is a variable and is an input parameter
{
    
    var isTropical = false; //boolean variable: True or False

    switch(fruit)
    {
        case "banana":
            isTropical = true;
            break;

        case "papaya":
            isTropical = true;
            break;

        case "tomato":
            isTropical = false;
            break;

        case "mango":
            isTropical = true;
            break;

        case "watermelon":
            isTropical = true;
            break;

        default:
            isTropical = false;            
    }

    alert("Is "+ fruit+ " tropical?"+ isTropical );

}

function Repeat( message )
{
    var counter = 0;
    console.log("While loop:");
    while (counter < 5)
    {
        console.log( message );
        counter++; //You have to remember to increment the counter otherwise the loop will go on endlessly
    }

    counter = 0;
    console.log("Do - While loop:");
    do 
    {
        console.log( message );
        counter++; //You have to remember to increment the counter otherwise the loop will go on endlessly
    } while (counter < 5);

    console.log("For loop:");
    /************************************************* */
    for(var counter=0; counter < 5; counter++)
    {
        console.log(message);
    }
}

function multiply(){
    var x = 25;
    var y = 42;
    var sum = x * y;
    alert("The answer is " + sum);
}

function divide(){
    var x = 48;
    var y = 12;
    var sum = x / y;
    alert("Each kid will get " + sum + " pencils.");
}

function mean(){
    const numbers = [25,47,98,46,52];
    var sum = 0;
    var mean;
    
    for(var i = 0; i < numbers.length; i++){
        sum = sum + numbers[i];
    }

    mean = sum / numbers.length;
    alert("The mean of these numbers is: " + mean);
}

function evenSum(){
    var sum = 0;

    for(var i = 1; i <= 200; i++){
        if(i % 2 == 0){
            sum = sum + i;
        }
    }

    alert("The sum of all even numbers in the given range is: " + sum);
}

function fibonacci(){
    const fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    var count = 2;
    var num1 = 0;
    var num2 = 1;

    while(count < 20){
        fibonacci[count] = num1 + num2
        num1 = num2;
        num2 = fibonacci[count];
        count++;        
    }

    alert("Fiest 20 numbers of the Fibonacci sequence are: " + fibonacci);

}



    
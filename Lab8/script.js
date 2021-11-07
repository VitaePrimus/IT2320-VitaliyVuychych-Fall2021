window.onload=function() {    
    var btn1 = document.getElementById("btn1")
        btn1.addEventListener("click", function(){
            console.log(jsonBook);
        })
    
    var btn2 = document.getElementById("btn2")
        btn2.addEventListener("click", function(){
            console.log(jsEmployees);
        })
}

////////////////////////////////////////////////////////////////////
const book = {title: "Neuromancer", 
    author: "William Gibson", 
    totalpagenum: "304", 
    publisher:"Penguin Galaxy", 
    isbn: "9780143111603",};

const jsonBook = JSON.stringify(book);

var employee = '{ "firstName":"Vitaliy","lastName":"Vuychych","id":"001","address":"100 MyStreet","jobTitle":"Developer"}'

const jsEmployees = JSON.parse(employee);

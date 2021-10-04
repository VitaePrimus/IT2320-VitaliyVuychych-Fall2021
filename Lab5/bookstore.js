/********************************************/
//Global scope
//Define book object here 
var books = [{name: "Neuromancer", author: "William Gibson", price: 50, origin: "USA"},
            {name: "1984", author: "George Orwell", price: 40, origin: "UK"},
            {name:"Fahrenheit 451", author:"Ray Bredburry", price: 50, origin: "USA"},
            {name:"Hitchhikers Guide to the Galaxy", author:"Douglas Adams", price: 60, origin:"UK"},
            {name: "Sea Wolf", author: "Jack London", price: 40, origin: "USA"},
            {name:"The Stone Angel", author: "Margaret Laurence", price: 50, origin: "Canada"},
            {name:"The Handmaid's Tale", author: "Margaret Atwood", price: 40, origin: "Canada"},
            {name:"The Dawn of Canadian History", author: "Stephen Leacock", price: 45, origin:"Canada"},
            {name:"Twenty Thousand Leagues Under the Sea", author:"Jules Verne", price: 60, origin: "France"},
            {name:"Zakhar Berkut", author:"Ivan Franko", price: 60, origin: "Ukraine"},
            {name:"Kobzar", author:"Taras Shevchenko", price: 55, origin: "Ukraine"},
            {name:"The Forest Song", author:"Lesya Ukrainka", price: 55, origin:"Ukraine"},
            {name:"Pride and Prejudice", author:"Jane Austen", price:42, origin:"UK"},
            {name:"The Lord of the Rings Trilogy", author:"J. R. R. Tolkien", price:60, origin:"UK"},
            {name:"Robinson Crusoe", author:"Daniel Defoe", price:55, origin:"UK"},
            {name:"Frankenstein; or, The Modern Prometheus", author:"Mary Shelley", price:50, origin:"UK"},
            {name:"The Great Gatsby", author:"F. Scott Fitzgerald", price:40, origin:"USA"},
            {name:"Moby-Dick", author:"Herman Melville", price:48, origin:"USA"},
            {name:"Catch-22", author:"Joseph Heller", price:42, origin:"USA"},
            {name:"Dune", author:"Frank Herbert", price:56, origin:"USA"},
        ];



/********************************************/
function getDiscountedPrices()
{
        books.forEach(function(book){
                book.salesPrice = book.price - (book.price * getDiscountPercent(book.origin));

                console.log(book.name + " written by " + book.author + ". Original price $" + book.price + ", is currently on sale for $" + book.salesPrice + ".");
        })

        //console.log(books);   // Used for testing
}

function getDiscountPercent(origin)
{
        if(origin == "USA"){
                return 0.1;
        }
        else if(origin == "UK"){
                return 0.05;
        }
        else if(origin == "Canada"){
                return 0.12;
        }
        else{
                return 0.15;
        }
}

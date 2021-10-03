/********************************************/
//Global scope
//Define book object here 
var books = [{name: "Neuromancer", author: "William Gibson", price: 50, origin: "USA"},
            {name: "1984", author: "George Orwell", price: 40, origin: "UK"},
            {name:"Fahrenheit 451", author:"Ray Bredburry", price: 40, origin: "USA"},
            {name:"Hitchhikers Guide to the Galaxy", author:"Douglas Adams", price: 50, origin:"UK"},
        //     {name:, author:, price:, origin:},
        //     {name:, author:, price:, origin:},
        //     {name:, author:, price:, origin:},
        //     {name:, author:, price:, origin:},
        //     {name:, author:, price:, origin:},
        //     {name:, author:, price:, origin:},
        //     {name:, author:, price:, origin:},
        //     {name:, author:, price:, origin:},
        //     {name:, author:, price:, origin:},
        //     {name:, author:, price:, origin:},
        //     {name:, author:, price:, origin:},
        //     {name:, author:, price:, origin:},
        //     {name:, author:, price:, origin:},
        //     {name:, author:, price:, origin:},
        //     {name:, author:, price:, origin:},
        //     {name:, author:, price:, origin:},
        ];



/********************************************/
function getDiscountedPrices()
{
        books.forEach(function(book){
                book.salesPrice = book.price - (book.price * getDiscountPercent(book.origin));

                console.log(book.name + " written by " + book.author + ". Original price $" + book.price + ", is currently on sale for $" + book.salesPrice + ".");
        })

        console.log(books);
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

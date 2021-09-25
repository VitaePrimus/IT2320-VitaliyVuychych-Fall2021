//Javascript is case sensitive

/*Javascript statement end in a semicolon
Javascript comments can span single or multiple lines*/

console.log("Lab 04 startup code");//log in developer tools


function CalculateCommission()
{
    var topCommission = 0;
    var topSalesPerson = "Nobody yet";

    //Your code goes here
    /*
    Here's the pseudocode in case you are wondering how to get started:*/

    // 1. Save salesperson names in an array
    const name = ["Brad", "Nila", "Joseph", "Kesh", "Lydia", "Devon", "Miller"];
    // 2. Save December sales amount in an array
    const december = [1500, 15000, 30000, 12000, 45000, 25000, 8000];
    // 3. Save January sales amount in an array
    const january = [10000, 25000, 20000, 14000, 30000, 16000, 30000];
    // 4. Save February sales amount in an array
    const february = [8000, 7500, 45000, 10000, 38000, 22000, 15000]

    const totalSales = [];
    const commission = [];
    const avgComm = [];
    
    // 5. In a "For" loop, for each person
    // Calculate Total sales = December sale + January sale + February sale
    for(var i = 0; i < name.length; i++){
        totalSales[i] = december[i] + january[i] + february[i];
    }

    // Calculate commission: 
    for(var i = 0; i < totalSales.length; i++){
        if(totalSales[i] >=0 && totalSales[i] <= 5000){
            commission[i] = totalSales[i] * 0.01;
        }
        else if(totalSales[i] >=5001 && totalSales[i] <= 10000){
            commission[i] = totalSales[i] * 0.02;
        }
        else if(totalSales[i] >=10001 && totalSales[i] <= 15000){
            commission[i] = totalSales[i] * 0.03;
        }
        else if(totalSales[i] >=15001 && totalSales[i] <= 30000){
            commission[i] = totalSales[i] * 0.05;
        }
        else{
            commission[i] = totalSales[i] * 0.08;
        }
    }

//         if total sales is greater than 30000 then commission = total sales * 0.08 
//         If total sales is greater than 15000).....etc
//         Continue the if condition for the remaining as specified in the requirement for commission %
        
//         Calculate average commission:
//         Avg commission = Total commission / 3

    for(var i = 0; i < commission.length; i++){
        avgComm[i] = commission[i] / 3;
        avgComm[i] = Math.round(avgComm[i] * 100) / 100     // Made this to round up avg commission to 2 decimals after the point
    }
//         Display sales person name, commission and average commission
    console.log("Name\t\t" + "Commission\t\t" + "Average Commission")
    console.log("-------------------------------------------------")

    for(var i = 0; i < commission.length; i++){
        console.log(name[i] + "\t\t " + commission[i] + "\t\t\t" + avgComm[i]);
    }

    console.log("-------------------------------------------------")
//         Store the commission to a "topCommission" variable.
//         Each time compare topCommission to commission of current salesperson 
//         to determine if this is the top commission

//     6. Outside the "For" loop, display topCommission and topSalesperson name.
// */

}
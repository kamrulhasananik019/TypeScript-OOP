// function calculationTax(income:number,taxYear?:number):number{
//     if((taxYear  || 2022)<5_000)
//         return income * 1.2;
//     return income *1.3
// }

// calculationTax(100);


// function calculationTax(income:number,taxYear:number):number{
//     if(taxYear <5_000)
//         return income * 1.2;
//     return income *1.3
// }

// calculationTax(100,1000)


function calculationTax(income:number,taxYear=2022):number{
    if((taxYear  || 2022)<5_000)
        return income * 1.2;
    return income *1.3
}

calculationTax(100);
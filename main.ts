#! /usr/bin/env node

//    "CURRENCY CONVERTER"
import inquirer from "inquirer";
 let currency=await inquirer.prompt //variable initializa
 (
    [
        { //Ask the user to enter Currency
            name :"fromCurrency",
            type:"list",
            massage:"enter your currency",
            choices:["PKR","USD","GBP","EUR"],
        },
        { //Asks the user which Currency they want to convert
            name:"conversionCurrency",
            type:"list",
            massage:"conversion to Currency",
            choices:["PKR","USD","GBP","EUR"],

        },
        
    ]
);    //Asks the user to enter the amount of conversion
let amount=await inquirer.prompt
(
    [
        {
            name: "conversion",
            type: "number",
            massage:"Enter the amount",
        }

    ]
);
console.log("---------------------------------------------------");
console.log("         - CURRENCY CONVERTER APP -  ");
//variable declaratiom
let exchangeRate:number;

if (currency.fromCurrency === currency.conversionCurrency)
{    //if both currencies are equal then show the same amount(no need of conversion)
    exchangeRate=amount.conversion;
    console.log("\n"+"You've entered the same target"+"\n"+"No conversion required."+"Your Amount is :" ,exchangeRate , currency.conversionCurrency);
}
//if the fromcurrency=pkr,then check the following
else if (currency.fromCurrency === "PKR")
{
    if (currency.conversionCurrency === "USD")
    {
        exchangeRate=amount.conversion*0.0036
        console.log("Your conversion amount is :" , exchangeRate) , currency.conversionCurrency;
    }

    else if (currency.conversionCurrency === "GBP")
    {
        exchangeRate =amount.conversion*0.0028
        console.log("\n"+"Your Conversion Amount is :" ,exchangeRate , currency.conversionCurrency);
    }

    else if (currency.conversionCurrency === "EUR")
    {
        exchangeRate= amount.conversion*0.0033;
        console.log("\n"+"Your Conversion Amount is :" ,exchangeRate) , currency.conversionCurrency;
    };

} //if the fromcurrency =USD ,then check the following condition
else if (currency.fromCurrency === "USD")
{
    if (currency.conversionCurrency === "PKR")
    {
        exchangeRate=amount.conversion*277.95,
        console.log("\n"+"Your Conversion Amount is :" ,exchangeRate , currency.conversionCurrency);
    }

    else if (currency.conversionCurrency === "GBP")
    {
        exchangeRate=amount.conversion*0.79,
        console.log("\n"+"Your Conversion Amount is :" ,exchangeRate , currency.conversionCurrency);
    }
    else if (currency.conversionCurrency === "EUR")
    {
        exchangeRate=amount.conversion*0.93,
        console.log("\n"+"Your Conversion Amount is :" ,exchangeRate , currency.conversionCurrency);
    };

} //if the from currencY = GBP ,then check the following condition
 else if (currency.fromCurrency === "GBP")    
 {
    if (currency.conversionCurrency === "PKR")
    {
        exchangeRate=amount.conversion*350.77,
        console.log("\n"+"Your Conversion Amount is :" ,exchangeRate , currency.conversionCurrency);
    }
    else if (currency.conversionCurrency === "USD")
    {
        exchangeRate=amount.conversion*1.26,
        console.log("\n"+"Your Conversion Amount is :" ,exchangeRate , currency.conversionCurrency);  
    }
    else if (currency.conversionCurrency === "EUR")
    {
        exchangeRate=amount.conversion*1.17,
        console.log("\n"+"Your Conversion Amount is :" ,exchangeRate , currency.conversionCurrency);
    }
}  ////if the fromcurrency=EUR ,then check the following condition
else if (currency.fromCurrency === "EUR")
{
    if (currency.conversionCurrency === "PKR")
    {
        exchangeRate=amount.conversion*299.81,
        console.log("\n"+"Your Conversion Amount is :" ,exchangeRate , currency.conversionCurrency);
    }

    else if (currency.conversionCurrency === "USD")
    {
        exchangeRate=amount.conversion*1.08,
        console.log("\n"+"Your Conversion Amount is :" ,exchangeRate , currency.conversionCurrency);
    }

    else if (currency.conversionCurrency === "GBP")
    {
        exchangeRate=amount.conversion*0.85,
        console.log("\n"+"Your Conversion Amount is :" ,exchangeRate , currency.conversionCurrency);
    }
}
else
{ //if the user does'nt select correctly from the options
    console.log("You've entered an Invalid Currency");
};
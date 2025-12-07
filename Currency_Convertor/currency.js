import https from "https";
import chalk from "chalk";
import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const apiKey = '74a76e0e41d793878cb3af2f';
const url = 'https://v6.exchangerate-api.com/v6/74a76e0e41d793878cb3af2f/latest/USD';

const convertCurrency = (amount, rate) => {
    return (amount*rate).toFixed(2);
}

https.get(url, (response) => {
    let data = "";
    response.on("data", (chunk) => {
        data += chunk;
    })

    response.on("end", () => {
        const rates = JSON.parse(data).conversion_rates;
        
        rl.question("Enter the amount in USD: ", (amount) => {
            rl.question("Enter the target currency (e.g. INR, EUR, YEN etc.):", (currency) => {
                const rate = rates[currency.toUpperCase()];
                if(rate){
                    console.log(`${amount} is equal to ${convertCurrency(amount, rate)} ${currency}`);
                }else{
                    console.log("Invalid Currency Code...Please try again!")
                }
                rl.close();
            })
        })
        
    })

})
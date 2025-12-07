import readline from "readline";
import fs from "fs";

const rl = readline.createInterface({
    input: process.stdin, //reading on the CLI
    output: process.stdout, //writing on the CLI
})

const fileCreation = () => {
    rl.question("Enter your File Name: ", (filename) => {
        rl.question("Enter the content for your file: ", (content) => {
            fs.writeFile(`${filename}.txt`, content, (err) => {
                if(err){
                    console.error(`Error while writing the file: , ${err.message}`);
                } else {
                    console.log(`File "${filename}.txt" created successfully`);
                }
                rl.close();
            })
        })
    })
}




fileCreation();
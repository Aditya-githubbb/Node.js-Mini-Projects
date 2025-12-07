import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin, //reading on the CLI
    output: process.stdout, //writing on the CLI
})

const todos = [];

const showMenu = () => {
    console.log("\n 1. Add a task.");
    console.log("\n 2. View all tasks.");
    console.log("\n 3. Exit.");
    rl.question("Choose any option you want to.", handleInput);
}

const handleInput = (option) => {
    if(option === "1"){
        rl.question("Enter the task:", (task) =>{
            todos.push(task);
            console.log("Task added:", task);
            showMenu();
        })
    }

    else if(option === "2"){
        console.log("\n Your ToDo Lists:");
        todos.forEach((task, index) => {
            console.log(`${index+1}.${task}`);
        })
        showMenu();
    }

    else if(option === "3"){
       console.log("See you...Goodbye!");
       rl.close();
    }

    else{
        console.log("Invalid Option...Please try again.");
        showMenu();
    }
}
showMenu();
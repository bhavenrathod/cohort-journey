import chalk from "chalk";
console.log("hello chalk");
console.log(chalk.blue("Hello, world!"));
console.log(chalk.red.bold("This is an error message."));
console.log(chalk.green.underline("This is a success message."));

// to run this file run the command
// node --experimental-modules app.mjs
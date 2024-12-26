const fs = require("fs");
const { Command } = require("commander"); // imported the commander library
const program = new Command(); // object creation

program // program initialization
  .name("counter")
  .description("CLI to count words in the file")
  .version("0.8.0");

program
  .command("count") // command initialization
  .description("Split the file and give number of words")
  //   argument
  .argument("<file>", "file to count")
  // actual function
  .action((file) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const words = data.split(" ").length;
        console.log(`There are ${words} words in the file ${file}`);
      }
    });
  });
program.parse(); // The primary purpose of program.parse() is to parse the command-line arguments passed to your Node.js application. It reads the arguments from process.argv by default.

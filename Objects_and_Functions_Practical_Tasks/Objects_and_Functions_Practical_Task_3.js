/*Your name is saved in the payment terminal, write a function to define the name in 
the terminal (if you entered your name, then hello + name, if not, then there is no such name)*/

const readline = require('readline');

function greetCustomer(name) {
  const savedName = "Your Name";

  if (name == savedName) {
    return "Hello, " + name + "!"
  } else {
    return "No such name."
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your name: ", function(customerName) {
  const greeting = greetCustomer(customerName);
  console.log(greeting);
  rl.close();
});

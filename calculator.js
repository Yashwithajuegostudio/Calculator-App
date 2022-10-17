var readline = require("readline-sync");

function readTwoNumber() {
  let num1 = parseFloat(readline.question("Enter the first number: "));
  let num2 = parseFloat(readline.question("Enter the Second number: "));
  return { num1, num2 };
}
function calculate(operator) {
  let { num1, num2 } = readTwoNumber();
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
  }
  return result;
}
function calculator() {
  console.log("Welcome to Calculator!\n");
  console.log(
    "Select an Option:\n 1 - Addition\n 2 - Subtraction \n 3 - Mult \n 4 - Div\n 5 - Exit\n"
  );
  let option;
  do {
    option = readline.question("\nEnter your Option: ");
    if (option == 1) {
      console.log(`Addition Output is ${calculate("+")}`);
    } else if (option == 2) {
      console.log(`Subtraction Output is ${calculate("-")}`);
    } else if (option == 3) {
      console.log(`Multiplication output is ${calculate("*")}`);
    } else if (option == 4) {
      console.log(`Division output is ${calculate("/")}`);
    } else {
      console.log("\nBye Bye!!!");
    }
  } while (option != 5);
}

calculator();

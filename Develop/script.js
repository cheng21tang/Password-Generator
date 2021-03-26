// <--------Declaring variables-------->
// Create a Prompt box to store in a var called "passwordLength" 
// Create a var "lowercaseArray" to store all lowercase characters (example: ["a", "b"....])
// Create a var "uppoercaseArray" to store all uppercase characters
// Create a var "numbersArray" to store all number characters
// Create a var "symbolsArray" to store all special(symbols) characters
// Create a var "password" to store my password (make this a empty string to start)
// Create a var "passwordArray" to store possible characters (make this an empty array to start)
// Create a var "hasLowercase" to store users input
// Create a var "hasUppercase" to store users input
// Create a var "hasNumberscase" to store users input
// Create a var "hasSpecialcase" to store users input
// Create a var "random" to store users input

// function generatePassword() {
// <--------Declaring variables-------->
// Check if "passwordLength" is between 8-128
// If it not a valid number, alert the user it is not a valid number
// Else provide the next prompt
// Create a Confirm box with a question (click OK to confirm lowercase characters) and store it in a var "hasLowercase" (it will contain true)
// Create a Confirm box with a question (click OK to confirm uppercase characters) and store it in a var "hasUppercase" (it will contain true)
// Create a Confirm box with a question (click OK to confirm numbers characters) and store it in a var "hasNumberscase" (it will contain true)
// Create a Confirm box with a question (click OK to confirm special characters) and store it in a var "hasSpecialcase" (it will contain true)
// If all Confirm box questions are "false" then I create Alert box to alert the user ("You need to choose 1 of the whatever") (if all false go back to line 16 and start again or end (error in creating password))
// If user selected lowercase characters, which means "hasLowercase" is "true" then concat "passwordArray" with "lowercaseArray"
// and choose some random character from "lowercaseArray" and concat with "password" (hint: use Math.floor and Math.Random) (it will be lowercaseArray[random])
// If user selected uppercase characters, which means "hasUppercase" is "true" then concat "passwordArray" with "uppercaseArray"
// and choose some random character from "uppercaseArray" and concat with "password"
// If user selected numberscase characters, which means "hasNumberscase" is "true" then concat "passwordArray" with "numbersArray"
// and choose some random character from "numberscaseArray" and concat with "password"
// If user selected specialcase characters, which means "hasSpecialCase" is "true" then concat "passwordArray" with "specialcaseArray"
// and choose some random character from "specialcaseArray" and concat with "password"
// Iterate starting from length of the "password" var to "passwordLength" (using for loop)
// Concat "password" with random characters from "passwordArray"
// return "password"
// }



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {

}


// logs user's selection of their password length
function log(userPassLength) {
  console.log(userPassLength);
}

// prompts the user to enter a password length from 8-128 characters
function passLength() {
  var userPassLength = prompt("Please choose a password length between 8 - 128 characters long");
  log(userPassLength);
    if (userPassLength < 8) {
      prompt("You must choose a password length of 8 - 128 characters long");
    } else {
      alert("thank you")
    }
  }
passLength();


// logs user's selection of their special characters
function log(userSpecialChar) {
  console.log(userSpecialChar);
}

// prompts the user to select one or all the users of LOWERCASE, UPPERCASE, NUMERICS, and/or SPECIAL CHARACTERS
function specChar() {
  var userSpecialChar = prompt("You must to include in your password either LOWERCASE, UPPERCASE, NUMERICS, and/or SPECIAL CHARACTERS");
  log(userSpecialChar);
}
specChar();


// Random character generators
function randomNum() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function randomSpecial() {
  var special = '!@#$%^&*(){}[]=<>/,.'
  return special[Math.floor(Math.random() * special.length)];
}

function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

console.log(randomSpecial());

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
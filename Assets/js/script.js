// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", function() {

  // -------------Local Variables---------------- //
  var passwordLength = "";
  var password = "";
  var passwordArray = [];
  var hasLowercase = "";
  var hasUpppercase = "";
  var hasNumbers = "";
  var hasSpecials = "";
  var random = "";
  var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialArray = ["!", "@", "#"];

  //Prompt user for passwordLength
  var passwordLength = prompt("How long do you want your password to be?\nIt must be between 8 - 128 characters.", );
  // console.log(passwordLength);

  // Ask user to include lowercase
  if (passwordLength >= 8 && passwordLength <= 128) {
    var hasLowercase = confirm("Select OK if you want to include lowercase letters.");
    // console.log(hasLowercase);

    // Ask user to include uppercase
    if (hasLowercase === true) {
      for (var i = 0; i < passwordLength; i++) {
        var random = passwordArray[Math.floor(Math.random() * passwordArray.length)];
        // console.log(passwordArray);
      }
      
      var passwordArray = passwordArray.concat(lowercaseArray);

    }
    if (hasLowercase === true || hasLowercase === false) {
      var hasUppercase = confirm("Select OK if you want to include uppercase letters.");
      // console.log(hasUppercase);

      // Ask user to include numbers
      if (hasUppercase === true) {
        var passwordArray = passwordArray.concat(uppercaseArray);
        // console.log(passwordArray);
      }
      if (hasUppercase === true || hasUppercase === false) {
        var hasNumbers = confirm("Select OK if you want to include numbers.");
        // console.log(hasNumbers);

        // Ask user to include special characters
        if (hasNumbers === true) {
          var passwordArray = passwordArray.concat(numbersArray);
          // console.log(passwordArray);
        }
        if (hasNumbers === true || hasNumbers === false) {
          var hasSpecials = confirm("Select OK if you want to include special characters.");
          // console.log(hasSpecials)

          // Check if user select no for all 4 types: lowercase, uppercase, numbers, and special characters. If so, alerting them and code ends
          if (hasSpecials === true) {
            var passwordArray = passwordArray.concat(specialArray);
            // console.log(passwordArray);
          }
          if (hasSpecials === true || hasSpecials === false) {
            if (hasLowercase === false && hasUppercase === false && hasNumbers === false && hasSpecials === false) {
              alert("You must choose one of the follow to be included in your password: lowercase, uppercase, numbers, and/or special characters.");
            
            } else {
              
            }
          }
        }
      }
    }
  } else {
    alert("You must enter a valid number");
  }
});





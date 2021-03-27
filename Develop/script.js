// function generatePassword() {
    // Create a Prompt box to store in a var called "passwordLength" 
    // Create a var "lowercaseArray" to store all lowercase characters (example: ["a", "b"....])
    // Create a var "uppoercaseArray" to store all uppercase characters
    // Create a var "numbersArray" to store all number characters
    // Create a var "specialArray" to store all special(symbols) characters
    // Create a var "password" to store my password (make this a empty string to start)
    // Create a var "passwordArray" to store possible characters (make this an empty array to start)
    // Create a var "hasLowercase" to store users input
    // Create a var "hasUppercase" to store users input
    // Create a var "hasNumbers" to store users input
    // Create a var "hasSpecials" to store users input
    // Create a var "random" to store users input
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
generateBtn.addEventListener("click", function() {

  // -------------Local variables---------------- //
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
  console.log(passwordLength);

  // Ask user to include lowercase
  if (passwordLength >= 8 && passwordLength <= 128) {
    var hasLowercase = confirm("Select OK if you want to include lowercase letters.");
    console.log(hasLowercase);

//------------------stuck here--------------------

    // Ask user to include uppercase
    if (hasLowercase === true) {
      var passwordArray = passwordArray.concat(lowercaseArray);
      console.log(passwordArray);
    }
    if (hasLowercase === true || hasLowercase === false) {
      var hasUppercase = confirm("Select OK if you want to include uppercase letters.");
      console.log(hasUppercase);

      // Ask user to include numbers
      if (hasUppercase === true) {
        var passwordArray = passwordArray + uppercaseArray;
        console.log(passwordArray);
      }
      if (hasUppercase === true || hasUppercase === false) {
        var hasNumbers = confirm("Select OK if you want to include numbers.");
        console.log(hasNumbers);

        // Ask user to include special characters
        if (hasNumbers === true) {
          var passwordArray = passwordArray + numbersArray;
          console.log(passwordArray);
        }
        if (hasNumbers === true || hasNumbers === false) {
          var hasSpecials = confirm("Select OK if you want to include special characters.");
          console.log(hasSpecials)

          // Check if user select no for all 4 types: lowercase, uppercase, numbers, and special characters. If so, alerting them and code ends
          if (hasSpecials === true) {
            var passwordArray = passwordArray + specialArray;
            console.log(passwordArray);
          }
          if (hasSpecials === true || hasSpecials === false) {
            if (hasLowercase === false && hasUppercase === false && hasNumbers === false && hasSpecials === false) {
              alert("You must choose one of the follow to be included in your password: lowercase, uppercase, numbers, and/or special characters.");
            
            } else {
              for (var i = 0; i < passwordLength; i++) {
                var password = passwordArray + password;
                console.log(password[i]);
              }
            }
          }
        }
      }
    }
  } else {
    alert("You must enter a valid number");
  }
});


// console.log(password);
// console.log(lowercaseArray[random]);





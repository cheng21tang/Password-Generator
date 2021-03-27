# Password Generator

Need a Password Generator? Look no more. This Password Generator will give you a randomly generated password that contains anywhere
from **8 - 128 characters**. They may include **lowercase** letters, **uppercase** letters, **numbers**, and **special characters**. All you have to do is click the **Generate Password** button, follow a few steps and it will populate the random password for you to copy. Don't forget what you password is!


## Getting Started

Visit the link [Password Generator](https://cheng21tang.github.io/Password-Generator/) and click on **Generate Password** to get started.

You will have to go through the follow prompts to generate your password:

  1. How long do you want your password to be? It must be **between 8 - 128 characters**.
  2. Select OK if you want to include **lowercase** letters.
  3. Select OK if you want to include **uppercase** letters.
  4. Select OK if you want to include **numbers**.
  5. Select OK if you want to include **special characters**.

If you do not choose a ***password length between 8 and 128 characters*** and select ***at least one*** of the types of characters you cannot generate a password.


## Features and Highlights

- Validation of the users selections are one of the highlights that was used in this code. I used **IF/ELSE** statements to check if the user had correct imputs to generate a password
        - If the user did not have a valid input then I would warn the user through an **Alert** box.


## Challenges

1. **Functions**
    - It was challenging wrapping several functions together and keeping track of what they did. I employed the use of console.log() several times to check if the code was working as expected.
2. **Iterating & Math.floor(Math.random())**
    - I couldn't get Math.floor and Math.random to iterate through one of my arrays to pick characters randomly so I could assign it to a variable.
3. **If/else**
    - Similar to functions, just following through with the logic of **If/else** statements step by step and then checking my code through **console.log()** was so important in this application.


### Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript)


### References

* [w3schools_Functions](https://www.w3schools.com/js/js_functions.asp)
* [w3schools_If_Else](https://www.w3schools.com/js/js_if_else.asp)
* [mozilla_Loops_Iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
* [w3schools_Window_Alert](https://www.w3schools.com/jsref/met_win_alert.asp)
* [w3schools_Variables](https://www.w3schools.com/js/js_variables.asp)
* [w3schools_ArrayConcat](https://www.w3schools.com/Jsref/jsref_concat_array.asp)

### Deployed Link

* https://cheng21tang.github.io/Password-Generator/


### Authors

**Cheng Tang**

- [Link to Github](https://github.com/cheng21tang)
- [Link to LinkedIn](https://www.linkedin.com/in/cheng-tang-0663211a3/)
- [Link to my Portfolio](https://cheng21tang.github.io/Portfolio/)


### License

This project is licensed under the MIT License 


### Acknowledgements

* Special thanks to Mahisha Gunasekaran and Jerome Chenette for stressing the importance of pseudo code. This aided me in building this application.



__________________________________________________________________________________

###### Pseudo Code

Here is my pseudo code I put together with the help of **Mahisha Gunasekaran**.
- function generatePassword() {
- Create a Prompt box to store in a var called "passwordLength" 
- Create a var "lowercaseArray" to store all lowercase characters (example: ["a", "b"....])
- Create a var "uppoercaseArray" to store all uppercase characters
- Create a var "numbersArray" to store all number characters
- Create a var "specialArray" to store all special(symbols) characters
- Create a var "password" to store my password (make this a empty string to start)
- Create a var "passwordArray" to store possible characters (make this an empty array to start)
- Create a var "hasLowercase" to store users input
- Create a var "hasUppercase" to store users input
- Create a var "hasNumbers" to store users input
- Create a var "hasSpecials" to store users input
- Create a var "random" to store users input
- Check if "passwordLength" is between 8-128
- If it not a valid number, alert the user it is not a valid number
- Else provide the next prompt
- Create a Confirm box with a question (click OK to confirm lowercase characters) and store it in a var "hasLowercase" (it will contain true)
- Create a Confirm box with a question (click OK to confirm uppercase characters) and store it in a var "hasUppercase" (it will contain true)
- Create a Confirm box with a question (click OK to confirm numbers characters) and store it in a var "hasNumberscase" (it will contain true)
- Create a Confirm box with a question (click OK to confirm special characters) and store it in a var "hasSpecialcase" (it will contain true)
- If all Confirm box questions are "false" then I create Alert box to alert the user ("You need to choose 1 of the whatever") (if all false go back to line 16 and start again or end (error in creating password))
- If user selected lowercase characters, which means "hasLowercase" is "true" then concat "passwordArray" with "lowercaseArray"
- and choose some random character from "lowercaseArray" and concat with "password" (hint: use Math.floor and Math.Random) (it will be lowercaseArray[random])
- If user selected uppercase characters, which means "hasUppercase" is "true" then concat "passwordArray" with "uppercaseArray"
- and choose some random character from "uppercaseArray" and concat with "password"
- If user selected numberscase characters, which means "hasNumberscase" is "true" then concat "passwordArray" with "numbersArray"
- and choose some random character from "numberscaseArray" and concat with "password"
- If user selected specialcase characters, which means "hasSpecialCase" is "true" then concat "passwordArray" with "specialcaseArray"
- and choose some random character from "specialcaseArray" and concat with "password"
- Iterate starting from length of the "password" var to "passwordLength" (using for loop)
- Concat "password" with random characters from "passwordArray"
- return "password"
- }
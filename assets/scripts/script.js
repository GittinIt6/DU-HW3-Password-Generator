// Assignment Code
var generateBtn = document.querySelector("#generate");
let userPassword = 0

// Write password to the #password input
function writePassword() {
  // alert("Sup Dog?");
  for (let index = 0; index < 3; index++) {
    var passwordLength = prompt ("How many characters would you like your password to include?\n**Requirement: Minimum 8 - Maximum 128 Characters", 8);
    if (passwordLength == null){
      return;
    }
    
    console.log(passwordLength);
    passwordLength = Number(passwordLength);
    console.log(typeof passwordLength);
    console.log(passwordLength);

    if ((passwordLength >= 8  && typeof passwordLength == "number")){
      userPassword = 12345;
      index = 2;
    }
    else{
      if (index == 2){
        confirm("!SORRY, THAT WAS YOUR LAST CHANCE!\nYou were asked many times to choose a numeric value between 8 and 128. Please try again later.");
      }
      else {
        confirm("!ERROR!\nYou must choose a numeric value between 8 and 128. Please try again.");
      }

    }

  }

  // prompt("prompt 1", "Prompt 2");
  // if (passwordLength)
  // confirm("Confirm 1")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  // var i = (1 + 2);
  return userPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

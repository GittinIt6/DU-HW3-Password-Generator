// Assignment Code
var generateBtn = document.querySelector("#generate");
var userPassword = "";
var passwordLength = 8;
let passwordLowerCase = true;
let passwordUpperCase = true;
let passwordNumeric = true;
let passwordSpecial = true;
const specChars = ["!","#","$",".","%","&","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","_","{","|","}","~"];
const alphabetLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const alphabetUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const passwordNumbers = ["0","1","2","3","4","5","6","7","8","9"];


// Write password to the #password input
function writePassword() {

  passwordLength = passwordLengthForm();
  passwordComplexity();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function passwordLengthForm() {
  let tryCount = 2;
  for (let index = 0; index < 3; index++) {
    passwordLength = prompt ("How many characters would you like your password to include?\n**Requirement: Minimum 8 - Maximum 128 Characters", 8);
    if (passwordLength == null){
      return;
    }

    passwordLength = Number(passwordLength);
    console.log(`password type: ${typeof passwordLength}`);
    console.log(`password length: ${passwordLength}`);

    if ((passwordLength >= 8  && passwordLength <=128 &&  typeof passwordLength == "number")){
      // userPassword = 12345;
      index = 2;
    }
    else{
      if (index == 2){
        alert("!SORRY, THAT WAS YOUR LAST CHANCE!\nYou were asked many times to choose a numeric value between 8 and 128. Please try again later.");
      }
      else {
        alert("!ERROR!\nYou must choose a numeric value between 8 and 128. Please try again.\nYou have " + tryCount + " attempts remaining.");
        tryCount--;
      }
    }
  }
  return passwordLength;
}

function passwordComplexity() {
  let tryCount = 2;
  for (let index = 0; index < 3; index++) {
    passwordLowerCase = confirm("Your password will include lowercase characters.\nOK to continue\nCANCEL to exclude lowercase characters")
    passwordUpperCase = confirm("Your password will include UPPERCASE characters.\nOK to continue\nCANCEL to exclude UPPERCASE characters")
    passwordNumeric = confirm("Your password will include numbers.\nOK to continue\nCANCEL to exclude numbers")
    passwordSpecial = confirm("Your password will include $pecial characters\nOK to continue\nCANCEL to exclude $pecial characters")
  
    if (passwordLowerCase == false && passwordUpperCase == false && passwordNumeric == false && passwordSpecial == false) {
      if (index == 2) {
        alert("Sorry, that was your last chance to make good choices.\nYou were asked multiple times to allow at least one complexity option.\nPlease try again later.");
        tryCount--;
      }
      else {
        alert("C'Mon what are you thinking?\nYou need to have characters in your password!\nAllow at least one complexity option.\nYou have " + tryCount + " attempts remaining.");
        tryCount--;
      }
    }
    else {
      return;
    }
  }
}

function generatePassword() {

  //creating on large array of selected characters
  const passwordItems = specChars.concat(alphabetLower,alphabetUpper,passwordNumbers);

  for (let index = 0; index < passwordLength; index++) {
    userPassword = userPassword + passwordItems[Math.floor(Math.random() * (passwordItems.length - 1))]; //user password appended by random item from passwordItems array
  }
  return (userPassword);
  // return Math.floor(Math.random() * 10);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

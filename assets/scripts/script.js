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


// Call other functions, then write password to the #password id in html
function writePassword() {
  var passwordText = document.querySelector("#password");

  //Call password length function which will set password length variable
  
  if (passwordLengthForm() === false){
    passwordText.value = "";
    return;
  }
  
  //Call password complexity function which sets complexity variables
  if (passwordComplexity() === false){
    passwordText.value = "";
    return;
  }
  //Call Generate password function to set password value based on user selections
  var password = generatePassword();
  
  //Write text in html for id to password
  passwordText.value = password;

}

//Prompt user to input password length --> Return password length as number
function passwordLengthForm() {
  let tryCount = 2; //variable to display number of tries left to the user
  
  //ask user for input for password length
  for (let index = 0; index < 3; index++) {
    passwordLength = prompt ("How long would you like your password?\n**Requirement: Minimum 8 - Maximum 128 Characters", 8);
 
    if (passwordLength == null){
      return false; //end process if cancel button is pressed
    }

    passwordLength = Number(passwordLength); //converting string output of prompt to number

    //checking if all parameters are met
    if ((passwordLength >= 8  && passwordLength <=128 &&  typeof passwordLength == "number")){
      index = 2;
    }
    else{
      //give user feedback on incorrect input and reduce number of tries remaining.
      if (index == 2){
        alert("!SORRY, THAT WAS YOUR LAST CHANCE!\nYou were asked many times to choose a numeric value between 8 - 128. Please try again later.");
        return false;
      }
      else {
        alert("!ERROR!\nYou must choose a numeric value between 8 and 128. Please try again.\nYou have " + tryCount + " attempts remaining.");
        tryCount--;
      }
    }
  }
}

//prompt user to select various complexity options --> Sets boolean variables for future use, Returns nothing
function passwordComplexity() {
  let tryCount = 2; //variable to display number of tries left to the user
  
  //prompt for the 4 character types to be included in password
  for (let index = 0; index < 3; index++) {
    passwordLowerCase = confirm("Your password will include lowercase characters.\n[OK] to continue\n[CANCEL] to exclude lowercase characters")
    passwordUpperCase = confirm("Your password will include UPPERCASE characters.\n[OK] to continue\n[CANCEL] to exclude UPPERCASE characters")
    passwordNumeric = confirm("Your password will include numbers.\n[OK] to continue\n[CANCEL] to exclude numbers")
    passwordSpecial = confirm("Your password will include $pecial characters\n[OK] to continue\n[CANCEL] to exclude $pecial characters")
  
    //check to see if at least one option was selected
    if (passwordLowerCase == false && passwordUpperCase == false && passwordNumeric == false && passwordSpecial == false) {
      //give user feedback on incorrect input and reduce number of tries remaining. 
      if (index == 2) {
        alert("Sorry, that was your last chance to make good choices.\nYou were asked multiple times to allow at least one complexity option.\nPlease try again later.");
        return false;
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

//Generates password based on criteria selected --> Returns password as string
function generatePassword() {
  var passwordItems = [];
  userPassword = ""; //resetting userPassword
    
  //creating single array of selected characters based on selections
  if (passwordLowerCase){
    passwordItems = passwordItems.concat(alphabetLower);
  }
  if (passwordUpperCase){
    passwordItems = passwordItems.concat(alphabetUpper);
  }
  if (passwordNumeric){
    passwordItems = passwordItems.concat(passwordNumbers);
  }
  if (passwordSpecial){
    passwordItems = passwordItems.concat(specChars);
  }
  //creating random password based on array contents
  for (let index = 0; index < passwordLength; index++) {
    userPassword = userPassword + passwordItems[Math.floor(Math.random() * (passwordItems.length - 1))]; //user password appended by random item from passwordItems array
  }
  return userPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

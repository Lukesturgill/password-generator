var generateBtn = document.querySelector('#generate');


function generatePassword(){
  var lowerCaseLetters = ["abcdefghijklmnopqrstuvwxyz"];
  var upperCaseLetters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  var numbers = ["123456789"];
  var specialCharacters = ["!#$%&()*+-./:;>?@[]^_`{|}~"];
  var password = '';
  var charactersAvailable = '';

// Determine the desired length of the password
var passwordLength = prompt('Please indicate a password length between 8 and 128.')

// Verify the password length entered meets the length requirements
if (passwordLength >= 8 && passwordLength <= 128) {
  console.log(passwordLength)
}

// If password length provided is less than the min or more than the max, alert user to try again
else {
  alert('Your password must be at least 8, but no more than 128, characters \nPlease enter a valid number between 8 & 128.')
  return '';
}

// Determine if user wants lower case letters in the password
var qrylowerCaseLetters = confirm('Do you want to use lower case (a-z) letters in your password?')

// Determine if user wants upper case letters in the password
var qryupperCaseLetters = confirm('Do you want to use upper case (A-Z) letters in your password?')

// Determine if user wants numbers in the password
var qrynumbers = confirm('Do you want to use numbers (0-9) in your password?')

// Determine if user wants special characters in the password
var qryspecialCharacters = confirm('Do you want to use special characters (!#$%&\'()*+,-./:;<=>?@[]^_`{|}~) letters in your password?')

// If lower case letters are wanted, randomly select a letter from the lowerCaseLetters array
if (qrylowerCaseLetters) {
  charactersAvailable += lowerCaseLetters
}

// If upper case letters are wanted, randomly select a letter from the upperCaseLetters array
if (qryupperCaseLetters) {
  charactersAvailable += upperCaseLetters
}

// If numbers are wanted, randomly select a number from the numbers array
if (qrynumbers) {
  charactersAvailable += numbers
}

// If special characters are wanted, randomly select a character from the specialCharacters array
if (qryspecialCharacters) {
  charactersAvailable += specialCharacters
}
// Will stop the process and return an alert if there are no character types selected
if (
  !qrylowerCaseLetters && !qryupperCaseLetters && !qrynumbers && !qryspecialCharacters
) {
  return alert('Please select at least one criteria!');
  
}

for (var i = 0; i < passwordLength; i++) {
  password +=charactersAvailable[Math.floor(Math.random () * charactersAvailable.length)];
}
return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
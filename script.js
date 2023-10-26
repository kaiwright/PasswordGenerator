// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


//function to check user wants to exit
function ExitChecker() {
  var checker = confirm("Selecting this option is necessary for password generation. Are you sure you want to leave it blank?")
  if (checker === false) {
    getPasswordOptions()
  } else {
    return;
  }
}

// Function to prompt user for password options
var passwordLength;
var lowercase;
var uppercase;
var numbers;
var specialChar;

function getPasswordOptions() {

  // length of password (8-128)
  function getPasswordLength() {
    passwordLength = prompt("Choose Password length(between 8-128 characters)", 8);
    if (passwordLength >= 8 && passwordLength <= 128) {

    } else if (passwordLength === null) {
      ExitChecker();
    } else {
      alert("Invalid response. Please try again.");
      getPasswordLength()
    }
  }
  getPasswordLength();


  // character types (lowercase, uppercase, numeric, special characters)

  // lowercase
  function wantLowercase() {
    var characterTypes = prompt("Would you like lowercase letters? (Yes or No)");
    if (characterTypes == "Yes") {
      lowercase = true;
    } else if (characterTypes == "No") {
      lowercase = false;

    } else if (characterTypes === null) {
      ExitChecker();
    } else {
      alert("Invalid response. Please try again.");
      wantLowercase();
    }
  }
  wantLowercase();


  // uppercase
  function wantUppercase() {
    var characterTypes = prompt("Would you like uppercase letters? (Yes or No)");
    if (characterTypes == "Yes") {
      uppercase = true;
    } else if (characterTypes == "No") {
      uppercase = false;

    } else if (characterTypes === null) {
      ExitChecker();
    } else {
      alert("Invalid response. Please try again.");
      wantUppercase();
    }
  }
  wantUppercase();


  // numeric
  function wantNumbers() {
    var characterTypes = prompt("Would you like numeric values? (Yes or No)");
    if (characterTypes == "Yes") {
      numbers = true;
    } else if (characterTypes == "No") {
      numbers = false;

    } else if (characterTypes === null) {
      ExitChecker();
    } else {
      alert("Invalid response. Please try again.");
      wantNumbers();
    }
  }
  wantNumbers();


  // special characters
  function wantSpecial() {
    var characterTypes = prompt("Would you like special characters? (Yes or No)");
    characterTypes.toLowerCase();
    if (characterTypes === "yes") {
      specialChar = true;
    } else if (characterTypes === "no") {
      specialChar = false;

    } else if (characterTypes === null) {
      ExitChecker();
    } else {
      alert("Invalid response. Please try again.");
      wantSpecial();
    }
  }
  wantSpecial();

}

getPasswordOptions()



// Function for getting a random element from an array
function getRandom(arr) {

}


// Function to generate password with user input
function generatePassword() {
  // password length
  for (var i = 0; i < passwordLength.length; i++) {
    if (uppercase === lowercase === numbers === specialChar) {
      for (var i = 0; i < passwordLength.length; i++) {
        var randomiser = array[index]; 
        
      }

    } 
  }

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
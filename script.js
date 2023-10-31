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


//Function to check user wants to exit options
function ExitChecker() {
  var checker = confirm("Selecting this option is necessary for password generation. Are you sure you want to leave it blank?")
  if (checker === false) {
    getPasswordOptions()
  } else {
    return;
  }
}

// Declarations for needed global variables/arrays
var types = [];
var generated = [];
var passwordLength;
var counter = 0;
character = 0;

// Function to prompt user for password options
function getPasswordOptions() {

  // function to check length of password (8-128) 
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

  // Function to check if user wants lowercase
  function wantLowercase() {
    var characterTypes = prompt("Would you like lowercase letters? (Yes or No)", "yes");
    characterTypes.toLowerCase();
    if (characterTypes == "yes") {
      types.push(lowerCasedCharacters);
      character = character + 1;
    } else if (characterTypes === "no") {
    } else if (characterTypes === null) {
      ExitChecker();
    } else {
      alert("Invalid response. Please try again.");
      wantLowercase();
    }
  }
  wantLowercase();


  // Function to check if user wants uppercase
  function wantUppercase() {
    var characterTypes = prompt("Would you like uppercase letters? (Yes or No)", "yes");
    characterTypes.toLowerCase();
    if (characterTypes == "yes") {
      types.push(upperCasedCharacters);
      character = character + 1;
    } else if (characterTypes === "no") {
    } else if (characterTypes === null) {
      ExitChecker();
    } else {
      alert("Invalid response. Please try again.");
      wantUppercase();
    }
  }
  wantUppercase();


  // Function to check if user wants numbers
  function wantNumbers() {
    var characterTypes = prompt("Would you like numeric values? (Yes or No)", "yes");
    characterTypes.toLowerCase();
    if (characterTypes == "yes") {
      types.push(numericCharacters);
      character = character + 1;
    } else if (characterTypes === "no") {
    } else if (characterTypes === null) {
      ExitChecker();
    } else {
      alert("Invalid response. Please try again.");
      wantNumbers();
    }
  }
  wantNumbers();


  // Function to check if user wants special characters
  function wantSpecial() {
    var characterTypes = prompt("Would you like special characters? (Yes or No)", "yes");
    characterTypes.toLowerCase();
    if (characterTypes === "yes") {
      types.push(specialCharacters);
      character = character + 1;
    } else if (characterTypes === "no") {
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

if (character < 1) {
  alert("You need to select at least one character type")
  if (alert === true) {
    getPasswordOptions()
}
}

// Function for getting a random element from an array. Gets a random value and pushes it to the global array
function getRandom(arr, store) {
  store = arr[Math.floor(Math.random() * arr.length)];
  generated.push(store);
  return (generatePassword);
}


// Function to generate password with user input. Picks a character type from those selected at random and then calls random function to get the value from it 
function generatePassword() {
  for (let i = 0; i < passwordLength; i++) {
    randomType = types[Math.floor(Math.random() * types.length)];
    getRandom(randomType);
  }
}


// Gets references to the #generate element
var generateBtn = document.querySelector('#generate');


// Writes password to the #password input. Reloads the page to give new password if user chooses to generate again
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector('#password');
  counter = counter+1;
  if (counter === 2) {
    location.reload();
  } 
  
  passwordText.value = generated.join("");
}


// Adds event listener to generate button
generateBtn.addEventListener('click', writePassword,);


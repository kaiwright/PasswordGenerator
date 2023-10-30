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
var types = [];
var passwordLength;
var characters;
var lowercase;
var uppercase;
var numbers;
var special;

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
    var characterTypes = prompt("Would you like lowercase letters? (Yes or No)", "yes");
    characterTypes.toLowerCase();
    if (characterTypes == "yes") {
      types.push(lowerCasedCharacters);
      characters = (characters + 1);
      lowercase = true;
    } else if (characterTypes === "no") {
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
    var characterTypes = prompt("Would you like uppercase letters? (Yes or No)", "yes");
    characterTypes.toLowerCase();
    if (characterTypes == "yes") {
      types.push(upperCasedCharacters);
      characters = (characters + 1);
      uppercase = true;
    } else if (characterTypes === "no") {
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
    var characterTypes = prompt("Would you like numeric values? (Yes or No)", "yes");
    characterTypes.toLowerCase();
    if (characterTypes == "yes") {
      types.push(numericCharacters);
      characters = (characters + 1);
      numbers = true;
    } else if (characterTypes === "no") {
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
    var characterTypes = prompt("Would you like special characters? (Yes or No)", "yes");
    characterTypes.toLowerCase();
    if (characterTypes === "yes") {
      types.push(specialCharacters);
      characters = (characters + 1);
      special = true;
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


// Function for getting a random element from an array
var generated = []

function getRandom(arr, store) {
  // gets a random value
  store = arr[Math.floor(Math.random() * arr.length)];
  // push random value to outside array
  generated.push(store);
  return (generatePassword);
}



// Function to generate password with user input
function generatePassword() {
  for (let i = 0; i < passwordLength; i++) {
    // get a character type at random
    randomType = types[Math.floor(Math.random() * types.length)];
    //calls random function with a random character type
    getRandom(randomType);
  }
}

//checker 
function checker(arr) {
  if (generated.includes(arr)) {
    return;
  } else if (!generated.includes(arr)) {
    generatePassword()
  } else {
  }
}

if (uppercase === true) {
  checker(upperCasedCharacters);
} if (lowercase === true) {
  checker(lowerCasedCharacters);
} if (numbers === true) {
  checker(numericCharacters);
} if (special === true) {
  checker(specialCharacters);
} else {
}

if (generated > passwordLength) {
  for (let i = 0; i < generated.length; i++) {
    generated.slice(0)
  }
} else {
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = generated.join("");
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);




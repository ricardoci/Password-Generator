// Assignment code here


//Here we are using the function arrayFromLowToHigh to grab the chars that we want and stroring them in a variable in the global scope.
var UpperCase = arrayFromLowToHigh(65, 90)
var LowerCase = arrayFromLowToHigh(97, 122)
var NumberChar = arrayFromLowToHigh(48, 57)
var SymboChar = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126))


var s = String.fromCharCode.apply(null, SymboChar);
var l = String.fromCharCode.apply(null, LowerCase);
var u = String.fromCharCode.apply(null, UpperCase);
var n = String.fromCharCode.apply(null, NumberChar);

// split method converts string into array
s = s.split('');
l = l.split('');
u = u.split('');
n = n.split('');




// This function loop, sorts the chars from low to high; We don't use methods because we are fecthing these from the char method.
function arrayFromLowToHigh(low, high) {
  var array = [];

  for(let i = low; i <= high; i++){
    
    array.push(i)
  }
  return array
}


// Function to prompt user for password options
function getPasswordOptions() {
  // Variable to store length of password from user input
  var length = parseInt(
    prompt('How many characters would you like your password to contain?'),
    10
  );

  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (Number.isNaN(length)) {
    alert('Password length must be provided as a number');
    return null;
  }

  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  if (length < 8) {
    alert('Password length must be at least 8 characters');
    return null;
  }

  // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
  if (length > 128) {
    alert('Password length must less than 129 characters');
    return null;
  }

  // Variable to store boolean regarding the inclusion of special characters
  var hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
  );

  // Variable to store boolean regarding the inclusion of numeric characters
  var hasNumericCharacters = confirm(
    'Click OK to confirm including numeric characters.'
  );

  // Variable to store boolean regarding the inclusion of lowercase characters
  var hasLowerCasedCharacters = confirm(
    'Click OK to confirm including lowercase characters.'
  );

  // Variable to store boolean regarding the inclusion of uppercase characters
  var hasUpperCasedCharacters = confirm(
    'Click OK to confirm including uppercase characters.'
  );

  // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
  if (
    hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasLowerCasedCharacters === false &&
    hasUpperCasedCharacters === false
  ) {
    alert('Must select at least one character type');
    return null;
  }

  // Object to store user input
  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters,
  };

  return passwordOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  // Variable to store password as it's being concatenated
  var result = [];

  // Array to store types of characters to include in password
  var possibleCharacters = [];

  // Array to contain one of each type of chosen character to ensure each will be used
  var guaranteedCharacters = [];

  // Check if an options object exists, if not exit the function
  if (!options) return null;

  // Conditional statement that adds array of special characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(s);
    guaranteedCharacters.push(getRandom(s));
  }

  // Conditional statement that adds array of numeric characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(n);
    guaranteedCharacters.push(getRandom(n));
  }

  // Conditional statement that adds array of lowercase characters into array of possible characters based on user input
  // Push new random lower-cased character to guaranteedCharacters
  if (options.hasLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(l);
    guaranteedCharacters.push(getRandom(l));
  }

  // Conditional statement that adds array of uppercase characters into array of possible characters based on user input
  // Push new random upper-cased character to guaranteedCharacters
  if (options.hasUpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(u);
    guaranteedCharacters.push(getRandom(u));
  }

  // For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

  // Mix in at least one of each guaranteed character in the result
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  // Transform the result into a string and pass into writePassword
  return result.join('');
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




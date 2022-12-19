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
sy = s.split('');
ly = l.split('');
uy = u.split('');
ny = n.split('');




// This function loop, sorts the chars from low to high; We don't use methods because we are fecthing these from the char method.
function arrayFromLowToHigh(low, high) {
  var array = [];

  for(let i = low; i <= high; i++){
    
    array.push(i)
  }
  return array
}


// Password option function
function getPasswordOptions(){

  // this variable will store length of password
  var length = parseInt(
    prompt('How long do you want your password?'),
    10
  );

  //check if password is numbers
  if(Number.isNaN(length)) {
    alert('! Your entry was not a number');
    return null;
  }

  // We need to check if password is 8 characters or greater if not return null
  if(length < 8) {
    alert('Password must be 8 characters or greater ');
    return null;
  }
// password must be less than 129 characters
  if(length > 129){
    alert('Password must be less than 129 characters?');
    return null;
  }

//variable stores special characters
//The confirm method gives two button options true or false
var containesSymb = confirm(
  'click confirm to add symbols'
);

//variable stores number characters
var containesnum = confirm(
  'click confirm to add num'
);
//Variable stores lowerCase
var containesLowerCase = confirm(
  'click confirm to add lowerCase characters'
);
//Variable stores UpperCase
var containesUpperCase = confirm(
  'click confirm to add UpperCase'
);

// create an  statement that verifys that the user atleast selects one character
if (containesSymb === false &&
    containesnum === false &&
    containesLowerCase === false &&
    containesUpperCase === false ){
      alert('Select at least 1 character')
      return null
    };

    // create a place that stores the created option : object
    var  passwordOptions = {
      length: length,
      containesSymb : containesSymb,
      containesnum : containesnum,
      containesLowerCase : containesLowerCase,
      containesUpperCase : containesUpperCase,
    };
    return passwordOptions;
    

}

// create a function to get a random indec from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
}

// generate passord from user input
 function generatePassword(){

var options = getPasswordOptions();
//concated password will be stred in the results var
var result = [];
// Array to store types of characters to include in passowrd
var possibleCharacter = [];
//Array to contain one of each type of chosen character to ensure each will be used
var guranteedCharacters = [];

// check if an options object exists, if not exit the function
if (!options) return null;

// if statement that adds array of special characters into array of possible characters based on users input
// push new random special character to guranteedCharacter
if (options.containesSymb){
  possibleCharacter = possibleCharacter.concat(sy);
  
  guranteedCharacters.push(getRandom(sy));
}
// if statement that adds array of number characters into array of possible characters based on users input
// push new random number character to guranteedCharacter
if (options.containesnum){
  possibleCharacter = possibleCharacter.concat(ny);
  guranteedCharacters.push(getRandom(ny));
}

// if statement that adds array of lowerCase characters into array of possible characters based on users input
// push new random LowerCase character to guranteedCharacter
if (options.containesLowerCase){
  possibleCharacter= possibleCharacter.concat(ly);
  guranteedCharacters.push(getRandom(ly));
}
// if statement that adds array of upperCase characters into array of possible characters based on users input
// push new random Uppercase character to guranteedCharacter
if (options.containesUpperCase){
  possibleCharacter = possibleCharacter.concat(uy);
  guranteedCharacters.push(getRandom(uy));
}

// For loop to iterate over the password length from the options objects, selecting random indices from variable

for(var i = 0; i < options.length; i++){
  var possibleCharacters = getRandom(possibleCharacters);
  result.push(possibleCharacter);
}
// Mix in at least one of each guranteed character in the result
for (var i = 0; i < guranteedCharacters.length; i++){
  result[i] = guranteedCharacters[i];
}
// transform result into a string and pass into writPassword
return result.join('');
}
// get references to the #generate element





















// Get references to the #generate element


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

}

// Add event listener to generate button

generateBtn.addEventListener('click', writePassword);




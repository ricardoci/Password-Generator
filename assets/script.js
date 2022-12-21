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



// function that provides user with the password rules
function generatePassword() {
  //empty array that stores prompt values
  var value = [];

  // if statment alerting user if they  don't enter an 8 password lenght or greater
   value = prompt("How many characters would your password contain?");
   if(value < 8){
    alert('Character must be more than 8 characters!')
   }
    // if statment alerting user length must be less than 129 characters
    if (value > 129){
    alert('Password length must be less than 129 characters ')
    ;
   }
var trueChar = {
  sChar: true,
  nChar: true,
  uChar: true,
  nChar: true,
}

   var falseChars ={
    sChar: false,
    nChar: false,
    uChar: false,
    nChar: false,
  };



   if (falseChars){
    
    alert('Must select at least one character type')
    ;
  
}
}

function randomPassword(a){
  
  var rp = Math.floor(Math.random() * a.length);
  var pr = a[rp];

   return pr
}
function generatePassword{
  
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

// Assignment code here


//Here we are using the function arrayFromLowToHigh to grab the chars that we want and stroring them in a variable in the global scope.
//https://youtu.be/iKo9pDKKHnc learned this from this channel
var UpperCase = arrayFromLowToHigh(65, 90)
var LowerCase = arrayFromLowToHigh(97, 122)
var NumberChar = arrayFromLowToHigh(48, 57)
var SymboChar = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126))

var s = String.fromCharCode.apply(null, SymboChar);
var l = String.fromCharCode.apply(null, LowerCase);
var u = String.fromCharCode.apply(null, UpperCase);
var n = String.fromCharCode.apply(null, NumberChar);
console.log(typeof s)
// split method converts string into array
s = s.split('');
l = l.split('');
n = n.split('');
u = u.split('');


// This function loop, sorts the chars from low to high; We don't use methods because we are fecthing these from the char method.
function arrayFromLowToHigh(low, high) {
  var array = [];

  for(let i = low; i <= high; i++){
    
    array.push(i)
  }
  return array
}
// end of our low to hight function




// function that provides user with the password rules
function passwordRules(){
  

  // for the paprseInt i had to definetly do some reasearch and it works great in this situation becuase it turns the type into a number. that allows for us to use it in a if statment and in our password length loop.
   var value = parseInt(prompt("How many characters would your password contain?"),10);

  

   
// if statment alerting user if they  don't enter an 8 password lenght or greater
// or operator...tried various methods, I spend a lot of time with && 
    if( value < 8 || value > 129 || !value ){
    alert('password length should be a number, Character must be more than 8 characters and must be less than 129 characters')
    // return null so that our prompt exits
    return null
   }
   
   // confrim adds a true or false button to our prompt. Here we add it to know what characters our user wants
   var sChar = confirm('click to add Special characters');
   var nChar = confirm('click to add number characters');
   var lChar = confirm('click to add lowerCase characters');
   var uChar = confirm('click to add UpperCase characters');
  
   // created in if statment that return an alert to the user if they don't make a characters selection. if the user hits the false button that is displayed by the confrim method, this if statment gets executed.
   if (!sChar && !nChar && !lChar && !uChar ){
    
    alert('Must select at least one character type')
    return null
   
   }
   // We need somewhere to store our passowrds so create an object.Witout it we don,t get value displayed.
   var passwordStorage = {
    value: value,
    sChar: sChar,
    nChar: nChar,
    uChar: uChar,
    lChar: lChar,
   };
   return passwordStorage
  
}
// Function will create a random char by pulling chars from the chosen arrays
function randomPassword(arr){
  
  var rp = Math.floor(Math.random() * arr.length);
  var pr = arr[rp];

   return pr;
}



function generatePassword(){
  // store the function passwordRules in a local variable to have access to its data
  //
  var options = passwordRules();
// the code starts by creating an empty array called g. then, it creatrs a new array called h and starts to add random passwords to the end of the array

var lastPassword = [];

var secondInteration = [];

var fisrtIteration = [];


if (!options) return null;

if (options.sChar) {
  secondInteration = secondInteration.concat(s);
  fisrtIteration.push(randomPassword(s));

 
}
if (options.lChar) {
  secondInteration = secondInteration.concat(l);
  fisrtIteration.push(randomPassword(l));
}
if (options.uChar) {
  secondInteration = secondInteration.concat(u);
  fisrtIteration.push(randomPassword(u));
}

if (options.nChar) {
  secondInteration = secondInteration.concat(n);
  fisrtIteration.push(randomPassword(n));
}


 


//about 5 hours inn. I realized my length for loop wasnt working and it was because I was using lenght instead of the variable value that is tie to my parse int value.
for(var i = 0; i < options.value; i++) {
  var possibleCharacter = randomPassword(secondInteration);

  lastPassword.push(possibleCharacter);
}
for (var i = 0; i < fisrtIteration.length; i++) {
  lastPassword[i] = fisrtIteration[i];
}
return lastPassword.join('');
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










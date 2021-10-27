/ PASSWORD GENERATOR

// Character Generator Functions

// Function that accepts a string value as an argument and returns a random index number from the string argument
function randomIndex(str){
  return Math.floor(Math.random() * str.length);
}

// Example of the randomIndex function
console.log(randomIndex(`chicken`)); // 0, 1, 2, 3, 4, 5, 6

// Function that returns a random lowercase letter
function getRandomLower(){
  const letters = `abcdefghijklmnopqrstuvwxyz`;
  // Returning a random letter using a random index in the "letters" string
  return letters[randomIndex(letters)];
}

// Example of the getRandomLower function
console.log(getRandomLower()); // Random lowercase letter

// Function that returns a random uppercase letter
function getRandomUpper(){
  // Running the "getRandomLower" function to create a random letter and setting that value to the letter variable
  const letter = getRandomLower();
  // Changing the random letter to an uppercase letter and returning it from the function
  return letter.toUpperCase();
}

// Example of the getRandomUpper function
console.log(getRandomUpper()); // Random uppercase letter

// Function that returns a random number (AKA Random number as a string value)
function getRandomNumber(){
  const numbers = `0123456789`;
  // Returning a random number using a random index in the "numbers" string
  return numbers[randomIndex(numbers)];
}

// Example of the getRandomNumber function
console.log(getRandomNumber()); // Random number from the "numbers" string

// Function that returns a random symbol
function getRandomSymbol(){
  const symbols = `!@#$%^&*(){}[]=<>/,.`;
  // Returning a random symbol using a random index in the "symbols" string
  return symbols[randomIndex(symbols)];
}

// Example of the getRandomSymbol function
console.log(getRandomSymbol()); // Random symbol from the "symbols" string

// Object to store all the character generator functions
const randomFunctions = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

// Selecting the DOM Elements
const resultEl = document.querySelector(`#result`);
const clipboardEl = document.querySelector(`#clipboard`);
const lowercaseEl = document.querySelector(`#lowercase`);
const uppercaseEl = document.querySelector(`#uppercase`);
const numbersEl = document.querySelector(`#numbers`);
const symbolsEl = document.querySelector(`#symbols`);
const lengthEl = document.querySelector(`#length`);
const generateEl = document.querySelector(`#generate`);

// Function that accepts true or false values as well as a number as arguments
// NOTE: The checkbox inputs and number (AKA Length) input will determine the value/arguments entered into this function
function generatePassword(lower, upper, number, symbol, length){

  console.log(lower, upper, number, symbol, length);

  // 1. CREATE THE PASSWORD VARIABLE
  let generatedPassword = ``;

  // 2. FILTER OUT UNCHECKED OPTIONS
  // True and false values can be added together (True is 1 and false is 0)
  // NOTE: The value set to typesCount will be used when building the password
  const typesCount = lower + upper + number + symbol;
  console.log(typesCount);

  // If the user has not selected any of the four options, then display alert and return an empty string from the so the password displayed will just be an empty string
  if (typesCount === 0){
    alert(`Please select at least one option`);
    return ``;
  }

  // 3. LOOP OVER THE LENGTH AND AND CALL THE GENERATOR FUNCTION FOR EACH CHECKED OPTION
  // 4. ADD THE GENERATED PASSWORD TO THE FINAL VARIABLE AND RETURN IT FROM THE FUNCTION
}

// Example of generatePassword function
// NOTE: Using the starting value for when the page first loads
generatePassword(true, true, true, true, 10)



// COMMIT AFTER COMPLETING FUNCTION
 // The filter method creates a new array with all the items that "pass the test" implemented by the provided function (AKA All the items that cause the function to return a boolean value of true when the function is run using the item as an argument for the item parameter in this example)
  // Checking if the value for index of 1 in each item in the array is true or false. Also, removing the item from the array if it is false.
  typesArr = typesArr.filter(item => {
    console.log(item[1]);
    return item[1];
  });
  console.log(`typesArr:`, typesArr);

  // 3. LOOP OVER THE LENGTH AND CALL THE GENERATOR FUNCTION FOR EACH CHECKED OPTION
  // Building password with a for loop
  // NOTE: The value for "length" is the value selected for the length number input
  for (i = 0; i < length; i += typesCount){
    // 
    typesArr.forEach(type => {
      const funcName = type[0];
      console.log(funcName);
      // 
      generatedPassword += randomFunctions[`funcname`]();
    });
  }



  // 4. ADD THE GENERATED PASSWORD TO THE FINAL VARIABLE AND RETURN IT FROM THE FUNCTION

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;



// Example of generatePassword function
// NOTE: Using the starting value for when the page first loads
generatePassword(true, true, true, true, 10);



// COMMIT AFTER COMPLETING FUNCTION
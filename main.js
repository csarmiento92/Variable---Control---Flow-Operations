console.log("Assessment loaded!");
// Write the code to solve the following problems.
// For each of the following, use window.prompt() to get user input.
// After getting each one right, "comment it out" so that when you
// refresh you don't have to keep typing things in!

// 1. Even or Odd

// Prompt the user for a number
// If the number is even print "even"
// If the number is odd print "odd"

// let num = prompt('Please provide a number');

// if (num % 2 == 0) {
//     console.log('even');
// } else {
//     console.log('odd');
// }


// 2. Sum numbers from the user

// let num1 = prompt("Please provide a number");
// let num2 = prompt("Please provide another number");
// alert(+num1 + +num2)

// Prompt the user to enter two numbers, then show their sum.

// 3. A random number from min to max

// function getRandomInt() {
//     let min = prompt("Please provide a small value");
//     min = Math.ceil(min);
    
//     let max = prompt("Please provide a larger value");
//     max = Math.floor(max);
    
//     console.log(Math.floor(Math.random() * (max - min)) + min) //The maximum is exclusive and the minimum is inclusive
//   }

//   getRandomInt()

// The built-in function Math.random() creates a random value from 0 to 1 (not /// including 1).

// Write a function random(min, max) to generate a random floating-point number // from min to max (not including max).

// Examples of its work:

// alert( random(1, 5) ); // 1.2345623452
// alert( random(1, 5) ); // 3.7894332423
// alert( random(1, 5) ); // 4.3435234525

// 4. A random integer from min to max

// function getRandomIntInclusive() {
//     let min2 = prompt("Please provide a small value");
//     min2 = Math.ceil(min2);
        
//     let max2 = prompt("Please provide a larger value");
//     max2 = Math.floor(max2);
        
//     console.log(Math.floor(Math.random() * (max2 - min2 + 1)) + min2) //The max2imum is exclusive and the minimum is inclusive
//     }
    
// getRandomIntInclusive()

// Create a function randomInteger(min, max) that generates a random integer 
// from min to max, including both min and max as possible values.

// Any number from the interval min..max must appear with the same probability.

// Examples of its work:

// alert( randomInteger(1, 5) ); // 1
// alert( randomInteger(1, 5) ); // 3
// alert( randomInteger(1, 5) ); // 5

// You can use the solution of the previous task as the base.

// 5. Uppercase the first character

// Write a function ucFirst(str) that returns the string str with the 
// uppercased first character, for instance:

// ucFirst("john") == "John";

// const toTitleCase = (phrase) => {
//     return phrase
//       .toLowerCase()
//       .split(' ')
//       .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//       .join(' ');
//   };
  
//   let result = toTitleCase('christina');
//   console.log(result);


// 6. Check for spam

// Write a function checkSpam(str) that returns true if str contains ‘viagra’ 
// or ‘XXX’, otherwise false.

// The function must be case-insensitive:

// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

// function checkSpam(str) {
//     let lowerStr = str.toLowerCase();
  
//     return lowerStr.includes('viagra') || lowerStr.includes('xxx');
//   }
  
//   alert( checkSpam('buy ViAgRA now') );
//   alert( checkSpam('free xxxxx') );
//   alert( checkSpam("innocent rabbit") );

// 7. Truncate the text

// Create a function truncate(str, maxlength) that checks the length of the str 
// and, if it exceeds maxlength, truncates the string to make its length equal 
// to maxlength.

// The result of the function should be the truncated (if needed) string.

// For instance:

// truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to tel"
// truncate("Hi everyone!", 20) = "Hi everyone!"

// function truncateString(str, num) {
//     return str;
//   }
  
//  console.log (truncateString("I love martinis with sugar on the rim", 6));

// text_truncate = function(str, length, ending) {
//     if (length == null) {
//       length = 100;
//     }
//     if (ending == null) {
//       ending = '...';
//     }
//     if (str.length > length) {
//       return str.substring(0, length - ending.length) + ending;
//     } else {
//       return str;
//     }
//   };
// console.log(text_truncate('I love martinis with sugar on the rim.'))
// console.log(text_truncate('I love martinis with sugar on the rim.',19))
// console.log(text_truncate('I love martinis with sugar on the rim.',15,'!!'))


// 8. Extract the money

// We have a cost in the form "$120". That is: the dollar sign goes first, and 
// then the number.

// Create a function extractCurrencyValue(str) that would extract the numeric 
// value from such string and return it

// function extractCurrencyValue(str) {
//     return +str.slice(1);
//   }

//   alert( extractCurrencyValue('$120') === 120 );





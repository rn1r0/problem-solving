//1. Write a function that takes an array of numbers and returns the largest (without using Math.max())

// test data
// console.log(largest([6, 13, 250, 3)) // => 250
// console.log(largest([3, 5, 2, 8, 1])) // => 8
// console.log(largest([-13, 40, 3, 0, 19, 22])) // => 40

//2. Write a function that takes an array of words and a character and returns each word that has that character present.

// test data
// console.log(lettersWithStrings(["$hello!", "%%^%%", "test!"], "!") => // => ["$hello!", "test!"]
// console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!"))  // => ["C%4!", "Hey!"]
// console.log(lettersWithStrings(["yellow", "green", "^up^", "down", "dog"], "h"))  // => []

//3. Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.

// test data
// console.log(isDivisible(4, 2)) // => true
// console.log(isDivisible(9, 3)) // => true
// console.log(isDivisible(15, 4)) // => false


//1.
// const numbers = [6, 9, 4, 2, 0];
// const largest = findLargest(numbers);

// function findLargest(numbers){
//     var largest = numbers[0];
//     for (var i = 1; i < numbers.length; i++){
//         if (numbers[i] > largest){
//             largest = numbers[i];
//         }
//     }
//     return largest;
// }
// console.log(largest);



//2.
// const words = ["japan", "poland", "germany", "switzerland"];      //rookie mistake forgot "" and couldnt turn it into a string was being undefined... always recheck....
// const char = "z";
// const wordsWithChar = findWordsWithChar(words, char);

// function findWordsWithChar(words, char){
//     const result = [];
//     for (const word of words){
//         if (word.includes(char)){
//             result.push(word);
//         }
//     }
//     return result;
// }
// console.log(wordsWithChar);


//3. 
// function isDivisible(num1, num2){   
//     if (num1 % num2 === 0){
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isDivisible(8, 4));
// console.log(isDivisible(24, 7));
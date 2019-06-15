// Find the maximum
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest.

function maxOfTwoNumbers(number1, number2){
  if (number1 > number2){
    return number1;
  } else {
    return number2;
  }
}
console.log(maxOfTwoNumbers(5, 10));


// Finding Longest Word
// Write a function findLongestWord that takes an array of words and returns the longest one. 
// If there are 2 with the same length, it should return the first occurrence.


let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];

function findLongestWord(array) {
  if  (array.length === 0){
    return undefined;
  }
  let longestWord = array[0];
  for (let i = 0; i < array.length; i++){
      if (longestWord.length < array[i].length){
        longestWord = array[i]
      }
    }
return longestWord;
}
console.log(findLongestWord([]));


// Calculating a Sum
// Calculating a sum is as simple as iterating over an array and adding each of the elements together.

// Semantically reduce is the best method to use for this, but you can use any loop we've discussed so far.

// Create a sumArray function that takes an array of numbers as a parameter, and calculate the sum of all its numbers:

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumArray(array){
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  if (array.length === 0){
    return 0;
  }
return array.reduce(reducer);
}

// Calculate the Average
// Calculating an average is an extremely common task. Let's practice it a bit.

// Algorithm

// Find the sum as we did in the first exercise
// Take the sum from step 1, and divide it by the number of elements in the list.

// Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers:

let numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array){
  if (array.length === 0){
    return undefined;
  }
  let sum = sumArray(array);
  return sum/array.length;
}

console.log(averageNumbers(numbersAvg))


// Array of Strings
// Write a function averageWordLength that receives an array of words and calculate the average length of the words:

var wordsArr = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];

function averageWordLength(array){
  if (array.length === 0){
    return undefined;
  }
  let wordLength = []
  for (let i = 0; i < array.length; i++){
    wordLength.push(array[i].length);
  }
  let sum = sumArray(wordLength);
  return sum/wordLength.length;
}

// Unique Arrays
// Take the following array, remove the duplicates, and return a new array. 
// You're more than likely going to want to check out the indexOf function.

// Do this in the form of a function uniquifyArray that receives an array of words as a parameter.

let wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(array){
  let newArray = [];
  if (array.length === 0){
    return undefined;
  }
  for (let i = 0; i < array.length; i++){
    if (newArray.indexOf(array[i]) !== -1) {
      continue;
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}


// Finding Elements
// Let's create a simple array search.

// Write a function doesWordExist that will take in an array of words as one argument, and a word to search for as the other.
//  Return true if it exists, otherwise, return false. Don't use indexOf for this one. :)

let wordsFind = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience'
];

function doesWordExist(array, word){
  if (array.length === 0){
    return false;
  }
  if (array.length === 1){
    return true;
  }
  let result = false;
  array.forEach(element => {
    if (element === word && word !== undefined){
      result = true;
    }
  });
  return result;
}

// Counting Repetion

// Write a function howManyTimes that will take in an array of words as one argument, and a word to search for as the other. 
// The function will return the number of times that word appears in the array.

let wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(array, word){
  if (array.length === 0){
    return false;
  }
  let count = 0;
  array.forEach(element => {
    if (element === word){
      count++;
    }  
  });
return count;
}


// Bonus Quest
// In the 20×20 grid below; What is the greatest product of four adjacent numbers in the same direction (up, down, left, right)?
// Write a function greatestProduct to find the answer!

var matrix1 = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];


function greatestProduct(matrix) {
  let productMatrix = [];
  let up = 1;
  let down = 1;
  let left = 1;
  let right = 1;
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++)
  {
    if (i-1 >= 0) {
    up = matrix[i-1][j];
  }
  if (i+1 < matrix.length) {
    down = matrix[i+1][j];
  }
  if (j-1 >= 0) {
    left = matrix[i][j-1];
  }
  if (j+1 < matrix.length) {
    right = matrix[i][j+1];
  }
  productMatrix.push(up*down*left*right)
  }
}
let number = 1;
for (let w = 0; w < productMatrix.length; w++) {
  if (productMatrix[w] > number) {
    number = productMatrix[w];
  }
}
return number;
}

console.log(greatestProduct(matrix1))
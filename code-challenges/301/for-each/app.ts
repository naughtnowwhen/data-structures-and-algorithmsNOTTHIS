'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1
Write a function named greetingTS that takes in a string and returns the string in all uppercase letters.
Then, write a function named speakerTS that takes in a string and a callback function. The speakerTS function should return the string in all uppercase letters only by invoking the callback.
------------------------------------------------------------------------------------------------ */

const greetingTS = (word: string) => word.toUpperCase();

// console.log(greetingTS('hello'));

const speakerTS = (message, callback) => {
  return callback(message);
}

speakerTS('dogcatdogacat', greetingTS); //?


/* ------------------------------------------------------------------------------------------------
CHALLENGE 2
Write a function named addValuesTS that takes in an array and a value and pushes the value into the array. This function does not need a return statement.
Then, write a function named addNumbersTS that takes in four arguments:
  - A number to be added to an array
  - An array into which the number should be added
  - The number of times the number should be added
  - A callback function to use to add the numbers to the array (Hint: you already defined it)
Within the addNumbersTS function, invoke the callback function as many times as necessary, based on the third argument of the addNumbersTS function.
Return the modified array.
------------------------------------------------------------------------------------------------ */

const addValuesTS = (arr: number[], value: number) => {
  arr.push(value);
}
// addValuesTS([], 9); 



const addNumbersTS = (value: number, arr: number[], times: number, callback: (arr: number[], value: number) => void) => {
  for (let i = 0; i < times; i++) {
    callback(arr, value);
  }
  return arr;
}


/* ------------------------------------------------------------------------------------------------
CHALLENGE 3
Write a function named removeOneTS that takes in a number and an array. If the number divided by three has a remainder of two, pop one element off of the array.
Hint: you may want to look into the modulo operation.
Then, write a function named removeElementsTS that takes in an array and a callback. This function should use a for loop to iterate over the array and invoke the callback once for each element in the array.
Return the modified array.
------------------------------------------------------------------------------------------------ */


const removeOneTS = (num: number, arr: number[]) => {
  if (num % 3 === 2) {
    console.log(num % 3)
    arr; //?
    arr.pop(); 
    arr; //?
  }
  return arr; //?
}

const removeElementsTS = (arr: number[], callback : (num: number, arr: number[])=>number[]) => {
for (let i of arr) {
  callback(i, arr);
}
console.log(arr);
return arr; 
}


/* ------------------------------------------------------------------------------------------------
CHALLENGE 4
Write a function named removeWithForEachTSing that produces the same output as challenge 3, but uses forEach.
------------------------------------------------------------------------------------------------ */

const removeWithForEachTSing = (arr : number [], callback : ((num: number, arr: number[])=>number[])) => {
console.log(arr);
  arr.forEach((value)=>{
    callback(value, arr);
  });
  return arr; //?
}

const genericForEach = (arr : number [], callback) => {
  console.log(arr);
  arr.forEach((val)=>{

  })
}


/* ------------------------------------------------------------------------------------------------
CHALLENGE 5
Write a function named removeWithAnonTS that produces the same output as challenges 3 and 4.
This function should use forEach again, but rather than taking in a callback as an argument, define an anonymous function as the argument to forEach.
This anonymous function should accept up to three arguments: the element, the index, and the array.
------------------------------------------------------------------------------------------------ */

const removeWithAnonTS = (arr:number[]) => {
  arr.forEach((value, index, array) => {
    if (value % 3 === 2) {
      console.log(value % 3)
      arr.pop(); 
    }
  })
  return arr;
}


/* ------------------------------------------------------------------------------------------------
CHALLENGE 6
Write a function named createListTS that takes in an array of the current store intentory.
The inventory is formatted like this:
[
  { name: 'apples', available: true },
  { name: 'pears', available: true },
  { name: 'oranges', available: false },
  { name: 'bananas', available: true },
  { name: 'blueberries', available: false }
]
This function should use forEach to populate your grocery list based on the store's inventory. If the item is available, add it to your list. Return the final list.
------------------------------------------------------------------------------------------------ */

let storeDataForTS : IStoreData[] = [
  { name: 'apples', available: true },
  { name: 'pears', available: true },
  { name: 'oranges', available: false },
  { name: 'bananas', available: true },
  { name: 'blueberries', available: false }
]

interface IStoreData {
  name : string;
  available : boolean;
}

const createListTSing = (availableItems : IStoreData[]) => {
  let myList = [];
  availableItems.forEach((item)=> {
    if (item.available){
      myList.push(item);
    }
  })
  return myList;
}

createListTSing(storeDataForTS); //?

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7
Write a function named fizzbuzzTS that takes in an array of numbers.
Iterate over the array using forEach to determine the output based on several rules:
  - If a number is divisible by 3, add the word "Fizz" to the output array.
  - If the number is divisible by 5, add the word "Buzz" to the output array.
  - If the number is divisible by both 3 and 5, add the phrase "Fizz Buzz" to the output array.
  - Otherwise, add the number to the output array.
Return the resulting output array.
------------------------------------------------------------------------------------------------ */

const fizzbuzzTS = (arr : number[]) => {
  let output : (string | number)[] =[];
  arr.forEach((val)=> {
    if (val % 3 === 0 && val % 5 !== 0){
      output.push('Fizz');
    }
    else if (val % 5 === 0 && val % 3 !== 0) {
      output.push('Buzz');
    }
    else if (val % 3 === 0 && val % 5 === 0){
      output.push('Fizz Buzz');
    }
    else output.push(val);
  })
  return output;
}

let feedME = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];

let fizzmee = fizzbuzzTS(feedME);
console.log(fizzmee)




/* ------------------------------------------------------------------------------------------------
TESTS
All the code below will verify that your functions are working to solve the challenges.
DO NOT CHANGE any of the below code.
Run your tests from the console: jest challenges-01.test.js
------------------------------------------------------------------------------------------------ */


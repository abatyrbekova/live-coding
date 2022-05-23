// Given an array of numbers, print the numbers from 1 to 6 to the console
/* 
Expected output:
1
2
3
4
5
6
*/
let numbers1 = [1, 2, 3, 4, 5, 6];

console.log("Exercise 1");
console.log("----------");

for (let number of numbers1) {
  console.log(number);
}

// Given nested arrays, print the numbers from 1 to 6
/* 
Expected output:
1
2
3
4
5
6

Hint: in this and the other exercises you can use the method Array.isArray() to check
if a value is an array or not
*/

console.log("Exercise 2");
console.log("----------");
let numbers2 = [
  [1, 2],
  [3, 4],
  [5, 6, 7, 8, 9, 10],
  [11, 12, 13],
];

for (let nestedItem of numbers2) {
  for (let number of nestedItem) {
    console.log(number);
  }
}

console.log("----------");

// Given nested arrays, print the numbers from 1 to 6 like in the examples above
let numbers3 = [1, 2, 3, [4, 5, 6]];

// Array.isArray()
for (let item of numbers3) {
  if (Array.isArray(item)) {
    for (let number of item) {
      console.log(number);
    }
  } else {
    console.log(item);
  }
}

console.log("Exercise 3");
console.log("----------");

// Given nested arrays, print the numbers from 1 to 9
let numbers4 = [1, 2, 3, [4, 5, 6], 7, 8, 9];
console.log("Exercise 4");
console.log("----------");
for (let item of numbers4) {
  if (Array.isArray(item)) {
    for (let number of item) {
      console.log(number);
    }
  } else {
    console.log(item);
  }
}
// Given nested arrays, print the numbers from 1 to 15
let numbers5 = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12, [13, 14, 15]]]]];

console.log("Exercise 5");
console.log("----------");

for (let item of numbers5) {
  if (Array.isArray(item)) {
    for (let nestedItem1 of item) {
      if (Array.isArray(nestedItem1)) {
        for (let nestedItem2 of nestedItem1) {
          if (Array.isArray(nestedItem2)) {
            for (let nestedItem3 of nestedItem2) {
              if (Array.isArray(nestedItem3)) {
                for (let nestedItem4 of nestedItem3) {
                  console.log(nestedItem4);
                }
              } else {
                console.log(nestedItem3);
              }
            }
          } else {
            console.log(nestedItem2);
          }
        }
      } else {
        console.log(nestedItem1);
      }
    }
  } else {
    console.log(item);
  }
}

// function infinityLoop() {
//   console.log("hey");
//   infinityLoop();
// }

// infinityLoop();

/**
 * - initialization
 * - exit condition
 * - update (increment)
 */

function countdown(n) {
  console.log("countdown", n);
  if (n === 0) {
    return n;
  }
  const updatedN = n - 1;
  countdown(updatedN);
  console.log(`function with n ${n} is over now`);
}

countdown(5);
countdown(10);

function fn1(n) {
  n++;
  fn2(n);
  console.log("now I'm done!");
}

function fn2(n) {
  console.log(n);
}

fn1(99);

/*
countdown(5)
- countdown(4)
- - countdown(3)
- - - countdown(2)
- - - - countdown(1)
- - - - - countdown(0)
- - - - countdown(1)
- - - countdown(2)
- - countdown(3)
- countdown(4)
countdown(5)
*/

/**
 * Factorials
 *
 * 5! => 5 * 4 * 3 * 2 * 1 => 120
 * 4! => 4 * 3 * 2 * 1 => 24
 * 3! => 3 * 2 * 1 => 6
 */

function factorial(n) {
  if (n === 1) {
    return n;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(3));

/*
factorial(3) => 3 * factorial(2)
          factorial(2) => 2 * factorial(1)
                  factorial(1) => 1
          factorial(2) => 2 * 1 => 2
factorial(3) => 3 * 2 => 6
*/

function arrayExplorer(array, index) {
  if (index < array.length) {
    if (Array.isArray(array[index])) {
      arrayExplorer(array[index], 0);
    } else {
      console.log("inside", array[index]);
    }
    arrayExplorer(array, index + 1);
  }
}

arrayExplorer(numbers5, 0);
arrayExplorer(numbers4, 0);
arrayExplorer(numbers1, 0);

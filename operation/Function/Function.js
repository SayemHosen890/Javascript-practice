function myFunction() {
  console.log("here is everything ready");
  console.log("here is everything ready");
  console.log("here is everything ready");
}
// myFunction();

function sum(a, b) {
  console.log(a * b);
}
// sum(5, 5);

function sum(a, b) {
  add = a + b;
  return add;
}
let added = sum(8, 8);
// console.log(added);

const arrowFunction = (a, b) => {
  let multi = a * b;
  console.log(multi, "this is final");
};

// arrowFunction(3,3);

function addNum(a, b) {
  add = a + b;
  // console.log(arguments)
  console.log(add);
}
// addNum(34, 5);
// addNum(34, 6);
// addNum(34, 7);

function square(number) {
  const borgo = number * number;
  console.log(borgo);
}
// square(3)
// square(9)
// square(13)

function subtraction(num1, num2) {
  const diff = num1 - num2;
  console.log(diff);
}
const father = 35;
const son = 15;

// subtraction(father,son)

function addedNum(x, y) {
  let sum = 0;
  for (const num of arguments) {
    sum = sum + num;
  }
  console.log(sum);
}
// addedNum(5, 5,5,5,5);

function multiply(a, b) {
  return a * b;
}
const multi = multiply(4, 4);
// console.log(multi)

// function vowels(str) {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   // return count;
// }
// vowels("abcedhig");

// const countVowel = (str) => {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// };
// countVowel("adceou");

// const allVowel = (str) => {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// };
// allVowel("aeci")

const countVow = (str) => {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
};

// console.log(countVow("aeiou"))

let arr = ["dhaka", "khulna", "barishal", "sylhet"];

arr.forEach(function arrFunc(val) {
  // console.log(val);
});

arr.forEach((val, idx, arr) => {
  // console.log(val.toUpperCase(),idx,arr)
});

let array = [2, 4, 6, 8, 10, 12];

let calculate = (arr) => {
  let square = arr * arr;
  console.log(square);
};

// array.forEach(calculate);

let nums = [10, 12, 14, 16];

let newArr = nums.map((num) => {
  return num * num;
});
// console.log(newArr);

function doMath(num1, num2) {
  const sum = num1 + num2;
  const diff = num1 - num2;
  const multiply = sum * diff;
  const result = multiply / 2;
  // console.log(result)
  return result;
}
const result = doMath(10, 5);
// console.log(result);

function boolean(num1, num2) {
  if ((num1, num2 % 2 === 0)) {
    return true;
  } else {
    return false;
  }
}
// console.log(boolean(24,78))
// console.log(boolean(40,79))
// console.log(boolean(34,88))

let numbers = [10, 20, 3, 4, 5];

let newMap = numbers.map((num) => num * 2);
// console.log(newMap);

// console.log(numbers.map((num) => num / 2));

let arra = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let newArra = arra.filter((arr) => {
  return arr % 2 === 0;
});
// console.log(newArra);

let reduce = arra.reduce((res, curr) => {
  return res > curr ? res : curr;
});
// console.log(reduce);

let stuMark = [56, 90, 80, 70, 75, 78];

let upperNum = stuMark.filter((val) => {
  if (val > 70) {
    return true;
  } else {
    return false;
  }
});
// console.log(upperNum);

// let n = prompt("enter a num : ");
// let arrr = [];
// for (let i = 1; i <= n; i++) {
//   arrr[i - 1] = i;
// }
// console.log(arrr);

// let sumAll = arrr.reduce((res, curr) => {
//   return res + curr;
// });
// console.log(sumAll);

// let factorial = arrr.reduce((res, curr) => {
//   return res * curr;
// });
// console.log(factorial);

function eventString(str) {
  const checkLength = str.length;
  if (checkLength % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
const check = eventString("dhaka");
// console.log(check);

function doubleCheck(num, doDouble) {
  if (doDouble === true) {
    const res = num * 2;
    return res;
  } else {
    const res = num * 3;
    return res;
  }
}
// console.log(doubleCheck(5, true));
// console.log(doubleCheck(6, false));

function arrayAdd(nums) {
  const addArray = nums.length;
  return addArray;
}
const nowAdd = arrayAdd([1, 2, 3, 4, 5, 6, 7]);
// console.log(nowAdd);

// function sumOfAll(numbers) {
//   let sum = 0;
//   for (const num of numbers) {
//     if (num % 2 === 0) {
//       sum = sum + num;
//     }
//   }
//   return sum;
// }
// const summall = [1, 2, 3, 4, 5];
// const total = arrayAdd(summall);
// console.log(total);

function sumOfEven(numbers) {
  let sum = 0;
  for (const num of numbers) {
    if (num % 2 === 0) {
      sum = sum + num;
    }
  }
  return sum;
}
const summall = [2, 2, 3, 4, 5];
const total = sumOfEven(summall);
// console.log(total);

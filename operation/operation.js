const c = 12;
const d = 12;

// let addition = a + b;

if (c < d) {
  console.log("true");
} else {
  console.log("false");
}

console.log("c=", c, "& d=", d);

console.log("c+d =", c + d);
console.log("c-d =", c - d);
console.log("c*d =", c * d);
console.log("c/d =", c / d);

//arithmetic

// let a = 5;
// let b = 4;

// console.log("modulas =", a % b);
// console.log("exponential =", a ** b);

// a++;
// console.log("result =", a);
// a--;
// console.log("a++ =", a++);
// console.log("result=", a);
// --a;
// console.log("a=", a);
// console.log(a)
// console.log("result =", a);

//assignment

// let a = 5;
// let b = 4;

// a %= 4;
// console.log("a =", a);

// let a = 9;
// let b = 9;

// console.log("9===9", a === b);

//logical

// let a = 9;
// let b = 5;

// let cond1 = a < b; //false
// let cond2 = a !== b; //true

// console.log(a<b || a==b);

//condition
// let mode = "dark-mode";

// let color;

// if (mode === "dark-mode") {
//   color = "black";
// }

// if (mode==="light-mode"){
//     color="white"
// }

// console.log(color);

// let age = 18;

// if (age != 18) {
//   console.log("he can do anything");
// } else {
//   console.log("never do vote at least");
// }

// let mode = "dark-mode";
// let color;

// if (mode !== "dark-mode") {
//   color = "black";
// } else {
//   color = "white";
// }
// console.log(color);

let num = 25;
let num2 = 26;

if (num === num2) {
  console.log("even");
} else {
  console.log("odd");
}

let mode = "blue";
let color;

if (mode === "dark") {
  color = "black";
} else if (mode === "red") {
  color = "red";
} else if (mode === "yellow") {
  color = "yellow";
} else {
  color = "white";
}
console.log(color);

let age = 15;

let result = age >= 18 ? "adult" : "bacca";
console.log(result);

let score = 90;
let grade;

if (score >= 90 && score <= 100) {
    grade="A+";
} else if (score >= 80 && score <= 89) {
  grade = "A";
} else if (score >= 70 && score <= 79) {
  grade = "A-";
} else if (score >= 60 && score <= 69) {
  grade = "B+";
} else {
  grade="F";
}

console.log("your grade",grade)

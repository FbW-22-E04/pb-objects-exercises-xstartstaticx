//1
console.log("----- 1. isPlainObject -----");

const data = { a: 1 };
//write your code here
function isPlainObject(object) {
  //   if (object === null || Array.isArray(object) === true) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  if (typeof object === "object" && object !== null && !Array.isArray(object)) {
    return true;
  } else {
    return false;
  }
}

console.log(isPlainObject(data)); // true
console.log(isPlainObject([1, 2, 3])); // false
console.log(isPlainObject(null)); // false

//2
console.log("----- 2. makePairs -----");

const data2 = { a: 1, b: 2 };
//write your code here
function makePairs(obj) {
  let entries = Object.entries(obj);
  return entries;
}

console.log(makePairs(data2)); // [['a', 1], ['b', 2]]

// -------------other way-----------------
// const makePairs2 = (object) => Object.entries(object);
// console.log(makePairs2(data2));

// -------------other way-----------------
// const makePairs2 = (object) => Object.keys(object).map((e) => [e, object[e]]);
// console.log(makePairs2(data2));

// --------------other way----------------
// const data2 = { a: 1, b: 2 };
// //write your code here
// function makePairs(obj) {
//   const arr = [];
//   for (const key in obj) {
//     arr.push([key, obj[key]]);
//   }
//   return arr;
// }

// console.log(makePairs(data2));

// // 3
console.log("----- 3. without -----");

const data3 = { a: 1, b: 2 };
//write your code here
function without(x, y) {
  delete x[y];
  return x;
}

console.log(without(data3, "b")); // { a: 1 }

// //4
console.log("----- 4. isEmpty -----");

const data4 = { a: 1, b: undefined };
const data40 = { a: undefined };
//write your code here

function isEmpty(object) {
  let values = Object.values(object);
  if (values.length === 0) return true;
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== undefined) return false;
  }
  return true;
}

console.log(isEmpty(data4)); // false
console.log(isEmpty(data40)); // true
console.log(isEmpty({})); // true

// const data4 = { a: 1, b: undefined };
// const data40 = { a: undefined };
// //write your code here
// function isEmpty(obj) {
//   if (Object.keys(obj).length === 0 || obj[Object.keys(obj)[0]] === undefined) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isEmpty({})); // true
// console.log(isEmpty(data4)); // false
// console.log(isEmpty(data40)); // true

//5
console.log("----- 5. isEqual -----");

const data5 = { a: 1, b: 1 };
const data51 = { a: 1, b: 1 };
const data52 = { a: 1, b: 2 };
//write your code here
function isEqual(a, b) {
  if (JSON.stringify(a) === JSON.stringify(b)) {
    return true;
  } else {
    return false;
  }
}

// ----------------other way----------------------
// const isEqual = (object1, object2) =>
//   JSON.stringify(Object.entries(object1).sort()) ===
//   JSON.stringify(Object.entries(object2).sort());

console.log(isEqual(data5, data51)); // true
console.log(isEqual(data5, data52)); // false

//6
console.log("----- 6. invoke -----");

const data6 = { a: { b: [1, 2, 3] } };
//write your code here
function invoke(obj, ab, spl, arr) {}

console.log(invoke(data6, "a.b", "splice", [1, 2])); // [2, 3]

//7
console.log("----- 7. isEmptyDeep -----");

const data7 = { a: { b: undefined } };
//write your code here
function isEmptyDeep(obj) {
  return JSON.stringify(obj) === JSON.stringify({});
}

console.log(isEmptyDeep(data7));
console.log(isEmptyDeep({}));

// //8
// const data8 = { a: 1, b: { c: 1 } };
// const data81= { a: 1, b: { c: 1 } };
// const data82= { a: 1, b: { c: 2 } };
// //write your code here
// console.log(isEqualDeep(data8, data81));// true
// console.log(isEqualDeep(data8, data82)); // false

// //9
// const data9 = { a: 1, b: 2 };
// const data91 = { c: 1, b: 2 };
// //write your code here
// console.log(intersection(data9, data91)); // { b: 2 }

// //10
// const data10 = { a: 1, b: { c: 3 } };
// const data11 = { c: 1, b: { c: 3 } };
// //write your code here
// console.log(intersectionDeep(data10, data11)); // { b: { c: 3 } }

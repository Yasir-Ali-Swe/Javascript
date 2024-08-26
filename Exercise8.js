// array map method
let array = [1, 2, 3, 4, 5];
let newArray = array.map((item) => {
  return item * item;
});
console.log(newArray);
let arraySum = 0;
array.map((item) => {
  arraySum += item;
});
console.log(arraySum);

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let oddArray = array.filter((number) => {
  if (number % 2 !== 0) {
    return number;
  }
});

console.log("Odd Array is  ", oddArray);

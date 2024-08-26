let list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for loop
for (let i = 0; i < list.length; i++) {
  console.log(list[i]);
}
// for of loop
// it is used to itrare over tle list
for (let item of list) {
  console.log(item);
}
// foreach loop
// it is used to itrare over tle list
list.forEach((item) => console.log(item));
// map
let newList = list.map((item) => {
  return item * item;
});
console.log(newList);
// filter
let evenList = list.filter((item) => {
  if (item % 2 === 0) {
    return item;
  }
});
console.log(evenList);
// reduce
let sum = list.reduce((a, b) => {
  return a + b;
}, 0);
console.log(sum);

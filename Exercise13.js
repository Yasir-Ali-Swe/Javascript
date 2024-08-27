const names = ["Alice", "Bob", "Alice", "Charlie", "Bob", "Alice"];
const nameCount = names.reduce((accumulator, currentValue) => {
  accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
  return accumulator;
}, {});

console.log(nameCount);

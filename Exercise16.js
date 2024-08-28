const obj = {
  name: "YAsir Ali",
  age: 21,
  gender: "Female",
  email: "Yasir@gmail.com",
  contactNo: "03301766870",
};
console.log("\n");
for (let key in obj) {
  console.log(`${key}  ${obj[key]} \n`);
}

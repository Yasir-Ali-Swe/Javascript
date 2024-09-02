function fetchData(User, callback) {
  setTimeout(() => {
    callback(User);
  }, 2000);
}
console.log("fetching user data.....");
fetchData("Yasir Ali", function (data) {
  console.log(data);
  console.log("fetching user data.....");
  fetchData("Ali", function (data) {
    console.log(data);
  });
});

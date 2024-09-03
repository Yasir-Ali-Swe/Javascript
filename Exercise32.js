function displayData(userName, callback) {
  setTimeout(() => {
    callback(userName);
  }, 2000);
}

console.log("Fetching data.....");

displayData("Yasir Ali", function (data) {
  console.log(data);

  console.log("Fetching data.....");
  displayData("Ali", function (data) {
    console.log(data);

    console.log("Fetching data.....");
    displayData("Asad", function (data) {
      console.log(data);
    });
  });
});

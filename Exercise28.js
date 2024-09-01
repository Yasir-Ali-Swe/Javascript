function fetchData(user, callback) {
  setTimeout(() => {
    callback(user);
  }, 2000);
}

console.log("Fetching Data....");

fetchData("Yasir Ali", function (data) {
  console.log(data);

  console.log("Fetching Data....");

  fetchData("Salman Akram", function (data) {
    console.log(data);
  });
});

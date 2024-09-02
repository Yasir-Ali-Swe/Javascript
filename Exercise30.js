function fetchData(userName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(userName);
    }, 2000);
  });
}
console.log("Fetching data.....");
fetchData("Yasir Ali")
  .then((data) => {
    console.log(data);
    console.log("Fetching data.....");
    return fetchData("Asad");
  })
  .then((data) => {
    console.log(data);
    console.log("Fetching data.....");
    return fetchData("Asad");
  })
  .then((data) => {
    console.log(data);
  });

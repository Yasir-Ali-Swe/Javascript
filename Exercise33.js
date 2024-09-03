function fetchData(userName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(userName);
    }, 2000);
  });
}
console.log("Fetching user data.....");
fetchData("Ali")
  .then((data) => {
    console.log(data);
    console.log("Fetching user data.....");
    return fetchData("Yasir");
  })
  .then((data) => {
    console.log(data);
    console.log("Fetching user data.....");
    return fetchData("Yasir");
  })
  .then((data) => {
    console.log(data);
  });

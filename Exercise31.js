function fetchData(userName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(userName);
    }, 2000);
  });
}
(async function showData() {
  console.log("Fetching data.....");
  console.log(await fetchData("Yasir Ali"));
  console.log("Fetching data.....");
  console.log(await fetchData("Saad"));
  console.log("Fetching data.....");
  console.log(await fetchData("Abdullah"));
  console.log("Fetching data.....");
  console.log(await fetchData("Asad"));
  console.log("Fetching data.....");
  console.log(await fetchData("Ali"));
})();

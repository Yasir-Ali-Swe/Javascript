function fetchData(userName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(userName);
    }, 2000);
  });
}
console.log("Fetching userData.....");
(async function displaydata() {
  console.log(await fetchData("Yasir ALi"));
  console.log("Fetching userData.....");
  console.log(await fetchData("Umar"));
  console.log("Fetching userData.....");
  console.log(await fetchData("Saljok"));
})();

function fetchData(user) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(user);
    }, 2000);
  });
}

(async function displayData() {
  console.log("Fetching Data....");
  let data = await fetchData("Yasir Ali");
  console.log(data);
  console.log("Fetching Data....");
  data = await fetchData("Salman Akram.");
  console.log(data);
})();

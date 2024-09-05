let apiUrl = "https://api.wazirx.com/sapi/v1/tickers/24hr";

(async function fetchData() {
  let t1 = performance.now();
  let data = await fetch(apiUrl);
  data = await data.json();
  data.forEach((item) => {
    for (let key in item) {
      console.log(`${key}         ${item[key]}.`);
    }
    console.log("\n");
  });
  let t2 = performance.now();
  console.log(`Time of execution: ${t2 - t1} milliseconds`);
})();

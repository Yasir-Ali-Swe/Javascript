let apiUrl = "https://api4.binance.com/api/v3/ticker/24hr";
(async function fetchData() {
  let data = await fetch(apiUrl);
  data = await data.json();
  console.log(data[0]);
  data.forEach((item) => {
    for (let key in item) {
      console.log(`${key}  ${item[key]}`);
    }
    console.log("\n");
  });
})();

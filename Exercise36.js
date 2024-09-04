let apiUrl = "https://api.coindesk.com/v1/bpi/currentprice.json";
(async function displayData() {
  let response = await fetch(apiUrl);
  let data = await response.json();
  console.log(data);
  console.log("---------------------------------");
  console.log(data.time);
  console.log("---------------------------------");
  console.log(data.disclaimer);
  console.log("---------------------------------");
  console.log(data.bpi);
  console.log("---------------------------------");
  console.log(data.bpi.USD);
  console.log("---------------------------------");
  console.log(data.bpi.GBP);
  console.log("---------------------------------");
  console.log(data.bpi.EUR);
})();

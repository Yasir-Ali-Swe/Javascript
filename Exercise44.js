let apiUrl = "https://api.coinbase.com/v2/currencies";
(async function fetchData() {
  let data = await fetch(apiUrl);
  data = await data.json();
  //   console.log(data);
  data = data.data;
  data.forEach((item) => {
    console.log(item.id + "  " + item.name + "  " + item.min_size);
    console.log("\n");
  });
})();

let apiUrl = "https://api.coincap.io/v2/assets";
(async function fetchData() {
  let data = await fetch(apiUrl);
  data = await data.json();
  data = data.data;
  data.forEach((item) => {
    for (let key in item) {
      console.log(`${key}      ${item[key]}.`);
    }
    console.log("\n");
  });
})();

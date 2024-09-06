let apiUrl = "https://api.coincap.io/v2/assets";
(async function fetchData() {
  let data = await fetch(apiUrl);
  data = await data.json();
  console.log(data);
})();

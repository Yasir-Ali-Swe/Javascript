// replace your ip address and get infomation about your internet ip
let url = "https://ipinfo.io/103.232.142.75/geo";

(async function getData() {
  let apiData = await fetch(url);
  apiData = await apiData.json();
  //   console.log(apiData);
  for (let key in apiData) {
    console.log(`${key}      ${apiData[key]}`);
  }
})();

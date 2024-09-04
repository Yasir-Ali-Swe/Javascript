let url = "https://datausa.io/api/data?drilldowns=Nation&measures=Population";

(async function getData() {
  let apiData = await fetch(url);
  apiData = await apiData.json();
  apiData = apiData.data[0];
  //   console.log(apiData.data[0]["ID Nation"]);
  for (let key in apiData) {
    console.log(`${key}      ${apiData[key]}`);
  }
})();

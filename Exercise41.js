let apiUrl = "https://wttr.in/Pakistan?format=3";
(async function fetchData() {
  let data = await fetch(apiUrl);
  data = await data.text();
  console.log(data);
})();

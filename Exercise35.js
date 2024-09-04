let url = "https://catfact.ninja/fact";

(async function getData() {
  let data = await fetch(url);
  data = await data.json();
  console.log(data.fact);
})();

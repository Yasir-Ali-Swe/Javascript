let apiUrl = "https://ifsc.razorpay.com/YESB0DNB002";

(async function fetchData() {
  let data = await fetch(apiUrl);
  data = await data.json();
  //   console.log(data);
  for (let key in data) {
    console.log(`${key}------------------${data[key]}.`);
  }
})();

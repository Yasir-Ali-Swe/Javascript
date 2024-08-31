function displayName() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Yasir Ali");
    }, 2000);
  });
}
displayName().then((data) => {
  console.log(data);
});

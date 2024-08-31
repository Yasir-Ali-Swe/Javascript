function displayName(userName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(userName);
    }, 2000);
  });
}
displayName("Yasir")
  .then((data) => {
    console.log("Fetching userName....");
    console.log(data);
    return displayName("Ali");
  })
  .then((data) => {
    console.log("Fetching userName....");
    console.log(data);
  });

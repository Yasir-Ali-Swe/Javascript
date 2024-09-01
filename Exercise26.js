function fetchData(user) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(user);
    }, 2000);
  });
}
fetchData("Yasir Ali")
  .then((data) => {
    console.log(data);
    return fetchData("Saad Bajwa");
  })
  .then((data) => {
    console.log(data);
  });

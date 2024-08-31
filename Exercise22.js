function displayName() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Yasir Ali");
    }, 2000);
  });
}

async function handlePromise() {
  let data = await displayName();
  console.log(data);
}
handlePromise();

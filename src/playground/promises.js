const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Resolved data");
    reject("Rejected");
  }, 2000);
});

console.log("before");
promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
console.log("after");

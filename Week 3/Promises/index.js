function setTimeOutPromisified(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function callback() {
  console.log("Promise returned after 3 seconds");
}

setTimeOutPromisified(3000).then(callback);

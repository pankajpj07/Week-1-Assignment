/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function delayPromise(seconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
}

function waitOneSecond() {
  return delayPromise(1);
}

function waitTwoSecond() {
  return delayPromise(2);
}

function waitThreeSecond() {
  return delayPromise(3);
}

function calculateTime() {
  console.time("promise-chain");
  waitOneSecond()
    .then(() => waitTwoSecond())
    .then(() => waitThreeSecond())
    .then(() => console.timeEnd("promise-chain"))
    .catch((err) => console.error("Error", err));
}

calculateTime();

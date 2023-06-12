/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
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
  console.time("promise-all");
  Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()])
    .then(() => console.timeEnd("promise-all"))
    .catch((err) => console.error("Error", err));
}

calculateTime();

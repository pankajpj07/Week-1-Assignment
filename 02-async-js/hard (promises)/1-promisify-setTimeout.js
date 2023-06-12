/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

let time = 5;

function wait(n) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), n * 1000);
  });
}

wait(time)
  .then(() => console.log(`${time} seconds has been passed`))
  .catch((error) => console.log("Error:", error));

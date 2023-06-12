/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(milliseconds) {
  const startTime = new Date().getTime();
  let currentTime = startTime;
  while (currentTime - startTime < milliseconds) {
    currentTime = new Date().getTime();
  }
  console.log(`Ran after ${milliseconds / 1000} seconds`);
}
let millisecondsIn1Sec = 1000;
let seconds = 4;
let secondsToMilli = seconds * millisecondsIn1Sec;
sleep(secondsToMilli);

let counter = 1;
const timer = () => {
  console.clear();
  console.log(counter);
  return setTimeout(() => {
    counter++;
    timer();
  }, 1000);
};

timer();
module.exports = timer;

const timer = () => {
  let counter = 1;
  return setInterval(() => {
    console.clear();
    console.log(counter++);
  }, 1000);
};

module.exports = timer;

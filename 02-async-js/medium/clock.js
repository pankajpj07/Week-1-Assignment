const padZero = (n) => (n < 1 || n > 9 ? n : "0" + n);
const clock = () => {
  return setInterval(() => {
    console.clear();
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const formattedTime1 = `${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds
    )}`;

    const amPM = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedTime2 = `${padZero(formattedHours)}:${padZero(
      minutes
    )}:${padZero(seconds)} ${amPM}`;

    console.log(formattedTime1);
    console.log(formattedTime2);
  }, 1000);
};
clock();
module.exports = clock;

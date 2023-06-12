const fs = require("fs");

fs.readFile("../README.md", "utf-8", (err, data) => {
  if (err) {
    console.log("Error:", err);
    return;
  }
  console.log(data);
});
function performExpensiveOperation() {
  let result = 0;

  for (let i = 0; i < 100; i++) {
    result += i;
  }

  return result;
}
console.log(performExpensiveOperation());
console.log("I will run first");

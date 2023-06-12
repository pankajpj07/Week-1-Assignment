const fs = require("fs");

const data = "Hello World!";
fs.writeFile("hello.txt", data, "utf-8", (error) => {
  if (error) {
    console.log("Error:", err);
    return;
  }
  console.log("Data written successfully");
});

const fs = require("fs");

try {
  let data = fs.readFileSync("hello.txt", "utf-8");
  data = data.replace(/\s+/g, " ");
  try {
    fs.writeFileSync("hello.txt", data, "utf-8");
  } catch (err) {
    console.log("Error while writing:", err);
  }
} catch (err) {
  console.log("Error while reading:", err);
}

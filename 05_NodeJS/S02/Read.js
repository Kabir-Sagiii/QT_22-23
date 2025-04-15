const fs = require("fs");

fs.readFile("Home.html", "utf-8", (error, data) => {
  if (error) {
    console.log("failed to read the content");
  } else {
    console.log(data);
  }
});

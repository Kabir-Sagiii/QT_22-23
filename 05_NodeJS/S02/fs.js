const fs = require("fs");

fs.writeFile("demo.txt", "Hello Eng's", (error) => {
  if (error) {
    console.log("Failed to Create File");
  } else {
    console.log("File Created");
  }
});

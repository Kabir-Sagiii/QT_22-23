const fs = require("fs");

fs.appendFile("Demo.txt", "\nSecond line is added", (error) => {
  if (error) {
    console.log("Failed to update");
  } else {
    console.log("Updated the file");
  }
});

const fs = require("fs");

fs.mkdir("nodejs", (error) => {
  if (error) {
    console.log("Failed to create folder");
  } else {
    console.log("Folder Created");
  }
});

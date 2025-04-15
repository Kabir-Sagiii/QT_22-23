var fs = require("fs");
fs.unlink("Home.html", (error) => {
  if (error) {
    console.log("Failed to remove");
  } else {
    console.log("Successfully removed");
  }
});

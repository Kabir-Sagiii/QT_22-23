const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.method);
  if (req.method === "POST") {
    res.setHeader("Access-Control-Allow-Origin", "*");

    req.on("data", (info) => {
      var user = JSON.parse(info);

      fs.readFile("users.json", "utf-8", (error, data) => {
        if (error) {
          res.end(
            JSON.stringify({
              ok: false,
              error: "Failed to Access File data",
            })
          );
        } else {
          const objectUserData = JSON.parse(data);

          objectUserData.usersData.push(user);

          fs.writeFile(
            "users.json",
            JSON.stringify(objectUserData),
            (error) => {
              if (error) {
                res.end(
                  JSON.stringify({
                    ok: false,
                    error: "Failed to insert new data in the file",
                  })
                );
              } else {
                res.end(
                  JSON.stringify({
                    ok: true,
                    result: "User Subscribed successfully",
                  })
                );
              }
            }
          );
        }
      });
    });
  } else {
    res.end("Get Request");
  }
});

server.listen(7373, () => {
  console.log("Server started");
});

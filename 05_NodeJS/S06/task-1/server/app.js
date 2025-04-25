const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (req.url === "/") {
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
  } else if (req.url === "/login") {
    req.on("data", (userdata) => {
      var userObject = JSON.parse(userdata);
      fs.readFile("users.json", "utf-8", (error, data) => {
        if (error) {
          res.end(
            JSON.stringify({
              ok: false,
              error: error,
            })
          );
        } else {
          var { usersData } = JSON.parse(data);
          var filteredArray = usersData.filter((user) => {
            return (
              user.email === userObject.email &&
              user.password === userObject.password
            );
          });

          if (filteredArray.length === 0) {
            res.end(
              JSON.stringify({
                ok: false,
                error: "Invalid User",
              })
            );
          } else {
            res.end(
              JSON.stringify({
                ok: true,
                result: "Valid User",
              })
            );
          }
        }
      });
    });
  }
});

server.listen(7373, () => {
  console.log("Server started");
});

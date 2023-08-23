// const fs = require("fs");

// // fs.writeFileSync("hello-file.txt", "HI, I am  Kuldeep");
// fs.writeFile("hell.txt", "HI, I am  Kuldeep", (err) => {
//   if (err) {
//     console.error("Error writing to file:", err);
//   } else {
//     console.log("File has been written successfully!");
//   }
// });
// console.log("check the nodemon");

// const http = require("http");
// const server = http.createServer((req, res) => {
//     console.log("request");
//     res.write("<h1>Learning Nodejs</h1>")
//     res.end();
//     // process.exit();
// });

// server.listen(3000);

// TODO:-----------------ExpressJs----------------
const express = require("express");

const app = express();
// console.log(app);
app.get("/", (req, res) => {
  //requesting data from client
  console.log("data sent by browser", req.query.st);

  res.send(`<h1>HI its a root url</h1> <a href="/json">JSON DATA</a> <i>${req.query.name}</i>`);
});
app.get("/array", (req, res) => {
  res.send([
    23,
    "sdfs,sdfsdf",
    { name: "Ksk", age: 24, email: "jksndc@gmail" },
  ]);
});
app.get("/input", (req, res) => {
  res.send(`<label>Name:</label><input type="text" placeholder="Name" />`);
});
app.get("/json", (req, res) => {
  res.send(`{ name: "Ksk", age: 24, email: "jksndc@gmail" } <a href="/">Home Page</a>`);
});

app.listen(2000);

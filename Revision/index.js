//TODO:Basic How to create Server

// const http = require("http");
// function request(req,res) {
//     res.write("Hi I am Kuldeep!!");
//     res.end();
// }
// const server1 = http.createServer(request);
// server.listen(2000);

//TODO:Other Example

// const data = require("./data");
// const http = require("http");

// function request(req, res) {
//     res.writeHead(201, { 'Content-type': "application/json" });
//     res.write(JSON.stringify(data));
//     res.end();
// }
// const server = http.createServer(request);
// server.listen(2000);

//TODO: ROUTING IN EXPRESSjS

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>HI this Is Root routes</h1>`);
});
app.get("/Home", (req, res) => {
  res.send(`<h1>HI this Is Home routes</h1> { name: "ksk", age: 23 }`);
});
app.get("/About", (req, res) => {
  res.send(
    `<h1>HI this Is About routes</h1>  [
    { name: "ksk", age: 23 },
    { name: "ksk", age: 23 },
    { name: "ksk", age: 23 },
    { name: "ksk", age: 23 },
]`
  );
});
app.get("/Contact", (req, res) => {
  res.send(`<h1>HI this Is Contact routes</h1> ${`<b>ksk@gmail.com</b>`}`);
});

app.listen(1000);
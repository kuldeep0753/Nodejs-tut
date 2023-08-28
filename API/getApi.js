const express = require("express");
const dbConnect = require("../mongoDb/mongodb");
const app = express();

app.get("/", async (req, res) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data);
  res.send(data);
});

app.post("/", (req, res) => {
  res.send({name:"kuldeep",class:"lti",sal:34454});
});
app.listen(5000);

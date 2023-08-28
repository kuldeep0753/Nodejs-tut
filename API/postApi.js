const express = require("express");
const dbConnect = require("../mongoDb/mongodb");
const app = express();

app.post("/", (req, res) => {
  res.send({name:"kuldeep",class:"lti",sal:34454,age:23});
});

app.listen(5000);




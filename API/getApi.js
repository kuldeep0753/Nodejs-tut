const express = require("express");
const dbConnect = require("../mongoDb/mongodb");
const app = express();
const mongodb = require("mongodb");

//middleware
app.use(express.json());

app.get("/", async (req, res) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  // console.log(data);
  res.send(data);
});

app.post("/", async (req, res) => {
  const db = await dbConnect();
  //in case of many send data in array format from postman
  const result = await db.insertMany(req.body);
  console.log(req.body);
  res.send(result);
});

app.put("/:name",async (req, res) => {
  const db = await dbConnect();
 const result = await db.updateOne({ name: req.params.name }, { $set: req.body });
  console.log(req.body);
  res.send({
    result:"update"})
})

app.delete("/:id",async (req, res) => {
  const db = await dbConnect();
 const result =await db.deleteOne({ _id: new mongodb.ObjectId(req.params.id)  });
  console.log(req.params.id);
  res.send(result);

})

app.listen(5000);

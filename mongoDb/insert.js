const dbConnect = require("./mongodb");

const insertData = async () => {
    const db = await dbConnect();
    const result=await db.insertMany([{  "name": "A",
  "age": 47,
        "comapny": "Army"
    },{  "name": "B",
  "age": 47,
        "comapny": "Army"
    },{  "name": "C",
  "age": 47,
        "comapny": "Army"
    }])
    console.log(result);
}
insertData();
const dbConnect = require("./mongodb");

const updateData = async () => {
    const db = await dbConnect();
    const result = await db.updateMany({ name: "A" }, { $set: { name: "Shivaji", age: 98 } });
    console.log(result);
}
updateData();
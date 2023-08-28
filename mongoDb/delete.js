const dbConnect = require("./mongodb");

const deleteData = async () => {
    
    const db = await dbConnect();
    const result=await db.deleteOne({name:"C"})
    console.log(result);
    if (result.deletedCount > 0) {
        console.log("Data deleted successfully")
    }
    else (
         console.log("No Data found for delete")
    )
}
deleteData();
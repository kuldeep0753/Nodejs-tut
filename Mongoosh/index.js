const mongoose = require("mongoose");

const main =async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/e-comm");
    const ProductSchema = new mongoose.Schema({
        name: String,
        age:Number
    });

    const ProductsModel = mongoose.model("products", ProductSchema);
    const data = new ProductsModel({ name: "ksk",age:23 });
    const result = await data.save();
    console.log(result);
}
main()
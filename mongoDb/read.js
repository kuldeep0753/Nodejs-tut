const dbConnect = require("./mongodb");

//1st way to call dbConnect
// dbConnect();
// console.log(dbConnect());
// dbConnect().then((res) => {
//   res
//     .find()
//     .toArray()
//     .then((data) => console.log(data));
// });

//2nd way to call dbConnect
const main =async () => {
  let data =await dbConnect();
  data = await data.find().toArray();
  console.log(data);
}
main();
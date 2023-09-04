const express = require("express");
const path = require("path");
console.log("Checking current path--->",__dirname);

const app = express();
const publicPath = path.join(__dirname, 'public');
console.log(publicPath);

app.use(express.static(publicPath));
app.listen(2000);

//TODO:---------------REmove extension from URL-------->
// const express = require("express");
// const path = require("path");

// const app = express();
// const publicPath = path.join(__dirname, "public");

// app.set("view engine", "ejs");

// app.get("/profile", (req, res) => {
//   const user = {
//     name: "kuldee",
//     email: "ishdhedf@hgjrkgjk",
//     age: 45,
//     skills: [23, "java", "js", "c++"],
//   };
//   res.render("profile", { user });
// });

// app.get("/login", (req, res) => {
//   res.render("login");
// });

// // app.get("/profile", (req, res) => {
// //   res.sendFile(`${publicPath}/index.html`);
// // });

// app.get("/about", (req, res) => {
//   res.sendFile(`${publicPath}/about.html`);
// });

// app.get("/homepage", (req, res) => {
//   res.sendFile(`${publicPath}/home.html`);
// });

// app.get("*", (req, res) => {
//   res.sendFile(`${publicPath}/notFound.html`);
// });

// app.listen(2000);

//TODO:---------------Middleware-------->
// const express = require("express");
// const path = require("path");

// const app = express();
// const reqFilter = (req,res,next) => {
//     if (!req.query.age) {
//         res.send("Please Provide the AGE!!")
//     }
//     else if(req.query.age <18) {
//         res.send("You not access the page")
//     }
//     else {
//         next()
//     }
// }

// app.use(reqFilter);

// app.get('/', (req, res) => {
//     res.send("Welcome to middleware")
// });
// app.get('/user', (req, res) => {
//     res.send("Welcome to middleware")
// });

// app.listen(2000);

//TODO:<-----------Single level Middleware-------------->

// const express = require("express");
// const path = require("path");
// const reqFilter = require("./middleware");
// const app = express();
// const route = express.Router();

// route.use(reqFilter);

// app.get("/", (req, res) => {
//   res.send("Welcome to root middleware");
// });
// app.get("/user", reqFilter, (req, res) => {
//   res.send("Welcome to user middleware");
// });
// app.get("/check", (req, res) => {
//   res.send("Welcome to check middleware");
// });
// app.get("/contact", (req, res) => {
//   res.send("Welcome to contact middleware");
// });
// route.get("/check1", (req, res) => {
//   res.send("Welcome to check1 middleware");
// });
// route.get("/check2", (req, res) => {
//   res.send("Welcome to check2 middleware");
// });

// app.use("/", route);

// app.listen(2000);
//TODO:<-----------Connect mongoDB with Node-------------->

//imports the MongoClient class from the 'mongodb' package
// const dbConnect = require("./mongoDb/mongodb");

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
// const main =async () => {
//   let data =await dbConnect();
//   data = await data.find().toArray();
//   console.log(data);
// }
// main();
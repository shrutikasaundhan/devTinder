const express = require('express');
const connectDB = require("./config/database");

const app = express();

const User=require("./models/user")

// app.use("/",(req,res)=>{
//     res.send("hello from the server");
// });

// app.use("/user",(req,res)=>{
//     res.send("HAHAHAAAAHAAA");
// });


// // req/user , /user/xyz , /user/123
// app.get("/user",(req,res)=>{
//     res.send({
//         firstname:"Akshay",
//         "lastname":"Saini"
//     });
// })


// app.post("/user",(req,res)=>{
//    res.send("Data succesfully saved to the database!");
// })
// // this will match all the HTTP method API calls to /test
// app.use("/test",(req,res)=>{
//     res.send("hello from the server");
// });

// app.delete("/user",(req,res)=>{
//     res.send("deleted successfully");
// })



app.post("/signup", async (req, res) => {
    const userObj = {
        firstName: "Akshay",
        lastName: "Saini",
        emailId: "shrutigupta1907@gmail.com",
        password: "akshay@123"
    };

    try {
        const user = new User(userObj);
        await user.save();
        res.send("User added successfully!");
    } catch (err) {
        res.status(400).send("Error saving user: " + err.message);
    }
});

connectDB()
    .then(() => {
        console.log("Database connection established...");
        app.listen(3000, () => {
            console.log("The server is running on port 3000");
        });
    })
    .catch((err) => {
        console.error("Database cannot be established:", err);
    });


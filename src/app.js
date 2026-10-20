const express= require('express');


const app= express();

// app.use("/",(req,res)=>{
//     res.send("hello from the server");
// });

app.use("/user",(req,res)=>{
    res.send("HAHAHAAAAHAAA");
});

app.get("/user",(req,res)=>{
    res.send({
        firstname:"Akshay",
        "lastname":"Saini"
    });
})


app.post("/user",(req,res)=>{
   res.send("Data succesfully saved to the database!");
})
// this will match all the HTTP method API calls to /test
app.use("/test",(req,res)=>{
    res.send("hello from the server");
});

app.delete("/user",(req,res)=>{
    res.send("deleted successfully");
})


app.listen(3000,()=>{
    console.log("the server is running on 3000");
});

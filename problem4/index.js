const express = require("express")
const mongoose = require("mongoose")
const app = express()
app.listen(4000,()=>{
    console.log("[server]:server is running ")
    connectdb()
})


async function connectdb(){
    try{
        await mongoose.connect("mongodb+srv://surajbakchi:suraj123@cluster0.eo07s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("connected to db")

    }
    catch(err){
        console.log("there is some error",err)

    }
}

app.get("/",(req,res)=>{
    res.send("welcome")

})

app.post("/products",(req,res)=>{
    const {name,desc,price}=req.body
})

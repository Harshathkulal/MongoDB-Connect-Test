const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const InputModel = require("./model.js")

const PORT=3001;

const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/input");

app.post('./index.html',(req,res)=>{
    InputModel.create(req.body)
    console.log(req.body)
    .then(input=>res.json(input))
    .catch(err=>res.json(err))


})

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
})
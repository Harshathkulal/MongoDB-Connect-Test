const mongoose=require("mongoose");

const InputSchema = new mongoose.Schema({
    text:String,
})

const InputModel = mongoose.model("input",InputSchema)

module.export = InputModel
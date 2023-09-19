const mongoose=require("mongoose");

const InputSchema = new mongoose.Schema({
    name:String,
})

const InputModel = mongoose.model("input",InputSchema)

module.export = InputModel
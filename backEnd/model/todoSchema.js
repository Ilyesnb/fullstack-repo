const mongoose = require("mongoose")
const todoList = mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
})
const todo = mongoose.model("todo",todoList)
module.exports= todo

const mongoose = require("mongoose")

const todoList = mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
})
const Todo = mongoose.model("todo",todoList)
module.exports= Todo

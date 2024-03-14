const todo = require("../model/todoSchema")
const getTodos = (req, res) => {
    todo
      .find()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log({ err: "can not get " });
      });
  }
  const  addTodo = (req,res)=>{
    const todoPost = new todo(req.body)
    todoPost
    .save()
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        console.log({err:"cannot add"})
    })
}
const updateTodo = (req,res)=>{
  const id = req.params.id
  const updateTodo = req.body
  todo
  .findByIdAndUpdate(id,updateTodo,{new:true})
  .then((result)=>{
      res.json(result)
  })
  .catch((err)=>{
      console.log({err:"can not update the data"});
  })
}
const deleteTodo =(req,res)=>{
  const id = req.params.id
  todo
  .findByIdAndDelete(id)
  .then((result)=>{
      res.json(result)
  })
  .catch((err)=>{
      console.log({err:"can not delete the data"});
  })
}
  module.exports = {
    getTodos,
    addTodo,
    updateTodo,
    deleteTodo,

  }
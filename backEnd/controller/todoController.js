const Todo = require("../model/todoSchema")

const getTodos = (req, res) => {
    Todo
      .find()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log({ err: "can not get the database " });
      });
  }
  //get a single todo by its
  const  addTodo = (req,res)=>{
    const todoPost = new Todo(req.body)
    todoPost
    .save()
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        console.log({err:"cannot add"})
    })
}
//update todos
const updateTodo = (req,res)=>{
  const id = req.params.id
  const updateTodo = req.body
  Todo
  .findByIdAndUpdate(id,updateTodo,{new:true})
  .then((result)=>{
      res.json(result)
  })
  .catch((err)=>{
      console.log({err:"can not update the data"});
  })
}
//delete todos
const deleteTodo =(req,res)=>{
  const id = req.params.id
  Todo
  .findByIdAndDelete(id)
  .then((result)=>{
      res.json({ message: 'Todo deleted successfully' });
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
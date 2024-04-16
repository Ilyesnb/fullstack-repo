const express = require("express");
const router = express.Router();
const todoController = require("../controller/todoController")
// get all todos
router.get("/todoList", todoController.getTodos);
// add a new todo
router.post("/todoList/create",todoController.addTodo)
// update status of the todo
router.put("/todoList/:id",todoController.updateTodo)
// delete a todo by id
router.delete("/todoList/:id",todoController.deleteTodo)
module.exports = router;

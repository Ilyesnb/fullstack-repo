const express = require("express");
const router = express.Router();
const todoController = require("../controller/todoController")

router.get("/todoList", todoController.getTodos);
router.post("/todoList/create",todoController.addTodo)
router.put("/todoList/:id",todoController.updateTodo)
router.delete("/todoList/:id",todoController.deleteTodo)
module.exports = router;

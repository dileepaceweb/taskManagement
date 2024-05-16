const express = require("express");
const router = express.Router();
const { createTask, getTask, updateTask, searchTask, deleteTask } = require("../controller/taskController");

router.post("/createTask", createTask);
router.get("/getTask",getTask);
router.put("/updateTask/:id",updateTask);
router.get("/searchTask",searchTask);
router.delete("/deleteTask/:id",deleteTask);

module.exports = router;

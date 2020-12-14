import { Router } from "express"
import { getTodos, createTodo, updateTodo, deleteTodo } from "../controllers/todos"

const router: Router = Router();

router.get("/todos", getTodos);
router.post("/todo", createTodo);
router.put("/todo/:id", updateTodo);
router.delete("/todo/:id", deleteTodo);

export default router
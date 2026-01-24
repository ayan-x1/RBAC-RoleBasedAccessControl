/*import express from "express";
import authMiddleware from "../middlewares/authmiddleware.js";
import checkPermission from "../middlewares/rbacmiddleware.js";
import { createTask } from "../controllers/task.js";

const router = express.Router();

router.post(
  "/create",
  authMiddleware,
  checkPermission("CREATE_TASK"),
  createTask
);

export default router;*/


// import express from "express";
// import authMiddleware from "../middlewares/authmiddleware.js";
// import checkPermission from "../middlewares/rbacmiddleware.js";
// import {
//   createTask,
//   updateTask,
//   deleteTask,
//   getMyTasks
// } from "../controllers/task.js";

// const router = express.Router();

// /* =========================
//    MANAGER ROUTES
// ========================= */

// // Create task
// router.post(
//   "/",
//   authMiddleware,
//   checkPermission("CREATE_TASK"),
//   createTask
// );

// // Update task
// router.put(
//   "/:id",
//   authMiddleware,
//   checkPermission("EDIT_TASK"),
//   updateTask
// );

// // Delete task
// router.delete(
//   "/:id",
//   authMiddleware,
//   checkPermission("DELETE_TASK"),
//   deleteTask
// );

// /* =========================
//    EMPLOYEE ROUTE  ✅ STEP 9
// ========================= */

// // View own tasks
// router.get(
//   "/my-tasks",
//   authMiddleware,
//   checkPermission("VIEW_TASKS"),
//   getMyTasks
// );

// export default router;


import express from "express";
import authMiddleware from "../middlewares/authmiddleware.js";
import checkPermission from "../middlewares/rbacmiddleware.js";
import {
  createTask,
  getAllTasks,
  getMyTasks,
  updateTask,
  deleteTask,
  getTaskStats
} from "../controllers/task.js";

const router = express.Router();

/* ADMIN / MANAGER */
router.post("/", authMiddleware, checkPermission("CREATE_TASK"), createTask);
router.get("/", authMiddleware, checkPermission("VIEW_TASKS"), getAllTasks);
router.put("/:id", authMiddleware, checkPermission("EDIT_TASK"), updateTask);
router.delete("/:id", authMiddleware, checkPermission("DELETE_TASK"), deleteTask);

/* EMPLOYEE */
router.get("/my", authMiddleware, checkPermission("VIEW_TASKS"), getMyTasks);

/* DASHBOARD */
router.get("/stats", authMiddleware, checkPermission("VIEW_TASKS"), getTaskStats);

export default router;

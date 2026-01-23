//import Task from "../models/task.js";
/*import db from "../models/index.js";
const { Task } = db;

const createTask = async (req, res) => {
  try {
    const { title, description, assignedTo } = req.body;

    const task = await Task.create({
      title,
      description,
      assignedTo
    });

    res.status(201).json({ message: "Task created", task });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createTask };*/


// import db from "../models/index.js";

// const { Task } = db;

// /* =========================
//    MANAGER: CREATE TASK
// ========================= */
// export const createTask = async (req, res) => {
//   try {
//     const { title, description, assignedTo } = req.body;

//     const task = await Task.create({
//       title,
//       description,
//       assignedTo,
//       createdBy: req.user.id
//     });

//     res.status(201).json({
//       message: "Task created successfully",
//       task
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// /* =========================
//    MANAGER: UPDATE TASK
// ========================= */
// export const updateTask = async (req, res) => {
//   try {
//     const { id } = req.params;

//     await Task.update(req.body, {
//       where: { id }
//     });

//     res.json({ message: "Task updated successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// /* =========================
//    MANAGER: DELETE TASK
// ========================= */
// export const deleteTask = async (req, res) => {
//   try {
//     const { id } = req.params;

//     await Task.destroy({ where: { id } });

//     res.json({ message: "Task deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// /* =========================
//    EMPLOYEE: VIEW OWN TASKS  ✅ STEP 9
// ========================= */
// export const getMyTasks = async (req, res) => {
//   try {
//     const tasks = await Task.findAll({
//       where: { assignedTo: req.user.id }
//     });

//     res.json(tasks);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


import db from "../models/index.js";
const { Task, User } = db;

/* =========================
   ADMIN / MANAGER: CREATE TASK
========================= */
export const createTask = async (req, res) => {
  try {
    const { title, description, assignedTo } = req.body;

    const task = await Task.create({
      title,
      description,
      assignedTo,
      createdBy: req.user.id
    });

    res.status(201).json({
      message: "Task created successfully",
      task
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* =========================
   ADMIN / MANAGER: VIEW ALL TASKS
========================= */
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({
      include: {
        model: User,
        as: "assignee",
        attributes: ["id", "name", "email"]
      }
    });

    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* =========================
   EMPLOYEE: VIEW OWN TASKS
========================= */
export const getMyTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({
      where: { assignedTo: req.user.id }
    });

    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* =========================
   MANAGER: UPDATE TASK
========================= */
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;

    await Task.update(req.body, { where: { id } });

    res.json({ message: "Task updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* =========================
   MANAGER: DELETE TASK
========================= */
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    await Task.destroy({ where: { id } });

    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* =========================
   DASHBOARD: TASK STATS
========================= */
export const getTaskStats = async (req, res) => {
  try {
    const total = await Task.count();
    const pending = await Task.count({ where: { status: "PENDING" } });
    const completed = await Task.count({ where: { status: "COMPLETED" } });

    res.json({ total, pending, completed });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

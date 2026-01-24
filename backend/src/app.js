/*import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import taskRoutes from "./routes/task.js";
import roleRoutes from "./routes/role.js";
import roleRoutes from "./routes/admin.js";
//import taskRoutes from "./routes/task.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/roles", roleRoutes);
app.use("/api/admin", adminRoutes);
//app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.json({ message: "RBAC Backend is running" });
});


export default app;*/

import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import taskRoutes from "./routes/task.js";
import roleRoutes from "./routes/role.js";
import adminRoutes from "./routes/admin.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/roles", roleRoutes);
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
  res.json({ message: "RBAC Backend is running" });
});

export default app;

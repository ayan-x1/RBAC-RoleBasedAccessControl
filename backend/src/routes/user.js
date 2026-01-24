import express from "express";
import authMiddleware from "../middlewares/authmiddleware.js";
import checkPermission from "../middlewares/rbacmiddleware.js";
import { assignRoleToUser, getAllUsers } from "../controllers/user.js";

const router = express.Router();

router.get(
  "/",
  authMiddleware,
  checkPermission("VIEW_USERS"),
  getAllUsers
);

router.post(
  "/assign-role",
  authMiddleware,
  checkPermission("ASSIGN_ROLE"),
  assignRoleToUser
);

export default router;

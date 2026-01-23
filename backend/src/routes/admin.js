import express from "express";
import authMiddleware from "../middlewares/authmiddleware.js";
import checkPermission from "../middlewares/rbacmiddleware.js";
import { getAdminStats } from "../controllers/admin.js";

const router = express.Router();

router.get(
  "/stats",
  authMiddleware,
  checkPermission("CREATE_ROLE"),
  getAdminStats
);

export default router;

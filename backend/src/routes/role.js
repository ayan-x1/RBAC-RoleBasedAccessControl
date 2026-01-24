/*const router = require("express").Router();
const auth = require("../middlewares/authmiddleware");
const checkPermission = require("../middlewares/rbacmiddleware");
const { createRole } = require("../controllers/role");

router.post(
  "/",
  auth,
  checkPermission("CREATE_ROLE"),
  createRole
);

module.exports = router;*/


import express from "express";
import authMiddleware from "../middlewares/authmiddleware.js";
import checkPermission from "../middlewares/rbacmiddleware.js";
import { createRole } from "../controllers/role.js";

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  checkPermission("CREATE_ROLE"),
  createRole
);

export default router;   // ✅ THIS LINE FIXES EVERYTHING


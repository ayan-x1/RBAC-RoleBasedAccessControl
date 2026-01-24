//const { Role, Permission } = require("../models");
import db from "../models/index.js";
const { Role, Permission } = db;

exports.assignPermission = async (req, res) => {
  const { roleId, permissionId } = req.body;

  const role = await Role.findByPk(roleId);
  const permission = await Permission.findByPk(permissionId);

  await role.addPermission(permission);

  res.json({ message: "Permission assigned to role" });
};

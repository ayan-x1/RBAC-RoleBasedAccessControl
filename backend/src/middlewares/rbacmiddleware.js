//const { Role, Permission } = require("../models");
/*import db from "../models/index.js";
const { Role, Permission } = db;

module.exports = (permissionName) => {
  return async (req, res, next) => {
    const role = await Role.findByPk(req.user.roleId, {
      include: Permission
    });

    const hasPermission = role.Permissions.some(
      (p) => p.name === permissionName
    );

    if (!hasPermission) {
      return res.status(403).json({ message: "Access denied" });
    }

    next();
  };
};*/


/*import db from "../models/index.js";
const { Role, Permission } = db;

const checkPermission = (permissionName) => {
  return async (req, res, next) => {
    const role = await Role.findByPk(req.user.roleId, {
      include: Permission
    });

    const hasPermission = role.Permissions.some(
      (p) => p.name === permissionName
    );

    if (!hasPermission) {
      return res.status(403).json({ message: "Access denied" });
    }

    next();
  };
};

export default checkPermission;*/


import db from "../models/index.js";
const { Role, Permission } = db;

const checkPermission = (permissionName) => {
  return async (req, res, next) => {
    const role = await Role.findByPk(req.user.roleId, {
      include: Permission
    });

    if (!role) {
      return res.status(403).json({ message: "Role not found" });
    }

    if (!role.Permissions || role.Permissions.length === 0) {
      return res.status(403).json({ message: "No permissions assigned" });
    }

    const hasPermission = role.Permissions.some(
      (p) => p.name === permissionName
    );

    if (!hasPermission) {
      return res.status(403).json({ message: "Access denied" });
    }

    next();
  };
};

export default checkPermission;

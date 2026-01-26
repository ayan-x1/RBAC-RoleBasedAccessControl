/*import Sequelize from "sequelize";
import { createRequire } from "module";
import config from "../config/config.js";

const require = createRequire(import.meta.url);

// Load CommonJS models
const UserModel = require("./user.js");
const RoleModel = require("./role.js");
const PermissionModel = require("./permission.js");
const RolePermissionModel = require("./rolepermission.js");
const TaskModel = require("./task.js");

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// Initialize models
const User = UserModel(sequelize, Sequelize.DataTypes);
const Role = RoleModel(sequelize, Sequelize.DataTypes);
const Permission = PermissionModel(sequelize, Sequelize.DataTypes);
const RolePermission = RolePermissionModel(sequelize, Sequelize.DataTypes);
const Task = TaskModel(sequelize, Sequelize.DataTypes);

const db = {
  sequelize,
  Sequelize,
  User,
  Role,
  Permission,
  RolePermission,
  Task
};

// Run associations
Object.values(db).forEach((model) => {
  if (model?.associate) {
    model.associate(db);
  }
});

export default db;*/


/*import Sequelize from "sequelize";
import config from "../config/config.js";

import UserModel from "./user.js";
import RoleModel from "./role.js";
import PermissionModel from "./permission.js";
import RolePermissionModel from "./rolepermission.js";
import TaskModel from "./task.js";

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const User = UserModel(sequelize, Sequelize.DataTypes);
const Role = RoleModel(sequelize, Sequelize.DataTypes);
const Permission = PermissionModel(sequelize, Sequelize.DataTypes);
const RolePermission = RolePermissionModel(sequelize, Sequelize.DataTypes);
const Task = TaskModel(sequelize, Sequelize.DataTypes);

const db = {
  sequelize,
  Sequelize,
  User,
  Role,
  Permission,
  RolePermission,
  Task
};

Object.values(db).forEach((model) => {
  if (model?.associate) {
    model.associate(db);
  }
});

export default db;*/

// changes made by - Ayan


// import Sequelize from "sequelize";
// import config from "../config/config.js";

// import UserModel from "./user.js";
// import RoleModel from "./role.js";
// import PermissionModel from "./permission.js";
// import RolePermissionModel from "./rolepermission.js";
// import TaskModel from "./task.js";

// const sequelize = new Sequelize(
//   config.database,
//   config.username,
//   config.password,
//   config
// );

// const db = {};

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// db.User = UserModel(sequelize, Sequelize.DataTypes);
// db.Role = RoleModel(sequelize, Sequelize.DataTypes);
// db.Permission = PermissionModel(sequelize, Sequelize.DataTypes);
// db.RolePermission = RolePermissionModel(sequelize, Sequelize.DataTypes);
// db.Task = TaskModel(sequelize, Sequelize.DataTypes);

// /* 🔑 RUN ASSOCIATIONS */
// Object.values(db).forEach((model) => {
//   if (model.associate) {
//     model.associate(db);
//   }
// });

// export default db;

import Sequelize from "sequelize";
import { sequelize } from "../config/database.js";

import UserModel from "./user.js";
import RoleModel from "./role.js";
import PermissionModel from "./permission.js";
import RolePermissionModel from "./rolepermission.js";
import TaskModel from "./task.js";

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = UserModel(sequelize, Sequelize.DataTypes);
db.Role = RoleModel(sequelize, Sequelize.DataTypes);
db.Permission = PermissionModel(sequelize, Sequelize.DataTypes);
db.RolePermission = RolePermissionModel(sequelize, Sequelize.DataTypes);
db.Task = TaskModel(sequelize, Sequelize.DataTypes);

/* 🔑 RUN ASSOCIATIONS */
Object.values(db).forEach((model) => {
  if (model.associate) {
    model.associate(db);
  }
});

export default db;

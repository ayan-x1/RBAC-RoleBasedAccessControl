// changes made by - Ayan

// //import User from "../models/user.js";
// //import Role from "../models/role.js";
// import { hashPassword, comparePassword } from "../utils/bcrypt.js";
// import { generateToken } from "../utils/jwt.js";
// import db from "../models/index.js";
// const { User, Role } = db;

// const registerUser = async ({ name, email, password }) => {
//   // Check if user already exists
//   const existingUser = await User.findOne({ where: { email } });
//   if (existingUser) {
//     throw new Error("User already exists with this email");
//   }

//   const hashedPassword = await hashPassword(password);

//   const employeeRole = await Role.findOne({
//     where: { name: "EMPLOYEE" }
//   });

//   /*const userCount = await User.count();

//   let role;
//   if (userCount === 0) {
//     role = await Role.findOne({ where: { name: "ADMIN" } });
//   } else {
//     role = await Role.findOne({ where: { name: "EMPLOYEE" } });
//   }*/



//   const user = await User.create({
//     name,
//     email,
//     password: hashedPassword,
//     roleId: employeeRole.id
//   });

//   return user;
// };

// const loginUser = async ({ email, password }) => {
//   const user = await User.findOne({ where: { email } });
//   if (!user) {
//     throw new Error("Invalid email or password");
//   }

//   const isMatch = await comparePassword(password, user.password);
//   if (!isMatch) {
//     throw new Error("Invalid email or password");
//   }

//   if (!user.roleId) {
//   throw new Error("User has no role assigned");
// }


//   const token = generateToken({
//     id: user.id,
//     email: user.email,
//     roleId: user.roleId
//   });
//   return {
//     token,
//     user: {
//       id: user.id,
//       name: user.name,
//       email: user.email,
//     },
//   };
// };

// export { registerUser, loginUser };

import { hashPassword, comparePassword } from "../utils/bcrypt.js";
import { generateToken } from "../utils/jwt.js";
import db from "../models/index.js";

const { User, Role } = db;

/* =========================
   REGISTER USER
========================= */

const registerUser = async ({ name, email, password }) => {

  // 1. Check if user already exists
  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    throw new Error("User already exists with this email");
  }

  // 2. Hash password
  const hashedPassword = await hashPassword(password);

  // 3. Get default USER role
  const role = await Role.findOne({
    where: { name: "user" }
  });

  if (!role) {
    throw new Error("Default role 'user' not found in database");
  }

  // 4. Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    roleId: role.id
  });

  return user;
};

/* =========================
   LOGIN USER
========================= */

const loginUser = async ({ email, password }) => {

  // 1. Find user
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw new Error("Invalid email or password");
  }

  // 2. Compare password
  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid email or password");
  }

  // 3. Validate role
  const role = await Role.findByPk(user.roleId);
  if (!role) {
    throw new Error("User role does not exist");
  }

  // 4. Generate token
  const token = generateToken({
    id: user.id,
    email: user.email,
    roleId: role.id
  });

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email
    }
  };
};

export { registerUser, loginUser };
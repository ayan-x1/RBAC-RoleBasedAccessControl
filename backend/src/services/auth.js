//import User from "../models/user.js";
//import Role from "../models/role.js";
import { hashPassword, comparePassword } from "../utils/bcrypt.js";
import { generateToken } from "../utils/jwt.js";
import db from "../models/index.js";
const { User, Role } = db;

const registerUser = async ({ name, email, password }) => {
  // Check if user already exists
  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    throw new Error("User already exists with this email");
  }

  const hashedPassword = await hashPassword(password);

  const employeeRole = await Role.findOne({
    where: { name: "EMPLOYEE" }
  });

  /*const userCount = await User.count();

  let role;
  if (userCount === 0) {
    role = await Role.findOne({ where: { name: "ADMIN" } });
  } else {
    role = await Role.findOne({ where: { name: "EMPLOYEE" } });
  }*/



  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    roleId: employeeRole.id
  });

  return user;
};

const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid email or password");
  }

  if (!user.roleId) {
  throw new Error("User has no role assigned");
}


  const token = generateToken({
    id: user.id,
    email: user.email,
    roleId: user.roleId
  });
  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  };
};

export { registerUser, loginUser };
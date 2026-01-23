import db from "../models/index.js";
const { User } = db;

export const getEmployees = async (req, res) => {
  const employees = await User.findAll({
    where: { roleId: 3 },
    attributes: ["id", "name", "email"]
  });

  res.json(employees);
};

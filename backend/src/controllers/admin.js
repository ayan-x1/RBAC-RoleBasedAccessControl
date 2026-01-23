import db from "../models/index.js";
const { User } = db;

export const getAdminStats = async (req, res) => {
  const managers = await User.count({ where: { roleId: 2 } });
  const employees = await User.count({ where: { roleId: 3 } });

  res.json({
    managers,
    employees
  });
};

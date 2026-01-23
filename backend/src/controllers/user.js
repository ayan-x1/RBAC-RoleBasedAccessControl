//import User from "../models/user.js";
import db from "../models/index.js";
const { User, Role } = db;

const assignRoleToUser = async (req, res) => {
  try {
    const { userId, roleId } = req.body;

    await User.update(
      { roleId },
      { where: { id: userId } }
    );

    res.json({ message: "Role assigned successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "name", "email", "roleId"],
      include: {
        model: Role,
        attributes: ["name"]
      }
    });

    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { assignRoleToUser };

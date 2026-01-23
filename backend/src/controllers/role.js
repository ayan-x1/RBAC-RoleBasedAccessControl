/*import db from "../models/index.js";
const { Role } = db;


exports.createRole = async (req, res) => {
  const role = await Role.create({ name: req.body.name });
  res.json({ message: "Role created", role });
};*/

import db from "../models/index.js";
const { Role } = db;

const createRole = async (req, res) => {
  try {
    const role = await Role.create({ name: req.body.name });
    res.status(201).json({ message: "Role created", role });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export { createRole };


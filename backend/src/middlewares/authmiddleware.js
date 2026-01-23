/*const jwt = require("../utils/jwt");

module.exports = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token missing" });
  }

  try {
    const decoded = jwt.verifyToken(token);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};*/

//import jwt from "../utils/jwt.js";
/*import { verifyToken } from "../utils/jwt.js";


const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token missing" });
  }

  try {
    const decoded = jwt.verifyToken(token);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

export default authMiddleware;*/


import { verifyToken } from "../utils/jwt.js";

const authMiddleware = (req, res, next) => {
  console.log("AUTH HEADER:", req.headers.authorization);

  const token = req.headers.authorization?.split(" ")[1];
  console.log("EXTRACTED TOKEN:", token);

  if (!token) {
    return res.status(401).json({ message: "Token missing" });
  }

  try {
    const decoded = verifyToken(token);
    console.log("DECODED TOKEN:", decoded);
    req.user = decoded;
    next();
  } catch (err) {
    console.error("JWT ERROR:", err.message);
    res.status(401).json({ message: "Invalid token" });
  }
};

export default authMiddleware;

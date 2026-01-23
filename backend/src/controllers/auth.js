import { registerValidation, loginValidation } from "../validations/auth_validation.js";
import { registerUser, loginUser } from "../services/auth.js";

const register = async (req, res) => {
  try {
    // Validate request body
    const { error } = registerValidation(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const user = await registerUser(req.body);

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { error } = loginValidation(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const data = await loginUser(req.body);

    res.status(200).json({
      message: "Login successful",
      token: data.token,
      user: data.user,
    });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

export { register, login };
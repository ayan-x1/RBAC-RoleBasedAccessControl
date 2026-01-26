import "dotenv/config";
import app from "./app.js";
import { connectDB, sequelize } from "./config/database.js";
import "./models/user.js";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();

  await sequelize.sync({ force: false });
  console.log("Database synced");

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
import jwt from "jsonwebtoken";
import User from "../models/User.model.js";
import config from "../config/config.js";

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      error = new Error("Unauthorized - No token provided");
      error.statusCode = 401;
      throw error;
    }

    token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, config.JWT_SECRET);

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      error = new Error("Unauthorized - User not found");
      error.statusCode = 401;
      throw error;
    }

    req.user = user;

    next();
  } catch (error) {
    next(error);
  }
};

export default authMiddleware;
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import config from "../config/config.js";

const authMiddleware = async (req, res, next) => {
  try {
    let token, error;

    token = req.cookies.token;

    if (!token) {
      error = new Error("Unauthorized - No token provided");
      error.statusCode = 401;
      throw error;
    }

    const decoded = jwt.verify(token, config.JWT_SECRET);

    const user = await User.findById(decoded.id).select("-password");

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
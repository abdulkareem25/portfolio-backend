import config from "../config/config.js";
import User from "../models/User.model.js";
import jwt from "jsonwebtoken";

export const signup = async ({ fullName, email, phone, password, role }) => {

    const existingUser = await User.findOne({
        $or: [{ email }, { phone }]
    });

    if (existingUser) {
        const error = new Error("Email or phone number already in use.");
        error.status = 409;
        throw error;
    }

    const user = await User.create({
        fullName,
        email,
        phone,
        password,
        role 
    })

    const token = jwt.sign(
        { userId: user._id },
        config.JWT_SECRET,
        { expiresIn: "7d" }
    );

    return {
      token,
      user: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        phone: user.phone,
        role: user.role,
      },
    };
};

export const login = async ({ credential, password }) => {

    const user = await User.findOne({
        $or: [{ email: credential }, { phone: credential }]
    });

    if (!user || !(await user.comparePassword(password))) {
        const error = new Error("Invalid credentials.");
        error.status = 401;
        throw error;
    }

    const token = jwt.sign(
        { userId: user._id },
        config.JWT_SECRET,
        { expiresIn: "7d" }
    );

    return {
        token,
        user: {
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            phone: user.phone,
            role: user.role,
        },
    };
};

export const getUser = async (userId) => {
    const user = await User.findById(userId).select("-password");
    if (!user) {
        const error = new Error("User not found.");
        error.status = 404;
        throw error;
    }
    return user;
};
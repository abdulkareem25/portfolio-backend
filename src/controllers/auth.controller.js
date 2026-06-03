import * as authService from "../services/auth.service.js";
import asyncHandler from "../utils/asyncHandler.js";

export const signupController = asyncHandler(async (req, res) => {
    const {
        fullName,
        email,
        phone,
        password,
        role
    } = req.body;

    const { token, user } = await authService.signup({
        fullName,
        email,
        phone,
        password,
        role
    });

    res.status(201).json({
        success: true,
        message: "Signup successful.",
        token,
        user
    });
});

export const loginController = asyncHandler(async (req, res) => {
    const { credential, password } = req.body;

    const { token, user } = await authService.login({
        credential,
        password
    });

    res.status(200).json({
        success: true,
        message: "Login successful",
        token,
        user
    });
});

export const getUserController = asyncHandler(async (req, res) => {

    const user = await authService.getUser(req.user._id);

    res.status(200).json({
        success: true,
        message: "User retrieved successfully",
        user,
    });
});

export const logoutController = asyncHandler(async (req, res) => {
    res.clearCookie("token");

    res.status(200).json({
        success: true,
        message: "Logout successful",
    });
});
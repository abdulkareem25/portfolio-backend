import User from "../models/User.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {

    try {

        const { email, password } = req.body;

        let user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ msg: "User already exists" })
        };

        user = new User({ email, password });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save()

        res.status(201).json({ msg: "User Registered Successfully" })

    } catch (err) {
        console.error(err.message)
        res.status(500).json("Error in register")
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: "Invalid Credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid Credentials" });
        }

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '24h' },
            (err, token) => {
                if (err) throw err
                res.json({ token })
            }
        )

    } catch (err) {
        console.error(err.message)
        res.status(500).json("Error in login")
    }
}
import mongoose from "mongoose";
import config from "./config.js";

const connectDB = async () => {
    try {
        await mongoose.connect(config.DB_URI)
        console.log("Database Connected...")
    } catch (err) {
        throw new Error("Database Error: " + err.message);
        process.exit(1)
    }
}

export default connectDB
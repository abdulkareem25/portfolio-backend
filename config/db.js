import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGOURI)
        console.log("Database Connected...")
    } catch (err) {
        console.log(`Database error: ${err}`)
        process.exit(1)
    }
}

export default connectDB
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import projectRouter from "./routes/projects.route.js";
import skillsRouter from "./routes/skills.route.js";
import authRouter from "./routes/auth.route.js";

const envFile = process.env.NODE_ENV === 'production' ? ".env.production" : ".env.development";
dotenv.config({ path: envFile })
const app = express();

const port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(morgan('dev'))

app.use("/api/auth", authRouter)
app.use("/api/projects", projectRouter)
app.use("/api/skills", skillsRouter)


app.get("/", (req, res) => {
    res.send("Server is running...")
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
    connectDB()
})
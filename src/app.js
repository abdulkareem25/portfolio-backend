import express from "express";
import morgan from "morgan";
import cors from "cors";
import errorHandler from "./middlewares/errors.middleware.js";
import notFoundHandler from "./middlewares/notFound.middleware.js";
import authRouter from "./routes/auth.routes.js";
import contactRouter from "./routes/contacts.routes.js";
import projectRouter from "./routes/projects.routes.js";
import skillsRouter from "./routes/skills.routes.js";
import config from "./config/config.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: config.CLIENT_URL || "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(morgan('dev'));

app.use("/api/auth", authRouter)
app.use("/api/projects", projectRouter)
app.use("/api/skills", skillsRouter)
app.use("/api/contacts", contactRouter)


app.get("/health", (req, res) => {
  res.status(200).json({ message: "Server is healthy" })
})

app.use(notFoundHandler)
app.use(errorHandler)

export default app;
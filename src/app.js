import express from "express";
import morgan from "morgan";
import errorHandler from "./middlewares/errors.middleware.js";
import notFoundHandler from "./middlewares/notFound.middleware.js";
import authRouter from "./routes/auth.routes.js";
import contactRouter from "./routes/contacts.routes.js";
import projectRouter from "./routes/projects.routes.js";
import skillsRouter from "./routes/skills.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use("/api/auth", authRouter)
app.use("/api/projects", projectRouter)
app.use("/api/skills", skillsRouter)
app.use("/api/contacts", contactRouter)


app.get("/health", (req, res) => {
  res.status(200).json({ message: "Server is healthy" })
})

app.use(errorHandler)
app.use(notFoundHandler)

export default app;
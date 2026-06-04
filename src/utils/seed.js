import mongoose from "mongoose";
import connectDB from "../config/db.js";
import Skill from "../models/Skill.model.js";
import Project from "../models/Project.model.js";

const skills = [
  {
    category: "Frontend",
    skillsList: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "HTML & CSS", level: 95 },
      { name: "Redux", level: 75 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },
  {
    category: "Backend",
    skillsList: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 83 },
      { name: "MongoDB", level: 78 },
      { name: "REST APIs", level: 88 },
      { name: "JWT Auth", level: 75 },
    ],
  },
  {
    category: "DevOps & Tools",
    skillsList: [
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 60 },
      { name: "Postman", level: 85 },
      { name: "VS Code", level: 95 },
      { name: "Linux CLI", level: 65 },
    ],
  },
  {
    category: "Languages",
    skillsList: [
      { name: "JavaScript", level: 88 },
      { name: "TypeScript", level: 65 },
      { name: "Python", level: 70 },
      { name: "C++", level: 55 },
    ],
  },
];

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce web app with product listings, cart management, Stripe payment integration, and an admin dashboard for inventory control.",
    imageUrl:
      "https://placehold.co/800x500/1a1a2e/e0e0ff?text=E-Commerce+Platform",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    demoUrl: "https://demo.example.com/ecommerce",
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
  },
  {
    title: "AI Chat Assistant",
    description:
      "A real-time chat application powered by OpenAI's GPT API. Features include conversation history, markdown rendering, and user authentication.",
    imageUrl:
      "https://placehold.co/800x500/0f3460/c0d8ff?text=AI+Chat+Assistant",
    technologies: ["React", "OpenAI API", "Node.js", "Socket.io", "JWT"],
    demoUrl: "https://demo.example.com/ai-chat",
    githubUrl: "https://github.com/yourusername/ai-chat-assistant",
  },
  {
    title: "Dev Portfolio Builder",
    description:
      "A drag-and-drop portfolio builder for developers. Users can customize sections, upload projects, and publish a shareable portfolio link.",
    imageUrl:
      "https://placehold.co/800x500/16213e/d0f0ff?text=Portfolio+Builder",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Cloudinary",
    ],
    demoUrl: "https://demo.example.com/portfolio-builder",
    githubUrl: "https://github.com/yourusername/portfolio-builder",
  },
  {
    title: "Task Management App",
    description:
      "A Kanban-style task manager with drag-and-drop boards, team collaboration, deadline tracking, and priority labels.",
    imageUrl:
      "https://placehold.co/800x500/1b1b2f/ffe0d0?text=Task+Manager",
    technologies: ["React", "Redux", "Node.js", "MongoDB", "Socket.io"],
    demoUrl: "https://demo.example.com/task-manager",
    githubUrl: "https://github.com/yourusername/task-manager",
  },
  {
    title: "Weather Dashboard",
    description:
      "A sleek weather dashboard that visualizes real-time forecasts, hourly breakdowns, and 7-day outlooks using the OpenWeatherMap API with interactive charts.",
    imageUrl:
      "https://placehold.co/800x500/0a2a4a/a0d8ff?text=Weather+Dashboard",
    technologies: ["React", "Chart.js", "OpenWeatherMap API", "Tailwind CSS"],
    demoUrl: "https://demo.example.com/weather-dashboard",
    githubUrl: "https://github.com/yourusername/weather-dashboard",
  },
  {
    title: "Social Media Analytics",
    description:
      "A full-stack analytics platform that aggregates social media metrics, generates insight reports, and visualizes engagement trends across multiple platforms.",
    imageUrl:
      "https://placehold.co/800x500/1a0a2e/d0b0ff?text=Analytics+Platform",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Recharts", "REST APIs"],
    demoUrl: "https://demo.example.com/social-analytics",
    githubUrl: "https://github.com/yourusername/social-analytics",
  },
  {
    title: "Recipe Finder App",
    description:
      "A recipe discovery app with smart ingredient-based search, dietary filters, nutritional info, and the ability to save favorites with a personal cookbook feature.",
    imageUrl:
      "https://placehold.co/800x500/1a2a0a/c8ffb0?text=Recipe+Finder",
    technologies: ["React", "Node.js", "MongoDB", "Spoonacular API", "JWT"],
    demoUrl: "https://demo.example.com/recipe-finder",
    githubUrl: "https://github.com/yourusername/recipe-finder",
  },
];

const seed = async () => {
  await connectDB();

  console.log("🌱 Clearing existing data...");
  await Skill.deleteMany({});
  await Project.deleteMany({});

  console.log("📦 Inserting skills...");
  await Skill.insertMany(skills);

  console.log("🚀 Inserting projects...");
  await Project.insertMany(projects);

  console.log("✅ Seed completed successfully!");
  mongoose.connection.close();
};

seed().catch((err) => {
  console.error("❌ Seed failed:", err.message);
  mongoose.connection.close();
});

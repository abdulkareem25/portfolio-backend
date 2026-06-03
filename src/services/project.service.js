import Project from "../models/Project.model.js";

export const createProject = async (title, description, technologies, demoUrl, githubUrl, imageUrl) => {
    const project = await Project.create({
        title,
        description,
        technologies,
        demoUrl,
        githubUrl,
        imageUrl,
    });

    return project;
};

export const getProjects = async () => {
    const projects = await Project.find({ isDeleted: false }).sort({ createdAt: -1 });
    return projects;
};

export const getProjectById = async (id) => {
    const project = await Project.findOne({ _id: id, isDeleted: false });
    return project;
};

export const updateProject = async (id, title, description, technologies, demoUrl, githubUrl, imageUrl) => {
    const project = await Project.findOne({ _id: id, isDeleted: false });

    if (!project) return null;

    if (title !== undefined)        project.title        = title;
    if (description !== undefined)  project.description  = description;
    if (technologies !== undefined) project.technologies = technologies;
    if (demoUrl !== undefined)      project.demoUrl      = demoUrl;
    if (githubUrl !== undefined)    project.githubUrl    = githubUrl;
    if (imageUrl !== undefined)     project.imageUrl     = imageUrl;

    await project.save();
    return project;
};

export const deleteProject = async (id) => {
    const project = await Project.findOne({ _id: id, isDeleted: false });

    if (!project) return null;

    project.isDeleted = true;
    await project.save();

    return project;
};
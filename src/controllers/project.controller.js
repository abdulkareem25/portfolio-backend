import asyncHandler from "../utils/asyncHandler.js";
import uploadImage from "../services/storage.service.js";
import {
    createProject,
    getProjects,
    getProjectById,
    updateProject,
    deleteProject,
} from "../services/project.service.js";

// POST /api/projects
export const createProjectController = asyncHandler(async (req, res) => {
    const { title, description, technologies, demoUrl, githubUrl } = req.body;

    if (!req.file) {
        return res.status(400).json({
            success: false,
            message: "Project image is required",
        });
    }

    const { url: imageUrl } = await uploadImage(req.file.buffer, req.file.originalname);

    const project = await createProject(title, description, technologies, demoUrl, githubUrl, imageUrl);

    return res.status(201).json({
        success: true,
        message: "Project created successfully",
        project,
    });
});

// GET /api/projects
export const getProjectsController = asyncHandler(async (req, res) => {
    const projects = await getProjects();

    return res.status(200).json({
        success: true,
        projects,
    });
});

// GET /api/projects/:id
export const getProjectByIdController = asyncHandler(async (req, res) => {
    const project = await getProjectById(req.params.id);

    if (!project) {
        return res.status(404).json({
            success: false,
            message: "Project not found",
        });
    }

    return res.status(200).json({
        success: true,
        project,
    });
});

// PUT /api/projects/:id
export const updateProjectController = asyncHandler(async (req, res) => {
    const { title, description, technologies, demoUrl, githubUrl } = req.body;

    let imageUrl;
    if (req.file) {
        const uploadResult = await uploadImage(req.file.buffer, req.file.originalname);
        imageUrl = uploadResult.url;
    }

    const project = await updateProject(
        req.params.id,
        title,
        description,
        technologies,
        demoUrl,
        githubUrl,
        imageUrl
    );

    if (!project) {
        return res.status(404).json({
            success: false,
            message: "Project not found",
        });
    }

    return res.status(200).json({
        success: true,
        message: "Project updated successfully",
        project,
    });
});

// DELETE /api/projects/:id
export const deleteProjectController = asyncHandler(async (req, res) => {
    const project = await deleteProject(req.params.id);

    if (!project) {
        return res.status(404).json({
            success: false,
            message: "Project not found",
        });
    }

    return res.status(200).json({
        success: true,
        message: "Project deleted successfully",
    });
});
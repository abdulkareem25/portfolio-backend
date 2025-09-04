import Project from "../models/Project.model.js"

export const createProject = async (req, res) => {
    try {
        const { title, description, imageUrl, technologies, liveUrl, githubUrl } = req.body;

        const newProject = new Project({
            title,
            description,
            imageUrl,
            technologies,
            liveUrl,
            githubUrl
        });

        const savedProject = await newProject.save();

        res.status(201).json(savedProject)

    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
};

export const getProjects = async (req, res) => {
    try {

        const allProjects = await Project.find({})

        return res.status(200).json(allProjects)

    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
};

export const updateProject = async (req, res) => {
    try {

        const { title, description, imageUrl, technologies, liveUrl, githubUrl } = req.body;
        
        const updateData = { description }

        const updatedProject = await Project.findByIdAndUpdate(
            req.params.id,
            { $set: updateData },
            { new: true }
        )

        res.status(200).json(updatedProject)


    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
};

export const deleteProject = async (req, res) => {

    try {
        const deletedProject = await Project.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedProject)

    } catch (err) {
        console.error(err.message)
        res.status(500).json("Server Error")
    }
};
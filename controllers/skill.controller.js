import Skill from "../models/Skill.model.js";

export const addSkill = async (req, res) => {
    try {

        const { category, name, percentage } = req.body;

        const newSkill = new Skill({
            category,
            name,
            percentage
        })

        const savedSkill = await newSkill.save()

        res.status(201).json(savedSkill)

    } catch (err) {
        console.error(err.message)
        res.status(500).json("Server Error")
    }
};

export const getSkills = async (req, res) => {
    try {

        const allSkills = await Skill.find({})

        res.status(200).json(allSkills)

    } catch (err) {
        console.error(err.message);
        res.status(500).json("Server Error")
    }
};

export const updateSkill = async (req, res) => {
    try {

        const { category, name, percentage } = req.body;

        const updateSkill = { category, name, percentage };

        const updatedSkill = await Skill.findByIdAndUpdate(
            req.params.id,
            { $set: updateSkill },
            { new: true }
        )

        res.status(200).json(updatedSkill)


    } catch (err) {
        console.log(err.message);
        res.status(500).json("Error in Skill Controller")
    }
};

export const deleteSkill = async (req, res) => {
    try {
        
        const removedSkill = await Skill.findByIdAndDelete(req.params.id)

        res.status(400).json(removedSkill)

    } catch (err) {
        console.error(err.message)
        res.status(500).json("Error in deleteSkill function")
    }
};
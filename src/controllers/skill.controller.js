import asyncHandler from "../utils/asyncHandler.js";
import {
    addSkill,
    getSkills,
    updateSkillItem,
    deleteSkillItem,
} from "../services/skill.service.js";

// POST /api/skills
export const addSkillController = asyncHandler(async (req, res) => {
    const { category, skillsList } = req.body;

    const skill = await addSkill(category, skillsList);

    return res.status(201).json({
        success: true,
        message: "Skill added successfully",
        skill,
    });
});

// GET /api/skills
export const getSkillsController = asyncHandler(async (req, res) => {
    const skills = await getSkills();

    return res.status(200).json({
        success: true,
        skills,
    });
});

// PUT /api/skills/:id   (id = skill item _id inside skillsList)
export const updateSkillController = asyncHandler(async (req, res) => {
    const { name, level } = req.body;

    const skill = await updateSkillItem(req.params.id, { name, level });

    if (!skill) {
        return res.status(404).json({
            success: false,
            message: "Skill item not found",
        });
    }

    return res.status(200).json({
        success: true,
        message: "Skill updated successfully",
        skill,
    });
});

// DELETE /api/skills/:id   (id = skill item _id inside skillsList)
export const deleteSkillController = asyncHandler(async (req, res) => {
    const skill = await deleteSkillItem(req.params.id);

    if (!skill) {
        return res.status(404).json({
            success: false,
            message: "Skill item not found",
        });
    }

    return res.status(200).json({
        success: true,
        message: "Skill deleted successfully",
    });
});
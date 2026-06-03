import Skill from "../models/Skill.model.js";

/**
 * Add skills to a category.
 * If the category already exists, the new items are pushed into skillsList.
 * If not, a new Skill document is created.
 */
export const addSkill = async (category, skillsList) => {
    const existing = await Skill.findOne({ category, isDeleted: false });

    if (existing) {
        existing.skillsList.push(...skillsList);
        await existing.save();
        return existing;
    }

    const skill = await Skill.create({ category, skillsList });
    return skill;
};

/**
 * Get all skill categories with their items.
 */
export const getSkills = async () => {
    const skills = await Skill.find({ isDeleted: false }).sort({ category: 1 });
    return skills;
};

/**
 * Update a single skill item inside a category.
 * @param {string} skillItemId - The _id of the item inside skillsList
 * @param {object} updates      - { name?, level? }
 */
export const updateSkillItem = async (skillItemId, updates) => {
    const setFields = {};
    if (updates.name  !== undefined) setFields["skillsList.$.name"]  = updates.name;
    if (updates.level !== undefined) setFields["skillsList.$.level"] = updates.level;

    const skill = await Skill.findOneAndUpdate(
        { "skillsList._id": skillItemId, isDeleted: false },
        { $set: setFields },
        { new: true }
    );

    return skill; // null if not found
};

/**
 * Soft-delete a single skill item from its category's skillsList.
 * If skillsList becomes empty after removal, soft-delete the whole category.
 * @param {string} skillItemId - The _id of the item inside skillsList
 */
export const deleteSkillItem = async (skillItemId) => {
    const skill = await Skill.findOneAndUpdate(
        { "skillsList._id": skillItemId, isDeleted: false },
        { $pull: { skillsList: { _id: skillItemId } } },
        { new: true }
    );

    if (!skill) return null;

    // If no items remain in this category, soft-delete the category document
    if (skill.skillsList.length === 0) {
        skill.isDeleted = true;
        await skill.save();
    }

    return skill;
};

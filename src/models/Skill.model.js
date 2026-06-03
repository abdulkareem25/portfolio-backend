import mongoose from "mongoose";

const skillItemSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        level: {
            type: Number,
            required: true,
            min: 1,
            max: 100,
        },
    },
    { _id: true }
);

const skillSchema = new mongoose.Schema(
    {
        category: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        skillsList: [skillItemSchema],
        isDeleted: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

const Skill = mongoose.model("Skill", skillSchema);

export default Skill;
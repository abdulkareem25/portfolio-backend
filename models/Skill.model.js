import mongoose from "mongoose";

const skillSchema = mongoose.Schema({
    category:{
        type: String,
        require: true,
        enum: ["Frontend", "Backend", "Tools", "Others"]
    },
    name: {
        type: String,
        require: true,
        trim: true,
    },
    percentage: {
        type: Number,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

const Skill = mongoose.model('Skill', skillSchema)

export default Skill
import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
        require: true,
    },
    imageUrl: {
        type: String,
        require: true,
    },
    technologies: {
        type: [String],
        require: true,
    },
    liveUrl: {
        type: String,
        require: true,
    },
    githubUrl: {
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


const Project = mongoose.model('Project', projectSchema);

export default Project
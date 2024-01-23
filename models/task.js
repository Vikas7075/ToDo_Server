import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required..."],
    },
    description: {
        type: String,
        required: [true, "description is required..."],
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    createAt: {
        type: Date,
        default: Date.now,
    }
})


export const Task = mongoose.model("Task", UserSchema)

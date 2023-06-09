import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    job_description: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    schedule: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
});

export default mongoose.model('User', UserSchema);
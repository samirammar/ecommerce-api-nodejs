import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    userName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    location: {type: String, default: "Cairo Egypt"},
},{timestamps: true});

export default mongoose.model("User", UserSchema);
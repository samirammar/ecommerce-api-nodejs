import asyncWrapper from "../middleware/asyncWrapper.js";
import User from "../models/User.js";

export const getUser = asyncWrapper(async (req, res, next) => {
    const user = await User.findById(req.user.id);

    if (!user) return res.status(401).json("Could not find user!");
    const {password, __v, createdAt, updatedAt, ...userData} = user._doc;

    res.status(200).json(userData);
});

export const deleteUser = asyncWrapper(async (req, res, next) => {
    await User.findByIdAndDelete(req.user.id);

    res.status(200).json("User successfully deleted!");
});
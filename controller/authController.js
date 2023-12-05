import asyncWrapper from "../middleware/asyncWrapper.js";
import User from "../models/User.js";
import {hash, compare} from "bcrypt";
import jwt from "jsonwebtoken";

export const createUser = asyncWrapper(async (req, res, next) => {
    req.body.password = await hash(req.body.password, 10);
    const user = new User(req.body);
    await user.save();

    res.status(200).json(user);
});

export const loginUser = asyncWrapper(async (req, res, next) => {
    const user = await User.findOne({email: req.body.email});
    if (!user) return res.status(401).json("Could not find user!");
    const {password, __v, ...userData} = user._doc;

    const match = await compare(req.body.password, password);

    if (!match) return res.status(401).json("Wrong password!");

    const userToken = jwt.sign({
        id: user._id
    }, process.env.SECRET, {expiresIn: '30d'});

    res.status(200).json({
        token: userToken,
        ...userData
    });
});
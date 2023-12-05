import jwt from 'jsonwebtoken';
// import User from '../models/User.js'

export const verifyToken = (req, res, next) => {
    const token = req.headers.token.split(' ')[1];
    if(!token) return res.status(403).json("Not authenticated!");

    jwt.verify(token, process.env.SECRET, (err, user) => {
        if(err) return res.status(403).json("Token Error!");
        req.user = user;
        next();
    })
}
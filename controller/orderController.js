import asyncWrapper from "../middleware/asyncWrapper.js";
import Order from "../models/Order.js";

export const getOrders = asyncWrapper(async (req, res, next) => {
    const orders = await Order.find({userId: req.user.id}).populate({
        path: "productId",
        select: "-sizes -oldPrice -description -category"
    }).exec();
    
    res.status(200).json(orders);
});

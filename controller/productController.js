import asyncWrapper from "../middleware/asyncWrapper.js";
import Product from "../models/Product.js";

export const createPoduct = asyncWrapper(async (req, res, next) => {
    const product = new Product(req.body);
    await product.save();

    res.status(200).json("Product Created!");
});

export const getProducts = asyncWrapper(async (req, res, next) => {
    const products = await Product.find().sort({createdAt: -1});

    res.status(200).json(products);
});

export const getProduct= asyncWrapper(async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    res.status(200).json(product);
});

export const searchProducts = asyncWrapper(async () => {
    const products = await Product.aggregate([
        {
            $search:{
                index: "shose",
                text: {
                    query: req.params.key,
                    path: {
                        wildcard: "*"
                    }
                }
            }
        }
    ]);

    res.status(200).json(products);
})

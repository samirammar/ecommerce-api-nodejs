import asyncWrapper from "../middleware/asyncWrapper.js";
import Cart from "../models/Cart.js";

export const addCart = asyncWrapper(async (req, res, next) => {
    const {cartItem, quantity} = req.body
    const userId = req.user.id;
    
    const cart = await Cart.findOne({userId: userId});

    if (cart) {
        const productExisting = cart.products.find((product) => product.cartItem.toString() === cartItem);

        if (productExisting) { // if the cart has this product
            productExisting.quantity += 1
        } else { // if the cart has't this product
            cart.products.push({cartItem, quantity: 1})
        }

        await cart.save();
    } else {
        const newCart = new Cart({
            userId,
            products: [{cartItem, quantity: 1}]
        });
        
        await newCart.save();
    }
    res.status(200).json("product added to cart")
});


export const getCart = asyncWrapper(async (req, res, next) => {
    const cart = await Cart.find({userId: req.user.id});

    res.status(200).json(cart);
});

export const deleteCartItem = asyncWrapper(async (req, res, next) => {
    const cartItemId = req.params.cartItemId;
    
    const cart = await Cart.findOneAndUpdate(
        {'products._id': cartItemId},
        {$pull: {products: {_id: cartItemId}}},
        {new: true}
    );

    if (!cart) {
        return res.status(404).json("cart item not found!")
    }

    res.status(200).json(cart)
});
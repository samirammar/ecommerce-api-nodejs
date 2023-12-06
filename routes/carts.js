import {Router} from "express";
import {addCart, deleteCartItem, getCart} from "../controller/cartController.js";
import {verifyToken} from "../middleware/verifyToken.js"

const router = Router();

router.get('/find/', verifyToken, getCart);
router.post('/', verifyToken, addCart);
router.delete('/:cartItemId', verifyToken, deleteCartItem);


export default router;
import {Router} from "express";
import {createPoduct, getProduct, getProducts, searchProducts} from "../controller/productController.js";

const router = Router();

router.get('/', getProducts);
router.get('/:id', getProduct);
router.get('/search/:key', searchProducts);
router.post('/', createPoduct);

export default router;
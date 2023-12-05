import {Router} from "express";
import {getOrders} from "../controller/orderController.js";
import {verifyToken} from "../middleware/verifyToken.js"

const router = Router();

router.get('/',verifyToken ,getOrders);

export default router;
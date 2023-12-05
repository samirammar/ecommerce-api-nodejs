import {Router} from "express";
import {getUser, deleteUser} from "../controller/userController.js";
import {verifyToken} from "../middleware/verifyToken.js"

const router = Router();

router.get('/',verifyToken ,getUser);
router.delete('/', verifyToken, deleteUser);

export default router;
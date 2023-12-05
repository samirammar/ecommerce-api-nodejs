import {Router} from "express";
import {createUser, loginUser} from "../controller/authController.js";

const router = Router();

router.post('/register', createUser);
router.post('/login', loginUser)

export default router;
import { Router } from "express";

// TEMPLATE
import {login} from '../controllers/Auth.js';



const router = Router();



// AUTH ROUTES
router.post('/api/login',login)


export default router;
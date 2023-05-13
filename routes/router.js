import { Router } from "express";

// TEMPLATE
import {login} from '../controllers/Auth.js';



const router = Router();



// AUTH ROUTES
router.post('/api/v1/login',login)


export default router;
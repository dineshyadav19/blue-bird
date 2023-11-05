import { Router } from "express";
import userRoutes from "./UserRoutes";


const router = Router()

router.use('/api/user', userRoutes)

export default router
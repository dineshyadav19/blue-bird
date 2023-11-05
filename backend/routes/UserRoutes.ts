import { Router } from "express";
import { createUser, deleteUser, getUser, updateUser } from "../controller/UserController";

const userRoutes = Router()

userRoutes.get('/:id', getUser)
userRoutes.post('/', createUser)
userRoutes.put('/:id', updateUser)
userRoutes.delete('/:id', deleteUser)

export default userRoutes
import { Router } from "express";
import { userController } from "../controllers/users.controller";

const userRoutes: Router = Router();

userRoutes.get('/users', userController.find);

userRoutes.post('/users', userController.create);

userRoutes.patch('/users/:id', userController.update);

userRoutes.delete('/users/:id', userController.delete);

export { userRoutes };
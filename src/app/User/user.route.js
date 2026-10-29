import * as userController from "./user.controller.js";
import { Router } from "express";
export const userRouter = Router();

userRouter.post("/signup", userController.SignUp);
userRouter.post("/login", userController.SignIn);
userRouter.patch("/:id", userController.updateUser);
userRouter.delete("/", userController.deleteUser);
userRouter.get("/", userController.findUserById);
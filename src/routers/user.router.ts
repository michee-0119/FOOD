import { signUpController } from "../controllers/users";
import { signInUser } from "../controllers/users";
import { Router } from "express";

export const userRouter = Router();

userRouter.post("/auth/sign-up", signUpController);
userRouter.post("/auth/sign-in", signInUser);

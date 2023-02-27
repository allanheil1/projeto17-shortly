import { Router } from "express";
import {getUserLinks, signIn, signUp} from "../controllers/usersController.js";
import {validateSignUp, validateSignIn, validateHeader} from "../middlewares/usersMiddlewares.js";

const usersRouter = Router();

usersRouter.post("/signup", validateSignUp, signUp);
usersRouter.post("/signin", validateSignIn, signIn);
usersRouter.get("/users/me", validateHeader, getUserLinks);

export default usersRouter;
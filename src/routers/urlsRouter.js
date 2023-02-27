import { Router } from "express";
import {shortenUrl, listUrl, redirectToUrl, deleteUrl} from "../controllers/urlsController.js";
import {validateUrl, validateUrlBearer} from "../middlewares/urlsMiddlewares.js";

const urlsRouter = Router();

urlsRouter.post("/urls/shorten", validateUrl, shortenUrl);
urlsRouter.get("/urls/:id", listUrl);
urlsRouter.get("/urls/open/:shortUrl", redirectToUrl);
urlsRouter.delete("/urls/:id", validateUrlBearer, deleteUrl);

export default urlsRouter;
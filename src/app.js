import express, {json} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import usersRouter from "./routers/usersRouter.js";
import urlsRouter from "./routers/urlsRouter.js";
import rankingRouter from "./routers/rankingRouter.js";

dotenv.config();

const app = express();
app.use(json());
app.use(cors());

app.use(usersRouter);
app.use(urlsRouter);
app.use(rankingRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => { 
    console.log(`Server listening on port ${port}`)
});
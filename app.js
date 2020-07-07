import express from "express";
import logger from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import routes from "./routers/routes";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";

const app = express();

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger("dev"));

app.use(routes.home, globalRouter);
app.use(routes.user, userRouter);

export default app;
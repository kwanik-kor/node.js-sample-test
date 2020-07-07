import express from "express";
import routes from "./routes";

const userRouter = express.Router();

userRouter.get(routes.home, (req, res) => res.send('userindex'));
userRouter.get("/edit", (req, res) => res.send('user_edit'));
userRouter.get("/handle", (req, res) => res.send('user_handle'));

export default userRouter;
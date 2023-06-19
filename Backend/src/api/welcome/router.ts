import { Request, Response, Router } from "express";

const welcomeRouter = Router();

const handleWelcome = (req:Request, res:Response) => {
    res.send("Welcome to the Backend!");
};

welcomeRouter.get("/", handleWelcome);
export default welcomeRouter;
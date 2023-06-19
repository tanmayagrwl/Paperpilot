import { Router } from "express";
import welcomeRouter from "./welcome/router";
import predictRouter from "./predict/router";

export default (): Router => {
  const app = Router();

  //TODO: add routes here...
  app.use("/", welcomeRouter);
  app.use("/predict", predictRouter);
  return app;
};

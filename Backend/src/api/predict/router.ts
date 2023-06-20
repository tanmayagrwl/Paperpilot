import { Request, Response, Router } from "express";
import PredictPapers from "./controller";

const predictRouter = Router();

const handlePredict = async (req: Request, res: Response) => {
  const randomData = await PredictPapers(req.body.interests);
  res.status(200).json({ success: true, data: randomData });
};

predictRouter.post("/", handlePredict);
export default predictRouter;

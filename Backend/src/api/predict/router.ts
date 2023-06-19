import { Request, Response, Router } from "express";
// import PredictPapers from "./controller";

const predictRouter = Router();

const handlePredict = async(req:Request, res:Response) => {
    // const randomData = await PredictPapers(req.body.interests, req.body.paperRecommendations);
    res.status(200).json({success: true, data: "hello"});
};

predictRouter.post("/", handlePredict);
export default predictRouter;
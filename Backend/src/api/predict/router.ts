import { Request, Response, Router } from "express";
import PredictPapers from "./controller";
const sendRandomTitleEmail = require("../../shared/ses");

const predictRouter = Router();

const handlePredict = async (req: Request, res: Response) => {
	const randomData = await PredictPapers(req.body.interests);

	//store keys of randomData in an array
	const keys = Object.keys(randomData);
	await sendRandomTitleEmail(req.body.email, keys[0], keys[1], keys[2]);
	res.status(200).json({ success: true, data: randomData });
};

predictRouter.post("/", handlePredict);
export default predictRouter;

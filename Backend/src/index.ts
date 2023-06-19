import express, { Express, Request, Response } from "express";
import * as fs from "fs";

const app: Express = express();
const port = 3000;

app.use(express.json());

interface JsonData {
	[key: string]: string[][];
}

const paperRecommendationsjson = fs.readFileSync(
	"./src/recommendations.json",
	"utf-8"
);
const paperRecommendations: JsonData = JSON.parse(paperRecommendationsjson);

app.get("/", (req: Request, res: Response) => {
	res.status(200).json({
		success: true,
		message: "welcome to the api",
	});
});
app.post("/predict", (req: Request, res: Response) => {
	const interests = req.body.interests;
	const filteredData: JsonData = {};
	const randomData: { [key: string]: { title: string; id: string } } = {};
	for (const key of interests) {
		if (paperRecommendations.hasOwnProperty(key)) {
			filteredData[key] = paperRecommendations[key];

			// Randomly select a title and ID from the filtered data
			const titles = filteredData[key][0];
			const ids = filteredData[key][1];
			const randomIndex = Math.floor(Math.random() * titles.length);
			const randomTitle = titles[randomIndex];
			const randomId = ids[randomIndex];

			randomData[key] = { title: randomTitle, id: randomId };
		}
	}

	res.status(200).json({
		success: true,
		data: interests,
		randomData,
	});
});

app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

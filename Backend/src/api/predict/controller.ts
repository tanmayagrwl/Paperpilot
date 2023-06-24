import * as fsp from "node:fs/promises";
import fs from "fs";
import path, { join } from "path";
import { sendMail } from "../../shared/services/sesService";
import ejs, { renderFile } from "ejs";

interface JsonData {
  [key: string]: string[][];
}

interface ResearchPaperData {
  [key: string]: {
    [x: string]: string;
  };
}

const paperRecommendationsjson = fs.readFileSync(
  "./src/shared/recommendations.json",
  "utf-8"
);
const paperRecommendations: JsonData = JSON.parse(paperRecommendationsjson);

const PredictPapers = async (interests: string[]) => {
  const filteredData: any = {};
  const randomData: ResearchPaperData = {};
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
  return randomData;
};

const sendPaperToEmail = async (email: string, titles: ResearchPaperData) => {
  try {
    const template = await fsp.readFile(
      path.join(__dirname, "../../shared/templates/emailTemplate.ejs"),
      "utf8"
    );
    const predictedData = titles;
    var data = [];
    for (const keys in predictedData) {
      if (predictedData.hasOwnProperty(keys)) {
        const paper = predictedData[keys];
        data.push({ interest: keys, title: paper.title });
      }
    }
    console.log(data);
    try {
      const renderedHtml = ejs.render(template, { data });
      await sendMail(
        [email],
        "Your Research Paper from Paperpilot",
        renderedHtml!
      );
      console.log("Email Sent Successfully to " + email);
    } catch (error) {
      throw Error("Error in Generating Template");
    }
  } catch (error) {
    console.log(error);
  }
};

export default PredictPapers;
export { sendPaperToEmail };

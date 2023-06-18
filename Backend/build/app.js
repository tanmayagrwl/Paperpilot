"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs = __importStar(require("fs"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
const paperRecommendationsjson = fs.readFileSync("./src/recommendations.json", "utf-8");
const paperRecommendations = JSON.parse(paperRecommendationsjson);
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "welcome to the api",
    });
});
app.post("/predict", (req, res) => {
    const interests = req.body.interests;
    const filteredData = {};
    const randomData = {};
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
//# sourceMappingURL=app.js.map
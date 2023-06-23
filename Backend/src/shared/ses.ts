import path from "path";
import { dirname } from "path";
const { SESV2 } = require("aws-sdk");
const { config: dotenvConfig } = require("dotenv");
const mailComposer = require("nodemailer/lib/mail-composer");
const { join } = require("path");
const { renderFile } = require("ejs");

dotenvConfig();

const sesv2 = new SESV2({
	region: "ap-south-1",
	credentials: {
		accessKeyId: process.env.AWS_ACCESS_KEY_ID,
		secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_ID,
	},
});

const sendRandomTitleEmail = async (
	email: string,
	title1: string,
	title2: string,
	title3: string
) => {
	try {
		console.log(path.join(__dirname));
		const rawEmail = new mailComposer({
			from: "Paper-Pilot Group <paperpilot.srm@gmail.com>",
			to: email,
			replyTo: "support@paperpilot.com",
			text: `Your go to Paper Pilot`,
			subject: "Paper recommendation from Paper Pilot",
			html: Buffer.from(
				await renderFile(
					path.join(__dirname, "./templates/emailTemplate.ejs"),
					{
						title1,
						title2,
						title3,
					}
				)
			).toString("utf-8"),
		})
			.compile()
			.build();
		const result = await sesv2
			.sendEmail({
				FromEmailAddress: "Paper-Pilot Group <paperpilot.srm@gmail.com>",
				Destination: { ToAddresses: [email] },
				Content: {
					Raw: {
						Data: await rawEmail,
					},
				},
			})
			.promise();
		console.log("Success: Predicted Titles Sent!");
		console.dir(result);
	} catch (err) {
		console.log("Error: Problem sending Email");
		console.dir(err);
		throw "SES Error while sending EMAIL!!";
	}
};

module.exports = sendRandomTitleEmail;

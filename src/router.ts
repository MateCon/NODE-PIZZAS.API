import { Application } from "express";
import fs from "fs";
import path from "path";

const router = async (app: Application) =>
	new Promise<Application>((resolve, reject) => {
		fs.readdir(path.join(__dirname, "controllers"), (err, dir) => {
			const controllers = dir.filter((file) => /Controller/.test(file));
			controllers.forEach((controller) => {
				const route = require(path.join(
					__dirname,
					"controllers",
					controller
				)).default;
				app.use(`/${controller.split("Controller")[0]}`, route);
				resolve(app);
			});
		});
	});

export default router;

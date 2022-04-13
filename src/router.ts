import { Application } from "express";
import fs from "fs";
import path from "path";

const router = (app: Application) => {
	fs.readdir(path.join(__dirname, "controllers"), (err, dir) => {
		const controllers = dir.filter((file) => /Controller/.test(file));
		controllers.forEach((controller) => {
			const route = require(path.join(
				__dirname,
				"controllers",
				controller
			)).default;
			app.use(`/${controller.split("Controller")[0]}`, route);
		});
	});
};

export default router;

import { Application } from "express";
import { readdirSync } from "fs";
import { join } from "path";

const router = (app: Application): Application => {
	readdirSync(join(__dirname, "controllers")).forEach((filename) => {
		if (!/Controller/.test(filename)) return;
		app.use(
			`/${filename.split("Controller")[0]}`,
			require(join(__dirname, "controllers", filename)).default
		);
	});
	return app;
};

export default router;

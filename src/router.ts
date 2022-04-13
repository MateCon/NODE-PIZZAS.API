import { Application } from "express";
import { readdirSync } from "fs";
import { join } from "path";

const router = (app: Application) =>
	new Promise<Application>((resolve) => {
		const dir = readdirSync(join(__dirname, "controllers"));
		dir.forEach((filename) => {
			if (!/Controller/.test(filename)) return;
			app.use(
				`/${filename.split("Controller")[0]}`,
				require(join(__dirname, "controllers", filename)).default
			);
		});
		resolve(app);
	});

export default router;

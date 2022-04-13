import express, { Application } from "express";
import cors from "cors";
import router from "./router";

(async () => {
	const app: Application = await router(express());
	const port = 8080;

	app.use(cors());
	app.use(express.json());

	app.get("*", (_, res) => {
		res.status(404).send("404 error - page not found");
	});

	app.listen(port, () => {
		console.log(`Server running on port ${port}`);
	});
})();

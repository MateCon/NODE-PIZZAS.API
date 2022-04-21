import express, { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./router";

const app: Application = router(express());
const port = 8080 || process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.get("*", (_, res) => {
	res.status(404).send("404 error - page not found");
});

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});

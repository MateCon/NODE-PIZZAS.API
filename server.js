import express from "express";
import cors from "cors";

const app = express();
const port = 8080;

app.use(cors());

app.get("/", (_, res) => {
	res.send("hello world");
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});

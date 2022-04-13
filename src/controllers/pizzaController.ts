import { Router } from "express";

const route = Router();

route.get("/", (_, res) => {
	res.send("hello");
});

export default route;

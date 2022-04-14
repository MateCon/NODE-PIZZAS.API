import { Request, Response, Router } from "express";
import { getPizza, getPizzas } from "../services/pizzaService";

const route = Router();

route.get("/", (_, res) => {
	res.send("hello");
});

route.get("/all", async (_, res) => {
	try {
		res.status(200).json(await getPizzas());
	} catch (err) {
		console.log(err);
		res.status(500).send("500 error - server error");
	}
});

route.get("/:id", async (req, res) => {
	try {
		const id: number = parseInt(req.params.id);
		if (isNaN(id)) {
			res.status(400).send("400 error - bad request");
			return;
		}
		const data = await getPizza(id);
		if (data.length === 0) {
			res.status(404).send("404 error - pizza not found");
		} else {
			res.status(200).json(data);
		}
	} catch (err) {
		console.log(err);
		res.status(500).send("500 error - server error");
	}
});

export default route;

import { Router } from "express";
import bodyParser from "body-parser";
import { Pizza } from "../models/pizza";
import {
	createPizza,
	getPizza,
	getPizzaById,
	updatePizzaById,
	deletePizzaById,
} from "../services/pizzaService";

const router = Router();
const jsonParser = bodyParser.json();

router.get("/", async (_, res) => {
	try {
		const pizzas = await getPizza();
		return res.status(200).json(pizzas);
	} catch (err) {
		console.log(err);
		return res.status(500).send("server error");
	}
});

router.get("/:id", async (req, res) => {
	try {
		const id = parseInt(req.params.id);
		if (isNaN(id)) {
			res.status(400).send("Wrong id");
			return;
		}
		const pizza: Pizza = await getPizzaById(id);
		if (!pizza) {
			res.status(404).send("Pizza not found");
			return;
		}
		return res.status(200).json(pizza);
	} catch (err) {
		console.log(err);
		return res.status(500).send("server error");
	}
});

router.post("/", jsonParser, async (req, res) => {
	try {
		const pizza = await createPizza(req.body);
		return res.status(201).json(pizza);
	} catch (err) {
		console.log(err);
		return res.status(500).send("server error");
	}
});

router.put("/:id", jsonParser, async (req, res) => {
	try {
		const id = parseInt(req.params.id);
		if (isNaN(id)) {
			res.status(400).send("Wrong id");
			return;
		}
		const pizza = await updatePizzaById(id, req.body);
		return res.status(200).json(pizza);
	} catch (err) {
		console.log(err);
		return res.status(500).send("server error");
	}
});

router.delete("/:id", async (req, res) => {
	try {
		const id = parseInt(req.params.id);
		if (isNaN(id)) {
			res.status(400).send("Wrong id");
			return;
		}
		const pizza = await deletePizzaById(id);
		return res.status(200).json(pizza);
	} catch (err) {
		console.log(err);
		return res.status(500).send("server error");
	}
});

export default router;

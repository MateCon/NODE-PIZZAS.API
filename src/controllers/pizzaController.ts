import { Request, Response, Router } from "express";
import {
	createPizza,
	getPizza,
	getPizzaById,
	updatePizzaById,
	deletePizzaById,
} from "../services/pizzaService";

const router = Router();

router.get("/", async (req, res) => {
	console.log(`This is a get operation`);

	const pizzas = await getPizza();

	return res.status(200).json(pizzas);
});

router.get("/:id", async (req: Request, res) => {
	console.log(`Request URL Param: ${req.params.id}`);
	console.log(`This is a get operation`);

	const id = parseInt(req.params.id);

	if (isNaN(id)) {
		res.status(400).send("Wrong id");
		return;
	}

	const pizza = await getPizzaById(id);

	return res.status(200).json(pizza);
});

router.post("", async (req, res) => {
	console.log(`This is a post operation`);

	const pizza = await createPizza(req.body);

	return res.status(201).json(pizza);
});

router.put("/:id", async (req, res) => {
	console.log(`Request URL Param: ${req.params.id}`);
	console.log(`This is a put operation`);

	const id = parseInt(req.params.id);

	if (isNaN(id)) {
		res.status(400).send("Wrong id");
		return;
	}

	const pizza = await updatePizzaById(id, req.body);

	return res.status(200).json(pizza);
});

router.delete("/:id", async (req, res) => {
	console.log(`Request URL Param: ${req.params.id}`);
	console.log(`This is a delete operation`);

	const id = parseInt(req.params.id);

	if (isNaN(id)) {
		res.status(400).send("Wrong id");
		return;
	}

	const pizza = await deletePizzaById(id);

	return res.status(200).json(pizza);
});

export default router;

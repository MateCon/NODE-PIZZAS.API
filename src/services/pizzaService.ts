import connect from "../models/database";

export const getPizzas = async () => {
	const request = await connect();
	const data = await request.query("SELECT * FROM pizzas");
	return data.recordset;
};

export const getPizza = async (id: number) => {
	const request = await connect();
	const data = await request.query(`SELECT * FROM pizzas WHERE Id = ${id}`);
	return data.recordset;
};

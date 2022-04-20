import sql from "mssql";
import connect from "../utils/database";
import { Pizza } from "../models/pizza";

const pizzaTabla = process.env.DB_TABLA_PIZZA;

export const getPizza = async () => {
	const connection = await connect();
	const response = await connection.query(`SELECT * from ${pizzaTabla}`);
	return response.recordset;
};

export const getPizzaById = async (id: number) => {
	const connection = await connect();
	const response = await connection
		.input("id", sql.Int, id)
		.query(`SELECT * from ${pizzaTabla} where id = @id`);
	return response.recordset[0];
};

export const createPizza = async (pizza: Pizza) => {
	const connection = await connect();
	const response = await connection
		.input("Nombre", sql.NChar, pizza?.nombre ?? "")
		.input("LibreGluten", sql.Bit, pizza?.libreGluten ?? false)
		.input("Importe", sql.NChar, pizza?.importe ?? 0)
		.input("Descripcion", sql.NChar, pizza?.description ?? "")
		.query(
			`INSERT INTO ${pizzaTabla}(Nombre, LibreGluten, Importe, Descripcion) VALUES (@Nombre, @LibreGluten, @Importe, @Descripcion)`
		);
	return response.recordset;
};

export const updatePizzaById = async (id: number, pizza: Pizza) => {
	const connection = await connect();
	const response = await connection
		.input("id", sql.Int, id)
		.input("Nombre", sql.NChar, pizza?.nombre ?? "")
		.input("LibreGluten", sql.Bit, pizza?.libreGluten ?? false)
		.input("Importe", sql.NChar, pizza?.importe ?? 0)
		.input("Descripcion", sql.NChar, pizza?.description ?? "")
		.query(
			`UPDATE Pizzas SET Nombre = @Nombre, LibreGluten = @LibreGluten, Importe = @Importe, Descripcion = @Descripcion WHERE id = @Id`
		);
	return response.recordset;
};

export const deletePizzaById = async (id: number) => {
	const connection = await connect();
	const response = await connection
		.input("id", sql.Int, id)
		.query(`DELETE FROM ${pizzaTabla} WHERE id = @id`);
	return response.recordset;
};

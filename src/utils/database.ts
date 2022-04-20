import sql, { config, Request } from "mssql";
import dotenv from "dotenv";
dotenv.config();

const config: config = {
	user: process.env.DB_USER,
	password: process.env.DB_PWD,
	database: process.env.DB_NAME,
	server: process.env.DB_SERVER || "localhost",
	options: {
		trustServerCertificate: true,
		trustedConnection: true,
	},
};

export default () =>
	new Promise<Request>(async (resolve) =>
		resolve((await sql.connect(config)).request())
	);

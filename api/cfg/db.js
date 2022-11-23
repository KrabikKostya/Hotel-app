const knex = require('knex');

module.exports = knex({
	client: 'mysql2',
	connection: {
		host: process.env.DATABASE_HOST || "localhost",
		port: process.env.DATABASE_PORT,
		database: process.env.DATABASE_DB,
		user: process.env.DATABASE_USER,
		password: process.env.DATABASE_PASSWORD
			? readFileSync(process.env.DATABASE_PASSWORD)
			: null
	}
});

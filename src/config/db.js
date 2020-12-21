const { Pool } = require("pg");

module.exports = new Pool ({
    user: 'postgres',
    password: '919364',
    host: "localhost",
    port: 5432,
    database: "megaStore"
});
const mysql = require("mysql2/promise");
require("dotenv").config();

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER_DB,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

(async () => {
    try {

        const connection = await pool.getConnection();
        console.log("Database connected!");
        connection.release();
    } catch (error) {
        console.log("failed to connect", error.message);

    }
})();

module.exports = pool
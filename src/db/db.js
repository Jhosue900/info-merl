const { Pool } = require("pg")

const pool = new Pool({
    user: "postgres",
    password: "Antgamer.25",
    host: "localhost",
    port: "5432",
    database: "infomerl",
})

module.exports = pool
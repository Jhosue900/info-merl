const { Pool } = require("pg")

const pool = new Pool({
    user: "postgres",
    password: "a5aVBHyaAYTRZ913j2c8",
    host: "containers-us-west-56.railway.app",
    port: "7534",
    database: "railway",
})

module.exports = pool
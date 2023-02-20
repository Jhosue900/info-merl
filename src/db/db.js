const { Pool } = require("pg")

const pool = new Pool({
    connectionString: 'postgres:a5aVBHyaAYTRZ913j2c8@containers-us-west-56.railway.app:7534/railway',
    ssl: {
      rejectUnauthorized: false
    },
    user: "postgres",
    password: "a5aVBHyaAYTRZ913j2c8",
    host: "containers-us-west-56.railway.app",
    port: "7534",
    database: "railway",
})

module.exports = pool
import sql from "mssql";

// getting config from environment
const sqlConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  server: 'localhost',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: false // change to true for local dev / self-signed certs
  }
}

const handler = async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const { userId } = req.query;
        await sql.connect(sqlConfig)
        const result = await sql.query`select * from mytable where id = ${userId}`
        res.status(200).json(result.recordset);
      } catch (err) {
        // ... error checks
        console.error(err)
        res.status(500).json({ message: "Internal server error" });
      }
    default:
      res.status(405).json({ message: "Method not allowed" });
  }
}

export default handler;
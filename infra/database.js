import { Client } from "pg";

async function query(queryObject) {
  const client = new Client(configDatabaseParameters());
  await client.connect();
  const result = await client.query(queryObject);
  await client.end();

  return result;
}

function configDatabaseParameters() {
  return {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD
  }
}

export default {
  query: query,
};

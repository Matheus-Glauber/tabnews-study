import { Client } from "pg";

async function query(queryObject) {
  const client = new Client(configDatabaseParameters());
  await client.connect();
  const result = await client.query(queryObject);
  await client.end();

  return result;
}

export default {
  query: query,
};

function configDatabaseParameters() {
  return {
    user: 'super.user',
    password: 'admin1995##',
    host: 'localhost',
    port: 5432,
    database: 'tabnews_db'
  }
}

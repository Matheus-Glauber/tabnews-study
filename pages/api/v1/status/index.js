import database from "infra/database";

async function status(request, response) {
  const updateAt = new Date().toISOString();
  const max_connections = await database.query(
    "SHOW max_connections;"
  );
  const opened_connections = await database.query(
    "SELECT count(*) FROM pg_stat_activity WHERE datname = 'tabnews_db';",
  );
  const postgresVersion = await database.query(
    "SHOW server_version;"
  );

  response.status(200).json({
    update_at: updateAt,
    dependencies: {
      database: {
        status: "healthy",
        version: postgresVersion.rows[0].server_version,
        max_connections: max_connections.rows[0].max_connections,
        opened_connections: opened_connections.rows[0].count,
      },
    },
  });
}

export default status;

import database from "../../../../infra/database";

async function status(request, response) {
  const result = await database.query('SELECT 1+1 as sum;')
  console.log(result.rows)
  response.status(200).json({
    status: "Ok",
    message: "Essa rota retornará dados sobre o status do banco de dados",
  });
}

export default status;

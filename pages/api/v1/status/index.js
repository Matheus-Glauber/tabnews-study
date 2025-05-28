function status(request, response) {
  response.status(200).json({
    status: "Ok",
    message: "Essa rota retornará dados sobre o status do banco de dados",
  });
}

export default status;

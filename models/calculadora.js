function somar(parcela1, parcela2) {
  if (typeof parcela1 !== "number" || typeof parcela2 !== "number") {
    return "Erro";
  }
  return parcela1 + parcela2;
}

exports.somar = somar;

function calcular() {
  const custo = parseFloat(document.getElementById("custo").value);
  const porcentagem = parseFloat(document.getElementById("porcentagem").value);

  if (isNaN(custo) || isNaN(porcentagem)) {
    document.getElementById("resultado").innerText = "Por favor, insira valores válidos.";
    return;
  }

  const acrescimo = custo * (porcentagem / 100);
  const precoFinal = custo + acrescimo;

  document.getElementById("resultado").innerText =
    `💰 Preço de venda: R$ ${precoFinal.toFixed(2)}`;
}

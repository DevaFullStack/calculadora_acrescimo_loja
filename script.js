function calcular() {
  const custoInput = document.getElementById("custo");
  const porcentagemInput = document.getElementById("porcentagem");

  const custo = parseFloat(custoInput.value);
  const porcentagem = parseFloat(porcentagemInput.value);

  // Salva a porcentagem no localStorage
  if (!isNaN(porcentagem)) {
    localStorage.setItem("porcentagemPadrao", porcentagem);
  }

  if (isNaN(custo) || isNaN(porcentagem)) {
    document.getElementById("resultado").innerText = "Por favor, insira valores válidos.";
    return;
  }

  const acrescimo = custo * (porcentagem / 100);
  const precoFinal = custo + acrescimo;

  document.getElementById("resultado").innerText =
    `💰 Preço de venda: R$ ${precoFinal.toFixed(2)}`;

  // Limpa o campo de custo após o cálculo
  custoInput.value = "";
}

// Recupera a porcentagem ao carregar a página
window.onload = function () {
  const valorSalvo = localStorage.getItem("porcentagemPadrao");
  if (valorSalvo) {
    document.getElementById("porcentagem").value = valorSalvo;
  }
};

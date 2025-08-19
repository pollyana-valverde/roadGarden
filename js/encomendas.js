const corpoTable = document.getElementById("corpoTable"); // id do tbody da tabela.

// Pegando os valores digitados pelo usuário nos inputs, cada input tem um id.
  const produtoSelect = document.getElementById("produto");
  const valorUniInput = document.getElementById("valorUni");

  produtoSelect.addEventListener("change", function() {
    const produto = this.value; // pega o valor do produto selecionado.

    const valor = 
    produto === "Orquídea" ? 24.99 : 
    produto === "Girassol" ? 49.99 : 
    produto === "Rosa" ? 34.99 : 
    produto === "Tulipa" ? 69.99 : "";

    valorUniInput.value = "R$" + valor; // atribui o valor unitário correspondente ao produto selecionado.
    // valorUniInput.textContent = "R$" + parseFloat(valor).toFixed(2); // formata o valor unitário para duas casas decimais e adiciona o prefixo "R$".
  }); // adiciona o evento de mudança no select do produto, e atribui o valor unitário correspondente ao produto selecionado.

function submitForm(event) {
  event.preventDefault(); // evita que a tela recarregue.

  // // Pegando os valores digitados pelo usuário nos inputs, cada input tem um id.
  const nome = document.getElementById("nome").value;
  const produto = document.getElementById("produto").value;
  const quant = document.getElementById("quant").value;
  const valorUni = document.getElementById("valorUni").value = produto === "Orquídea" ? 24.99 : produto === "Girassol" ? 49.99 : produto === "Rosa" ? 34.99 : produto === "Tulipa" ? 69.99 : ""; // valor unitário baseado no produto selecionado.

  if (produto === "Selecione uma opção") {
    alert("Por favor, selecione um produto válido.");
    return; // interrompe a execução se o produto não for selecionado.
  } else if (quant <= 0 || isNaN(quant)) {
    alert("Por favor, insira uma quantidade válida.");
    return; // interrompe a execução se a quantidade não for válida.
  }

  const formEncomenda = document.getElementById("formEncomendas"); // id do formulário (pai).

  const valorUniConvertido = parseFloat(valorUni).toFixed(2); // converte String para Float + duas casas decimais.
  const totalValorQuant = quant * valorUni; // Faz a conta de quantidade por valor unitário.
  const totalConvertido = parseFloat(totalValorQuant).toFixed(2);

  const novaLinha = corpoTable.insertRow(); // Chama o tbody e adiciona uma linha na tabela.

  // adiciona os valores e cédulas na linha adicionada em branco.
  novaLinha.insertCell().textContent = nome;
  novaLinha.insertCell().textContent = produto;
  novaLinha.insertCell().textContent = quant;
  novaLinha.insertCell().textContent = "R$" + valorUniConvertido;
  novaLinha.insertCell().textContent = "R$" + totalConvertido;
  novaLinha.insertCell().innerHTML = `<i onclick="excluirEmcomendas(this)" class="fa-solid fa-trash"></i>`; // botão de excluir.

  // Cria o objeto para enviar para o localStorage.
  const objeto = {
    nome,
    produto,
    quant,
    valorUniConvertido,
    totalConvertido,
  };

  // Pega e salva o objeto no localStorage.
  let lista = JSON.parse(localStorage.getItem("encomendas")) || [];
  lista.push(objeto);

  localStorage.setItem("encomendas", JSON.stringify(lista));
  formEncomenda.reset(); // Limpa os campos do formulário após o envio.
}

function carregarEncomendas() {
  const lista = JSON.parse(localStorage.getItem("encomendas")) || []; // Busca o objeto no localStorage ou cria uma lista vazia.

  // Percorre a lista e adiciona os itens na tabela.
  lista.forEach((item) => {
    const novaLinha = corpoTable.insertRow();
    novaLinha.insertCell().textContent = item.nome;
    novaLinha.insertCell().textContent = item.produto;
    novaLinha.insertCell().textContent = item.quant;
    novaLinha.insertCell().textContent = "R$" + item.valorUniConvertido;
    novaLinha.insertCell().textContent = "R$" + item.totalConvertido;
    novaLinha.insertCell().innerHTML = `<i onclick="excluirEmcomendas(this)" class="fa-solid fa-trash"></i>`;
  });
}

window.onload = carregarEncomendas; // Chama a função ao carregar a página.

function excluirEmcomendas(element) {
  const linha = element.parentNode.parentNode; //pega a linha inteira, não apenas a coluna que o botão está.
  const nome = linha.cells[0].textContent; // pega o txto da primeira cédula da linha (coluna Nome), essa serve pra identificar qual item está sendo excluído no localStorage.

  let lista = JSON.parse(localStorage.getItem("encomendas")) || [];
  lista = lista.filter((item) => item.nome !== nome); // filtra a lista mantendo apenas os itens com nome diferente do que foi clicado, ou seja, excluido.

  localStorage.setItem("encomendas", JSON.stringify(lista)); // atualiza a lista e salva no localStorage.
  linha.remove(); //Remove visualmente a linha da tabela no HTML.
}

const API_TOKEN = "dawZ2bQ1wSy5WGKEQe1BCUYTYn6IYFty";
const TABLE_ID = "955687";

const URL =
  `https://api.baserow.io/api/database/rows/table/${TABLE_ID}/?user_field_names=true`;

let dadosGlobais = [];

async function carregarDados() {

  const resposta = await fetch(URL, {
    headers: {
      Authorization: `Token ${API_TOKEN}`
    }
  });

  const dados = await resposta.json();

  dadosGlobais = dados.results;

  renderizarLista(dadosGlobais);
  updateDashboard(dados);

  console.log(dados);
}


// FUNÇÃO PARA RENDERIZAR A LISTA
function renderizarLista(listaDados) {

  const lista = document.getElementById("lista");

  lista.innerHTML = "";

  listaDados.forEach(item => {

    lista.innerHTML += `
      <div class="card">
        <h3>${item.Name}</h3>
        <p>Status: ${item["Status Automático"]}</p>
        <p>Quantidade: ${item.Quantidade}</p>
      </div>
    `;
  });
}


// FUNÇÃO PARA FILTRAR POR STATUS
function filtrarPorStatus(status) {

  const filtrados = dadosGlobais.filter(item =>
    item["Status Automático"] === status
  );

  renderizarLista(filtrados);
}


// DASHBOARD
const updateDashboard = (dados) => {

    var EmEstoque = 0;
    var BaixoEstoque = 0;
    var SemEstoque = 0;

    const block01 = document.getElementById("blockDashboard01");
    const block02 = document.getElementById("blockDashboard02");
    const block03 = document.getElementById("blockDashboard03");
    const block04 = document.getElementById("blockDashboard04");

    block01.innerHTML = `
        <h2>Itens Cadastrados</h2><br> ${dados.results.length}
    `;

    for (let x = 0; x < dados.results.length; x++) {

        if (dados.results[x]["Status Automático"] === "🟢 Em Estoque") {
            EmEstoque++;
        }

        if (dados.results[x]["Status Automático"] === "🟠 Baixo Estoque") {
            BaixoEstoque++;
        }

        if (dados.results[x]["Status Automático"] === "🔴 Sem Estoque") {
            SemEstoque++;
        }
    }

    block02.innerHTML = `
        <h2>Em Estoque</h2><br> ${EmEstoque}
    `;

    block03.innerHTML = `
        <h2>Sem Estoque</h2><br> ${SemEstoque}
    `;

    block04.innerHTML = `
        <h2>Baixo Estoque</h2><br> ${BaixoEstoque}
    `;
}

carregarDados();
function openDashboard(status) {

    const listDashboard = document.getElementById("lista_dashboard");
    const bottomX = document.getElementById("SairDashBoard");

    // filtra os dados pelo status recebido
    const filtrados = dadosGlobais.filter(item =>
        item["Status Automático"] === status
    );

    // limpa a lista
    listDashboard.innerHTML = "";

    // adiciona somente os itens filtrados
    filtrados.forEach(item => {

        listDashboard.innerHTML += `
            <div class="card">
                <h3>${item.Name}</h3>
                <p>Status: ${item["Status Automático"]}</p>
                <p>Quantidade: ${item.Quantidade}</p>
            </div>
        `;
    });
    listDashboard.style.display = "block";
    bottomX.style.display = "block"
}

function sairDashBoard() {
    const listDashboard = document.getElementById("lista_dashboard");
    const bottomX = document.getElementById("SairDashBoard");
    listDashboard.style.display = "none";
    bottomX.style.display = "block"
}

const API_TOKEN = "dawZ2bQ1wSy5WGKEQe1BCUYTYn6IYFty";
const TABLE_ID = "955687";

const URL =
  `https://api.baserow.io/api/database/rows/table/${TABLE_ID}/?user_field_names=true`;



async function carregarDados() {

  const resposta = await fetch(URL, {
    headers: {
      Authorization: `Token ${API_TOKEN}`
    }
  });

  const dados = await resposta.json();

  const lista = document.getElementById("lista");

  lista.innerHTML = "";
  
  updateDashboard(dados);
  console.log(dados)
  dados.results.forEach(item => {

    lista.innerHTML += `
      <div class="card">
        <h3>${item.Name}</h3>
        <p>Status: ${item.Quantidade}</p>
      </div>
    `;
  });
}

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
            EmEstoque ++;
        } else {
            
        }        
    }
    block02.innerHTML = `
        <h2>Em Estoque</h2><br> ${EmEstoque}
    `;
    for (let x = 0; x < dados.results.length; x++) {
        if (dados.results[x]["Status Automático"] === "🟠 Baixo Estoque") {
            BaixoEstoque ++;
        } else {
            
        }        
    }
    block04.innerHTML = `
        <h2>Em Estoque</h2><br> ${BaixoEstoque}
    `;
    for (let x = 0; x < dados.results.length; x++) {
        if (dados.results[x]["Status Automático"] === "🔴 Sem Estoque") {
            SemEstoque ++;
        } else {
            
        }        
    }
    block03.innerHTML = `
        <h2>Em Estoque</h2><br> ${SemEstoque}
    `;
}

carregarDados();

const openDashboard = (idDashBoard) => {
    switch (idDashBoard) {
        case "Itens Cadastrados":
            
            break;
        case "Em Estoque":

            break;
        case "Sem Estoque":

            break;
        case "Baixo Estoque":

            break;
        default:
            break;
    }
}

const getListaDashboard = () => {
    const lista_status = document.getElementById("lista_dashboard");
    const data_list = dados.results;

    for (let x = 0; x < data_list.length; x++) {
        if (data_list[x]["Status Automático"] == "🟢 Em Estoque") {
        lista_status.innerHTML += `
      <div class="card">
        <h3>${data_list[x].Name}</h3>
        <p>Status: ${data_list[x].Quantidade}</p>
      </div>
    `;
    }
        
    }
}

getListaDashboard();

const API_TOKEN = "dawZ2bQ1wSy5WGKEQe1BCUYTYn6IYFty";
const TABLE_ID = "1873778";

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

  dados.results.forEach(item => {
    window.alert(item.Name);
  });
}
carregarDados();
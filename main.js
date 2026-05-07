
const API_TOKEN = "dawZ2bQ1wSy5WGKEQe1BCUYTYn6IYFty";
const TABLE_ID = "1873778";

const url = `api.baserow.io/api/database/rows/table/${TABLE_ID}/?user_field_names=true`;

async function getApi() {
    const resposta = await fetch(url, {
        headers: {
            Authorization: `Token ${API_TOKEN}`
        }
    })
    const dados = await resposta.json();
    const list = document.getElementById("Lista");
    list.innerHTML = "";
    dados.results.forEach(element => {
        
    });
}


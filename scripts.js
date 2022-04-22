let API = axios.get("https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes");
//https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes


// Douglas
function receberQuizz() {
    const quizz1 = axios.get(`${API}/2`).then(carregarQuizz);
    document.querySelector(".layout-quizz");
}
console.log(receberQuizz);

// Douglas
API = axios.get("https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes")
//https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes

// Tela3
function criacaoQuizz1(){
    const conteudo = document.querySelector(".conteudo3");

    conteudo.innerHTML += `<div class="titulo3">
                                <p>Comece pelo começo</p>
                            </div>
                            <div class="criacaoBasica3">
                                <div class="organizaMsg3">
                                    <input id="1" type="text" placeholder="Título do seu quizz">
                                    <input id="2" type="url"  placeholder="URL da imagem do seu quizz">
                                    <input id="3" type="text" placeholder="Quantidade de perguntas do quizz">
                                    <input id="4" type="text" placeholder="Quantidade de níveis do quizz">
                                </div>
                            </div>
                            <div onclick="verifica()" class="botao3">
                                <p class="textoBotao3">Prosseguir para criar perguntas</p>
                            </div>`
    
}
function verifica(){
    const titulo = document.getElementById("1").value;
    const url = document.getElementById("2").value;
    const perguntas = document.getElementById("3").value;
    const nivel = document.getElementById("4").value;
    const urlOK = url.startsWith('https://');

    if(titulo.length < 20 || titulo.length > 65 || perguntas < 3 || nivel < 2 || !urlOK){
         alert("Preencha os dados corretamente");
    }
}







//TELA 2 - LETÍCIA 


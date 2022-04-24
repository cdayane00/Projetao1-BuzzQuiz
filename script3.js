let quizzes = [];

function pegarQuizz() {
    const promise = axios.get("https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes");
    promise.then(carregarQuizz);
    promise.catch(pegarQuizz);
}

function carregarQuizz(response) {
    quizzes = response.data;
    renderizarQuizzes();
}

const quizz = [];
const questoes = [];
const alternativas = [];


function pegarQuizz(){
    const promisse = axios.get("https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes");
    promisse.then(carregarQuizz);
}

function carregarQuizz(response){
    quizz = response.data;
    renderizarQuiz();
}

console.log(carregarQuizz);
console.log(quizz);

function renderizarQuizzes() {
    const listaQuizzes = document.querySelector(".quizz-site1")
    listaQuizzes.innerHTML += `
        <div class="layout-quizz1">
            <img class = "imgLayout-quizz1" src= "${quizzes.image}" alt="imagem-quizz">
            <span class="spanLayout-quizz1">${quizzes.title}</span>
        </div>`
}

console.log(renderizarQuizzes);

function esconderTela(){
    const trocar = document.querySelector(".tela2");
    trocar.innerHTML += `
    <div class="tela2 escondido"></div>`
}

console.log(esconderTela);

function acessarQuizz(){

}

// Responsividade, esconder tela
// Falta arrumar o degrade, "seus Quizzes", 
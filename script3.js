let quizz = [];
const questoes = [];
const alternativas = [];

pegarQuizz()

function pegarQuizz(){
    const promisse = axios.get("https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes")
    promisse.then(carregarQuizz)
    
}

function carregarQuizz(response){
    quizz = response.data;
    console.log(quizz)
    renderizarQuizzes();
}


function renderizarQuizzes() {
    const listaQuizzes = document.querySelector(".quizz-site1")
    listaQuizzes.innerHTML = ""
    for(i=0; i<quizz.length; i++){
        listaQuizzes.innerHTML += `
        <div class="layout-quizz1">
            <img class = "imgLayout-quizz1" src= "${quizz[i].image}" alt="imagem-quizz">
            <span class="spanLayout-quizz1">${quizz[i].title}</span>
        </div>`
    }
    
}


function esconderTela(){
    const trocar = document.querySelector(".tela2");
    trocar.innerHTML += `
    <div class="tela2 escondido"></div>`
}


function acessarQuizz(){

}

// Responsividade, esconder tela
// Falta arrumar o degrade, "seus Quizzes", 
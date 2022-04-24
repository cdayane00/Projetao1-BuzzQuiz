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

function renderizarQuiz(){
    const ulQuizz = document.querySelector(".tela2")
    ulQuizz.innerHTML = "";

    for(i = 0; i < quizz[i].length ; i++){
        if(quizz[i].id === 73){
            ulQuizz.innerHTML = `
        <div class="topo2">
            <img class = "image2" src= "${quizz[i].image}" alt="imagem-quizz">
            <span class = "titulo2">${quizz[i].title}</span>
        </div>


        <div class="pergunta2">
            
            <div class="cxEnunciado2" style="background-color: ${quizz[i].questions.color};">
                <span class ="enunciado2">${quizz[i].questions.title}</span>
            </div>
            
            <div class="alternativas2">
                <div class="alternativa2">
                    <img  class = "imgAlternativa2" src= "${quizz[i].questions.answers.image}" alt="alternativa1">
                    <span class = "txtAlternativa2">${quizz[i].questions.answers.title}</span>
                </div>                
            </div>`
        }
        
    }
}
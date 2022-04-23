const quizz = [];

function pegarQuizz(){
    const promisse = axios.get("https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes");
    promisse.then(carregarQuizz);
}

function carregarQuizz(response){
    quizz = response.data;
    renderizarQuiz();
}
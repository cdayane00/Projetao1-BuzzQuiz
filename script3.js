let quizzes = [];
let idQuizz;

pegarQuizzes();

function pegarQuizzes() {
    const promise = axios.get("https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes");
    promise.then(carregarQuizzes);
    console.log(pegarQuizzes);
}

function carregarQuizzes(response) {
    quizzes = response.data;
    console.log(quizzes);
    renderizarQuizzes();
}

function renderizarQuizzes() {
    const listaQuizzes = document.querySelector(".quizz-site1")
    listaQuizzes.innerHTML = "";
    for (i = 0; i < quizzes.length; i++) {
        listaQuizzes.innerHTML += `
        <div id = "${quizzes[i].id}" class="layout-quizz1" onclick = "acessarQuizz(this)">
            <div class = "imgLayout-quizz1">
                <img src= "${quizzes[i].image}" alt="imagem-quizz">
            </div>
            <div class = "spanLayout-quizz1">
                <span>${quizzes[i].title}</span>
            </div>
            <div class="degrade">
            </div>
        </div>`
    }
    console.log(renderizarQuizzes())
}

function paginaInicial(){
    const voltarInicio = document.querySelector(".conteudo1");
    voltarInicio.classList.remove("escondido");
    const sumirTela2 = document.querySelector(".tela2");
    sumirTela2.classList.add("escondido");
}

// function acessarQuizz(quizz) {
//     if (idQuizz === undefined){
//         let id = quizz.getAttribute("id");
//         idQuizz = id;
//     }
//     document.querySelector(".conteudo1").classList.add("escondido");
//     document.querySelector(".tela2").classList.remove("escondido");
//     let promise = axios.get(`${API}/${idQuizz}`);
//     promise.then(renderizarQuizz);
// }



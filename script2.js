let quizz =[];
let questoes = [];
let alternativas = [];
let respostas;
let isCorrectAnswer;
let certoErrado;
 pegarQuizz();

function pegarQuizz(){
    const promisse = axios.get("https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes")
    promisse.then(carregarQuizz)
}

function carregarQuizz(response){
    quizz = response.data;
    console.log(quizz)
    renderizarQuizz()
}

function renderizarQuizz(){
    const topoQuizz = document.querySelector(".topo2")
    topoQuizz.innerHTML = "";

    for (i=0; i<quizz.length; i++){
        if(quizz[i].id === 2160){
            // console.log(quizz[i].title)
            topoQuizz.innerHTML += `            
                <img class = "image2" src= "${quizz[i].image}" alt="imagem-quizz">
                <span class = "titulo2">${quizz[i].title}</span>
            `   
            questoes = quizz[i].questions;
            
            for (j=0; j<questoes.length; j++){
                const perguntasQuizz = document.querySelector(".perguntas2")
                perguntasQuizz.innerHTML += `
                <div class="pergunta2">
            
                <div class="cxEnunciado2" style="background-color: ${questoes[j].color};">
                    <span class ="enunciado2">${questoes[j].title}</span>
                </div>

                <div class="alternativas2 pergunt${j}"></div>

                </div>`

                alternativas = questoes[j].answers;
                alternativas.sort(function(){
                    return Math.random() - 0.5;
                })

                for(k=0; k<alternativas.length; k++){  
                    
                    isCorrectAnswer = alternativas[k].isCorrectAnswer;
                    // console.log(isCorrectAnswer)   
                    
                    respostas = document.querySelector(`.alternativas2.pergunt${j}`)
                    
                        respostas.innerHTML += `
                    <div class="alternativa2" onclick = "selecionado(this)">
                        <img  class = "imgAlternativa2" src= "${alternativas[k].image}" alt="alternativa1">
                        <span class = "txtAlternativa2">${alternativas[k].text}</span>
                    </div> `                   
                    
                    
                    
                    }
                }
            }
        }        
    
    
    }

function selecionado(altSelecionada){
    altSelecionada.classList.add("respostaSelecionada");
    
    let perguntaRespondida = altSelecionada.parentNode;  
    let todasRespostas = perguntaRespondida.querySelectorAll(".alternativa2")

    for(i=0; i < todasRespostas.length; i++){
        todasRespostas[i].classList.add("branco")
        todasRespostas[i].classList.add("desabilitar")
    }       
    perguntaRespondida.querySelector(".respostaSelecionada").classList.remove("branco") 
    
    

    let respostasErradas = perguntaRespondida.querySelectorAll("false")
    console.log(respostasErradas)
    for  (i  =  0 ;  i  <  respostasErradas.length ;  i ++ )  {
        respostasErradas[i].querySelector(".alternativa2").classList.add("txtVermelho")
    }
    
}


















            





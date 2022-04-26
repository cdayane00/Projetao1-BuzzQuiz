let quizz =[];
let questoes = [];
let alternativas = [];
let respostas;
let isCorrectAnswer;
let certoErrado;
let questoesRespondidas = 0;
let acertos = 0;
let niveis;
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
    topoQuizz.innerHTML = ""

    for (i=0; i<quizz.length; i++){
        if(quizz[i].id === 2880){
            
            
            topoQuizz.innerHTML += `            
                <img class = "image2" src= "${quizz[i].image}" alt="imagem-quizz">
                <span class = "titulo2">${quizz[i].title}</span>
            `   
            questoes = quizz[i].questions;
            niveis = quizz[i].levels;
            
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
                    isCorrectAnswer = null;
                    if(alternativas[k].isCorrectAnswer === true){
                        isCorrectAnswer = k
                    }
                    
                    console.log(isCorrectAnswer)   
                    
                    respostas = document.querySelector(`.alternativas2.pergunt${j}`)
                    
                        respostas.innerHTML += `
                    <div class="alternativa2" onclick = "selecionado(this, ${k})">
                        <img  class = "imgAlternativa2" src= "${alternativas[k].image}" alt="alternativa1">
                        <span class = "txtAlternativa2">${alternativas[k].text}</span>
                    </div> `                   
                    
                    
                    
                    }
                }
            }
        }        
    
    
    }

function selecionado(altSelecionada, index){
    questoesRespondidas += 1;
    altSelecionada.classList.add("respostaSelecionada");
    
    
    
    let perguntaRespondida = altSelecionada.parentNode;  
    let todasRespostas = perguntaRespondida.querySelectorAll(".alternativa2")

    for(i=0; i < todasRespostas.length; i++){
        todasRespostas[i].classList.add("branco")
        todasRespostas[i].classList.add("desabilitar")
    }       
    perguntaRespondida.querySelector(".respostaSelecionada").classList.remove("branco") 
    
    if(index === isCorrectAnswer){
        altSelecionada.classList.add("txtVerde")
        acertos += 1
    }
    else{
        altSelecionada.classList.add("txtVermelho")
    }  
    
    if(questoesRespondidas === questoes.length){
        nivel()
        
    }
    
}

function nivel(){
    let porcentagemAcertos = Math.round((acertos/questoes.length)/100)
    console.log(porcentagemAcertos)
    for (i = 0; i<niveis.length; i++){
        if (porcentagemAcertos >= niveis[i].minValue && porcentagemAcertos<niveis[i+1].minValue){
            let titleNivel = niveis[i].title;
            let textNivel = niveis[i].text;
            let imagemNivel = niveis[i].image;   
            
            let resultado = document.querySelector(".resultadoHTML")
            resultado.innerHTML += `
            <div class = "resultado">
            <div class = "porcentagem">
                <span>${porcentagemAcertos}% de acerto: ${titleNivel}</span>
            </div>
            <div class = "dadosResultado">
                <img  class = "imgResultado" src= "${imagemNivel}" alt="imagem do resultado">
                <span class = "txtResultado">${textNivel}</span>        
            </div>
            </div>`

            let botoes = document.querySelector(".botoes")
            botoes.innerHTML += `
            <div class="reiniciarQuizz" onclick = "reiniciar()"><span>Reiniciar Quizz</span></div>
            <div class="voltarHome"><span>Voltar para Home</span></div>`
        }

        if (porcentagemAcertos>=niveis[niveis.length-1].minValue) {
            let titleNivel = niveis[niveis.length-1].title;
            let textNivel = niveis[niveis.length-1].text;
            let imagemNivel = niveis[niveis.length-1].image;

            let resultado = document.querySelector(".resultadoHTML")
            resultado.innerHTML += `
            <div class = "resultado">
            <div class = "porcentagem">
                <span>${porcentagemAcertos}% de acerto: ${titleNivel}</span>
            </div>
            <div class = "dadosResultado">
                <img  class = "imgResultado" src= "${imagemNivel}" alt="imagem do resultado">
                <span class = "txtResultado">${textNivel}</span>        
            </div>
            </div>`

            let botoes = document.querySelector(".botoes")
            botoes.innerHTML += `
            <div class="reiniciarQuizz" onclick = "reiniciar()"><span>Reiniciar Quizz</span></div>
            <div class="voltarHome"><span>Voltar para Home</span></div>`
        }        
    }
}

function reiniciar(){
    location.reload();
}

























            





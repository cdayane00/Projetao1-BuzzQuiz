let API = "https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes";
let quizzes = [];
let idQuizz;
let quizz =[];
let questoes = [];
let alternativas = [];
let respostas;
let isCorrectAnswer;
let certoErrado;
let questoesRespondidas = 0;
let acertos = 0;
let nivel;
let i;
let cont=0;
let criaPerguntas;
let perg;
let niveis;
let conteudoPerg;
let objeto = {
    title: '',
    image: '',
    questions: [],
    levels: []
};
let conteudo;

pegarQuizzes();

function pegarQuizzes() {
    const promise = axios.get(API);
    promise.then(carregarQuizzes);
    console.log(`pegarQuizzes`);
}

function carregarQuizzes(response) {
    quizzes = response.data;
    console.log(quizzes);
    renderizarQuizzes();
}

function renderizarQuizzes() {
    const listaQuizzes = document.querySelector(".quizz-site1");
    listaQuizzes.innerHTML += ""
    for (i = 0; i < quizzes.length; i++) {
        listaQuizzes.innerHTML += `
        <div id ="${quizzes[i].id}"class="layout-quizz1" onclick = "acessarQuizz(this)">
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
    console.log("renderizarQuizzes")
}

function paginaInicial(){
    const voltarInicio = document.querySelector(".conteudo1");
    voltarInicio.classList.remove("escondido");
    const sumirTela2 = document.querySelector(".tela2");
    sumirTela2.classList.add("escondido");
}

function acessarQuizz(quizzes) {
    if (idQuizz === undefined){
        let id = quizzes.getAttribute("id");
        idQuizz = id;
    }
    document.querySelector(".conteudo1").classList.add("escondido");
    document.querySelector(".tela2").classList.remove("escondido");
    let promise = axios.get(`${API}/${idQuizz}`);
    promise.then(renderizarQuizz(idQuizz));
    console.log(`acessarQuizz`);
}


// final tela 1

// function pegarQuizz(){
//     const promisse = axios.get(API);
//     promisse.then(carregarQuizz)
// }

// function carregarQuizz(response){
//     quizz = response.data;
//     console.log(quizz)
//     renderizarQuizz()
// }

function renderizarQuizz(idQuizz){
    const topoQuizz = document.querySelector(".topo2")
    topoQuizz.innerHTML = "";

    for (i=0; i<quizzes.length; i++){
        if(quizzes[i].id === 3045){
            // tentamos colocar a variavel idQuizz mas não deu certo
            
            topoQuizz.innerHTML += `            
                <img class = "image2" src= "${quizzes[i].image}" alt="imagem-quizz">
                <span class = "titulo2">${quizzes[i].title}</span>
            `   
            questoes = quizzes[i].questions;
            nivel = quizzes[i].levels;
            
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
    
    console.log(`renderizarQuizz`)
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
        nivel2()
        
    }
    
}

function nivel2(){
    let porcentagemAcertos = Math.round((acertos/questoes.length)/100)
    console.log(porcentagemAcertos)
    for (i = 0; i<nivel.length; i++){
        if (porcentagemAcertos >= nivel[i].minValue && porcentagemAcertos<nivel[i+1].minValue){
            let titleNivel = nivel[i].title;
            let textNivel = nivel[i].text;
            let imagemNivel = nivel[i].image;   
            
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

        if (porcentagemAcertos>=nivel[nivel.length-1].minValue) {
            let titleNivel = nivel[nivel.length-1].title;
            let textNivel = nivel[nivel.length-1].text;
            let imagemNivel = nivel[nivel.length-1].image;

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


function ehCor(cor){
    let verifcaCor;
    for(let i=1;i<cor.length;i++){
        if((cor.charCodeAt(i) >= 48 && cor.charCodeAt(i) <= 57) || (cor.charCodeAt(i) >= 65 && cor.charCodeAt(i) <=70) || (cor.charCodeAt(i) >= 97 && cor.charCodeAt(i) <= 102)){
            verifcaCor = true;
        }
        else{
            verifcaCor = false;
        }
    }
    if(cor[0] != "#"){
        verifcaCor = false;
    }
    if(cor.length < 7 || cor.length > 7){
        verifcaCor = false;
    }
    console.log(verifcaCor)
    return verifcaCor;
}
function ehUrl(url){
    const urlOK = url.startsWith('https://');
    return urlOK;
}

function criacaoQuizzBasico(){   
    
    const esconderTela1 = document.querySelector(".conteudo1");
    esconderTela1.classList.add("escondido");
    const mostrarTela3 = document.querySelector(".conteudo3CriacaoBasica");
    mostrarTela3.classList.remove("escondido");

    conteudo = document.querySelector(".conteudo3CriacaoBasica");

    conteudo.innerHTML += `<div class="titulo3">
                                <p>Comece pelo começo</p>
                            </div>
                            <div class="criacaoBasica3">
                                <div class="organizaMsg3">
                                    <input class="inputBasico3" id="a" type="text" placeholder="Título do seu quizz">
                                    <input class="inputBasico3" id="b" type="url"  placeholder="URL da imagem do seu quizz">
                                    <input class="inputBasico3" id="c" type="text" placeholder="Quantidade de perguntas do quizz">
                                    <input class="inputBasico3" id="d" type="text" placeholder="Quantidade de níveis do quizz">
                                </div>
                            </div>
                            <div onclick="verificaBasico()" class="botao3">
                                <p class="textoBotao3">Prosseguir para criar perguntas</p>
                            </div>`
}
function esconde(classe){
    classe.classList.add("escondido");
}
let perguntas;
let nivel3;

function verificaBasico(){
    const mostrarTela3 = document.querySelector(".conteudo3CriacaoPerguntas");
    mostrarTela3.classList.remove("escondido");

    const titulo = document.getElementById("a").value;
    const url = document.getElementById("b").value;
    perguntas = document.getElementById("c").value;
    nivel3 = document.getElementById("d").value;
    
    objeto.title = titulo;
    objeto.image = url;

    if(titulo.length < 20 || titulo.length > 65 || perguntas < 3 || nivel3 < 2 || !ehUrl(url)){
        alert("Preencha os dados corretamente");
    }
    else{
        esconde(conteudo);
        criacaoQuizzPerguntas();
    }
}

function criacaoQuizzPerguntas(){

    const mostrarTela3 = document.querySelector(".conteudo3CriacaoNiveis");
    mostrarTela3.classList.remove("escondido");

    conteudoPerg = document.querySelector(".conteudo3CriacaoPerguntas");
    perg = Number(perguntas);
    conteudoPerg.innerHTML += `<div class="titulo3Perg">
                                <p>Crie suas perguntas</p>
                            </div>
                            <div class="aquiPerg">
                            </div>`
    const criaPergunta1 = document.querySelector(".aquiPerg");
    for(i=1;i<=perg;i++){
        criaPergunta1.innerHTML += `<div class="criacaoPerguntas3">
                                        <div class="organizaMsg3Perg">
                                            <p class="pergunta3">Pergunta ${i}</p>
                                            <input class="inputPerguntas3" id="${i}-questao" type="text" placeholder="Texto da pergunta">
                                            <input class="inputPerguntas3 espaco" id="${i}-cor" type="text"  placeholder="Cor de fundo da pergunta">
                                            
                                            <p class="pergunta3 espaco">Resposta correta</p>
                                            <input class="inputPerguntas3" id="${i}-respostaCorreta" type="text" placeholder="Resposta correta">
                                            <input class="inputPerguntas3 espaco" id="${i}-urlCorreta" type="url" placeholder="URL da imagem">
                                            
                                            <p class="pergunta3 espaco">Respostas incorretas</p>
                                            <input class="inputPerguntas3" id="${i}-respostaIncorreta1" type="text" placeholder="Resposta incorreta 1">
                                            <input class="inputPerguntas3 espaco" id="${i}-urlIncorreta1" type="url" placeholder="URL da imagem 1">

                                            <input class="inputPerguntas3" id="${i}-respostaIncorreta2" type="text" placeholder="Resposta incorreta 2">
                                            <input class="inputPerguntas3 espaco" id="${i}-urlIncorreta2" type="url" placeholder="URL da imagem 2">

                                            <input class="inputPerguntas3" id="${i}-respostaIncorreta3" type="text" placeholder="Resposta incorreta 3">
                                            <input class="inputPerguntas3" id="${i}-urlIncorreta3" type="url" placeholder="URL da imagem 3">
                                        </div>
                                    </div>`                               
    }
    const botao = document.querySelector(".conteudo3CriacaoPerguntas");
    botao.innerHTML+= `<div onclick="validaQuestao()" class="botao3">
                            <p class="textoBotao3">Prosseguir para criar níveis</p>
                        </div>`
}

let verificaTudoResposta;
function verificaRespostas(i){

    const textoPergunta = document.getElementById(`${i+1}-questao`).value;
    const cor = document.getElementById(`${i+1}-cor`).value;
    const respostaCorreta = document.getElementById(`${i+1}-respostaCorreta`).value;
    const urlRespCorreta = document.getElementById(`${i+1}-urlCorreta`).value;
    const respostaErrada1 = document.getElementById(`${i+1}-respostaIncorreta1`).value;
    const urlRespErrada1 = document.getElementById(`${i+1}-urlIncorreta1`).value;
    const respostaErrada2 = document.getElementById(`${i+1}-respostaIncorreta2`).value;
    const urlRespErrada2 = document.getElementById(`${i+1}-urlIncorreta2`).value;
    const respostaErrada3 = document.getElementById(`${i+1}-respostaIncorreta3`).value;
    const urlRespErrada3 = document.getElementById(`${i+1}-urlIncorreta3`).value;

    let Objquestoes = {
        title: '',
        color: '',
        answers: []
    }
    let ObjrespostaCorreta = {
        text: '',
        image: '',
        isCorrectAnswer: true
    }
    let ObjRespostaIncorreta1 = {
        text: '',
        image: '',
        isCorrectAnswer: false
    }
    let ObjRespostaIncorreta2 = {
        text: '',
        image: '',
        isCorrectAnswer: false
    }
    let ObjRespostaIncorreta3 = {
        text: '',
        image: '',
        isCorrectAnswer: false
    }
    
    Objquestoes.title = textoPergunta;
    Objquestoes.color = cor;
    ObjrespostaCorreta.text = respostaCorreta;
    ObjrespostaCorreta.image = urlRespCorreta;
    ObjRespostaIncorreta1.text = respostaErrada1;
    ObjRespostaIncorreta1.image = urlRespErrada1;
    ObjRespostaIncorreta2.text = respostaErrada2;
    ObjRespostaIncorreta2.image = urlRespErrada2;
    ObjRespostaIncorreta3.text = respostaErrada3;
    ObjRespostaIncorreta3.image = urlRespErrada3;

    Objquestoes.answers.push(ObjrespostaCorreta);
    Objquestoes.answers.push(ObjRespostaIncorreta1);
    if(respostaErrada2 !== ""){
        Objquestoes.answers.push(ObjRespostaIncorreta2);
    }
    if(respostaErrada3 !== ""){
        Objquestoes.answers.push(ObjRespostaIncorreta3);
    }
    objeto.questions.push(Objquestoes);

    let verificaPergunta = textoPergunta.length >= 20;
    let verificaCor = ehCor(cor);
    let verificaCorreta = respostaCorreta !== "";
    let verificaUrlCorreta = ehUrl(urlRespCorreta);
    let verificaRespostasErradas = (respostaErrada1 !== "" || respostaErrada2 !== "" || respostaErrada3 !== "");
    let verificaUrlsErradas = (ehUrl(urlRespErrada1) || ehUrl(urlRespErrada2) || ehUrl(urlRespErrada3));


    verificaTudoResposta = (verificaPergunta && verificaCor && verificaCorreta && verificaUrlCorreta && verificaRespostasErradas && verificaUrlsErradas == true);
    return verificaTudoResposta;
}

function validaQuestao(){
    let valida = true;
    for(let i=0;i<perg;i++){
        let verifica = verificaRespostas(i);
        valida = verifica && valida;
    }
    if(verificaTudoResposta==false || valida == false){
        alert("Preencha os dados corretamente");
    }
    else{
        esconde(conteudoPerg);
        criacaoQuizzNiveis();
    }
}
let conteudoNiveis;
function criacaoQuizzNiveis(){
    const mostrarTela3 = document.querySelector(".conteudo3QuizzPronto");
    mostrarTela3.classList.remove("escondido");

    conteudoNiveis = document.querySelector(".conteudo3CriacaoNiveis");
    niveis = Number(nivel3);
    conteudoNiveis.innerHTML += `<div class="titulo3Perg">
                                <p>Agora, decida os níveis</p>
                            </div>
                            <div class="aquiNiveis">
                            </div>`
    const criaNiveis = document.querySelector(".aquiNiveis");
    for(let i=1;i<=niveis;i++){
        criaNiveis.innerHTML += `<div class="criacaoNiveis3">
                                    <div class="organizaMsg3Perg">
                                        <p class="pergunta3">Nível ${i}</p>
                                        <input class="inputNiveis3" id="${i}-titulo" type="text" placeholder="Título do nível">
                                        <input class="inputNiveis3" id="${i}-acerto" type="text"  placeholder="% de acerto mínima">
                                        <input class="inputNiveis3" id="${i}-urlNivel" type="url" placeholder="URL da imagem do nível">
                                        <input class="inputNiveisDesc3" id="${i}-descNivel" type="text" placeholder="Descrição do nível">
                                    </div>
                                </div>`
    }
    const botao = document.querySelector(".conteudo3CriacaoNiveis");
    botao.innerHTML+= `<div onclick="verificaNiveis()" class="botao3">
                            <p class="textoBotao3">Finalizar Quizz</p>
                        </div>`
}
let verificaTudoNiveis;
function verificaNiveis(){

    objeto.levels = [];

    for(let i=0; i<niveis;i++){

        let ObjNivel = {
            title: '',
            image: '',
            text: '',
            minValue: ''
        }
        
        const tituloNivel = document.getElementById(`${i+1}-titulo`).value;
        const porcentagemAcerto = document.getElementById(`${i+1}-acerto`).value;
        const urlNivel = document.getElementById(`${i+1}-urlNivel`).value;
        const descricaoNivel = document.getElementById(`${i+1}-descNivel`).value;

        ObjNivel.title = tituloNivel;
        ObjNivel.image = urlNivel;
        ObjNivel.text = descricaoNivel;
        ObjNivel.minValue = porcentagemAcerto;
        objeto.levels.push(ObjNivel);

        let porcentagem = Number(porcentagemAcerto);
        let verificaTitulo = tituloNivel.length >= 10;
        let verificaPorcentagem = porcentagem >= 0 && porcentagem <= 100 && porcentagemAcerto !== "";
        let verificaurl = ehUrl(urlNivel);
        let verificaDescricao = descricaoNivel.length >= 30;

        verificaTudoNiveis = (verificaTitulo && verificaPorcentagem && verificaurl && verificaDescricao == true);
        if(verificaTudoNiveis == true){
        }
        else{
            alert("Preencha os dados corretamente");
            break;
        }
    }
    const porcentagem = Number(document.getElementById(`1-acerto`).value);
    if(porcentagem !== 0){
        alert("O primeiro nível deve ser 0");
    }  
    else{
        esconde(conteudoNiveis);
        quizzPronto();
        armazenaQuizz();
    }
}
function armazenaQuizz(){
    const promisse = axios.post("https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes",objeto);
    console.log(objeto);
    promisse.catch(erro);
}
function erro(error){
    console.log(error.response.data);
    alert("Erro");
}
function quizzPronto(){
    const conteudo = document.querySelector(".conteudo3QuizzPronto");
    conteudo.innerHTML += `<div class="titulo3Perg">
                                <p>Seu quizz está pronto!</p>
                            </div>
                            <div class="quizz3">
                                <div class="imgLayout-quizz1">
                                    <img src="${objeto.image}">
                                </div>
                                <div class="textoImg">
                                    <p>${objeto.title}</p>
                                </div>
                                
                            </div>`
    const botao1 =  document.querySelector(".conteudo3QuizzPronto");
    botao1.innerHTML += `<div onclick="" class="botao3">
                             <p class="textoBotao3">Acessar Quizz</p>
                         </div>
                         <p class="voltaHome" onclick = "paginaInicial()"> Voltar para home</p>`
}

//-----------------FIM TELA 3--------------------------







let objeto = {
    title: '',
    image: '',
    questions: [],
    levels: []
};

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
let conteudo;
function criacaoQuizzBasico(){    
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
let nivel;
function verificaBasico(){
    const titulo = document.getElementById("a").value;
    const url = document.getElementById("b").value;
    perguntas = document.getElementById("c").value;
    nivel = document.getElementById("d").value;
    
    objeto.title = titulo;
    objeto.image = url;

    if(titulo.length < 20 || titulo.length > 65 || perguntas < 3 || nivel < 2 || !ehUrl(url)){
        alert("Preencha os dados corretamente");
    }
    else{
        esconde(conteudo);
        criacaoQuizzPerguntas();
    }
}
let i;
let cont=0;
let criaPerguntas;
let perg;
let niveis;
let conteudoPerg;
function criacaoQuizzPerguntas(){
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

    conteudoNiveis = document.querySelector(".conteudo3CriacaoNiveis");
    niveis = Number(nivel);
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
                         <p class="voltaHome"> Voltar para home</p>`
}

//-----------------FIM TELA 3--------------------------






//TELA 2 - LETÍCIA 


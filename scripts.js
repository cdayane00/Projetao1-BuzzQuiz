let API = `https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes`;
//https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes

// -----------------------INICIO TELA 3-------------------------------
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
                                    <input class="inputBasico3" id="1" type="text" placeholder="Título do seu quizz">
                                    <input class="inputBasico3" id="2" type="url"  placeholder="URL da imagem do seu quizz">
                                    <input class="inputBasico3" id="3" type="text" placeholder="Quantidade de perguntas do quizz">
                                    <input class="inputBasico3" id="4" type="text" placeholder="Quantidade de níveis do quizz">
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
function verificaBasico(){
    const titulo = document.getElementById("1").value;
    const url = document.getElementById("2").value;
    perguntas = document.getElementById("3").value;
    const nivel = document.getElementById("4").value;
    

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
function criacaoQuizzPerguntas(){
    const conteudo = document.querySelector(".conteudo3CriacaoPerguntas");
    perg = Number(perguntas);
    conteudo.innerHTML += `<div class="titulo3Perg">
                                <p>Crie suas perguntas</p>
                            </div>
                            <div class="aqui">
                            </div>`
    const criaPergunta1 = document.querySelector(".aqui");
    for(i=0;i<perg;i++){
        criaPergunta1.innerHTML += `<div class="criacaoPerguntas3">
                                        <div class="organizaMsg3Perg">
                                            <p class="pergunta3">Pergunta ${i+1}</p>
                                            <input class="inputPerguntas3" id="5" type="text" placeholder="Texto da pergunta">
                                            <input class="inputPerguntas3 espaco" id="6" type="text"  placeholder="Cor de fundo da pergunta">
                                            <p class="pergunta3 espaco">Resposta correta</p>
                                            <input class="inputPerguntas3" id="7" type="text" placeholder="Resposta correta">
                                            <input class="inputPerguntas3 espaco" id="8" type="url" placeholder="URL da imagem">
                                            <p class="pergunta3 espaco">Respostas incorretas</p>
                                            <input class="inputPerguntas3" id="9" type="text" placeholder="Resposta incorreta 1">
                                            <input class="inputPerguntas3 espaco" id="10" type="url" placeholder="URL da imagem 1">

                                            <input class="inputPerguntas3" id="11" type="text" placeholder="Resposta incorreta 2">
                                            <input class="inputPerguntas3 espaco" id="12" type="url" placeholder="URL da imagem 2">

                                            <input class="inputPerguntas3" id="13" type="text" placeholder="Resposta incorreta 3">
                                            <input class="inputPerguntas3" id="14" type="url" placeholder="URL da imagem 3">
                                        </div>
                                    </div>`                               
    }
    const botao = document.querySelector(".conteudo3CriacaoPerguntas");
    botao.innerHTML+= `<div onclick="verificaRespostas()" class="botao3">
                            <p class="textoBotao3">Prosseguir para criar níveis</p>
                        </div>`
}

function verificaRespostas(){
    let cont =0;

    const textoPergunta = document.getElementById("5").value;
    const cor = document.getElementById("6").value;
    const respostaCorreta = document.getElementById("7").value;
    const urlRespCorreta = document.getElementById("8").value;
    const respostaErrada1 = document.getElementById("9").value;
    const urlRespErrada1 = document.getElementById("10").value;
    const respostaErrada2 = document.getElementById("11").value;
    const urlRespErrada2 = document.getElementById("11").value;
    const respostaErrada3 = document.getElementById("13").value;
    const urlRespErrada3 = document.getElementById("14").value;

    if(textoPergunta.length < 20 || ehCor(cor) === false || respostaCorreta.length < 20 || respostaErrada1.length < 20 || !ehUrl(urlRespCorreta) || !ehUrl(urlRespErrada1)){
        alert("Preencha os dados corretamente");
    } 
    cont++; 
    
    
}


//-----------------FIM TELA 3--------------------------






//TELA 2 - LETÍCIA 


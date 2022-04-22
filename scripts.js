let API = axios.get("https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes");
//https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes

// -----------------------INICIO TELA 3-------------------------------
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
    classe.classList.add("esconde");
}
let perguntas;
function verificaBasico(){
    const titulo = document.getElementById("1").value;
    const url = document.getElementById("2").value;
    perguntas = document.getElementById("3").value;
    const nivel = document.getElementById("4").value;
    const urlOK = url.startsWith('https://');

    if(titulo.length < 20 || titulo.length > 65 || perguntas < 3 || nivel < 2 || !urlOK){
         alert("Preencha os dados corretamente");
    }
    else{
        esconde(conteudo);
        criacaoQuizzPerguntas();
    }
}
let i;
let cont=0;
function criacaoQuizzPerguntas(){
    const conteudo = document.querySelector(".conteudo3CriacaoPerguntas");
    let perg = Number(perguntas);
    conteudo.innerHTML += `<div class="titulo3Perg">
                                <p>Crie suas perguntas</p>
                            </div>
                            <div class="aqui">
                            </div>`
    const criaPergunta1 = document.querySelector(".aqui");
    criaPergunta1.innerHTML += `<div class="criacaoPerguntas3">
                                    <div class="organizaMsg3Perg">
                                        <p class="pergunta3">Pergunta 1</p>
                                        <input class="inputPerguntas3" id="1" type="text" placeholder="Texto da pergunta">
                                        <input class="inputPerguntas3 espaco" id="2" type="text"  placeholder="Cor de fundo da pergunta">
                                        <p class="pergunta3 espaco">Resposta correta</p>
                                        <input class="inputPerguntas3" id="3" type="text" placeholder="Resposta correta">
                                        <input class="inputPerguntas3 espaco" id="4" type="url" placeholder="URL da imagem">
                                        <p class="pergunta3 espaco">Respostas incorretas</p>
                                        <input class="inputPerguntas3" id="3" type="text" placeholder="Resposta incorreta 1">
                                        <input class="inputPerguntas3 espaco" id="4" type="url" placeholder="URL da imagem 1">

                                        <input class="inputPerguntas3" id="3" type="text" placeholder="Resposta incorreta 2">
                                        <input class="inputPerguntas3 espaco" id="4" type="url" placeholder="URL da imagem 2">

                                        <input class="inputPerguntas3" id="3" type="text" placeholder="Resposta incorreta 3">
                                        <input class="inputPerguntas3" id="4" type="url" placeholder="URL da imagem 3">
                                    </div>
                                </div>
                                <div class="aqui2">
                                </div>`
    const criaPerguntas = document.querySelector(".aqui2");
    for(i=1;i<perg;i++){
       criaPerguntas.innerHTML += `<div class="criacaoPerguntas3-1">
                                        <div class="organizaMsg3Perg">
                                            <p class="pergunta3">Pergunta ${i+1}</p>
                                            <ion-icon onclick="mostraPerg()" class="iconPerg" name="create-outline"></ion-icon>
                                        </div>
                                    </div>`
    }
}
function mostraPerg(){
    
}
//-----------------FIM TELA 3--------------------------






//TELA 2 - LETÍCIA 


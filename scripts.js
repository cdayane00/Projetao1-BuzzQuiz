let API = axios.get("https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes")
//https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes

// Tela3
function criacaoQuizz1(){
    const conteudo = document.querySelector(".conteudo3");

    conteudo.innerHTML += `<div class="titulo">
                                <p>Comece pelo começo</p>
                            </div>
                            <div class="criacaoBasica">
                                <div class="organizaMsg">
                                    <input type="text" placeholder="Título do seu quizz">
                                    <input type="url" placeholder="URL da imagem do seu quizz">
                                    <input type="text" placeholder="Quantidade de perguntas do quizz">
                                    <input type="text" placeholder="Quantidade de níveis do quizz">
                                </div>
                            </div>
                            <div onclick="verifica()" class="botao">
                                <p class="textoBotao">Prosseguir para criar perguntas</p>
                            </div>`
}
function verifica(){
    let titulo = document.getElementById("1").value;
    let url = document.getElementById("2").value;
    if(titulo.length < 20 || titulo.length > 65){
        alert("Preencha os dados corretamente titulo");
    }

}







//TELA 2 - LETÍCIA 


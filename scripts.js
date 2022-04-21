let API = axios.get("https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes");
//https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes


// Douglas
function receberQuizz() {
    const quizz1 = axios.get(`${API}/2`).then(carregarQuizz);
    document.querySelector(".layout-quizz");
}
console.log(receberQuizz);

// Douglas
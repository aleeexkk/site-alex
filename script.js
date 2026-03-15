// Seleciona o botão e o parágrafo onde o texto vai aparecer
const botaoMisturar = document.getElementById('btn-misturar');
const textoResultado = document.getElementById('resultado-mistura');

// Adiciona um evento de clique ao botão
botaoMisturar.addEventListener('click', function() {
    textoResultado.innerText = "Você misturou Café Expresso com Poeira de Cometa! ☄️☕ Cliente satisfeito!";
});
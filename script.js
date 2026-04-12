// Laboratório de Misturas
const botaoMisturar = document.getElementById('btn-misturar');
const textoResultado = document.getElementById('resultado-mistura');

// Array com várias misturas diferentes para ficar mais divertido
const misturas = [
    "✨ Você misturou Café Expresso com Poeira de Cometa! Cliente satisfeito!",
    "🌙 Você preparou um Latte de Leite Lunar com Xarope de Plutão! Delicioso!",
    "🌌 Você serviu um Cappuccino de Matéria Escura. O alienígena adorou!",
    "🪵 Você criou um Chá de Casca de Árvore Estelar. Relaxamento puro!",
    "🎵 Você serviu um Pingado Quântico ao som de Jazz. Perfeito!"
];

botaoMisturar.addEventListener('click', function() {
    // Efeito de carregamento rápido
    textoResultado.innerText = "Misturando ingredientes... ⏳";
    
    setTimeout(() => {
        // Escolhe uma mistura aleatória do array
        const misturaAleatoria = misturas[Math.floor(Math.random() * misturas.length)];
        textoResultado.innerText = misturaAleatoria;
    }, 600); // Demora meio segundo para dar emoção
});

// Sistema de Avaliações (Front-end visual)
const formReview = document.getElementById('form-review');

formReview.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede a página de recarregar
    
    const nome = document.getElementById('nome-cliente').value;
    
    // Mostra um alerta amigável
    alert(`Obrigado pela sua avaliação intergaláctica, ${nome}! O barista Lucas agradece.`);
    
    // Limpa o formulário
    formReview.reset();
});

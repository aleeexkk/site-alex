// Verificação de idade (mínimo em anos — altere se precisar, ex.: 18)
const IDADE_MINIMA = 13;
const STORAGE_CHAVE = 'cafeEspacial_idadeVerificada';

const overlayIdade = document.getElementById('overlay-idade');
const formIdade = document.getElementById('form-idade');
const inputIdade = document.getElementById('input-idade');
const msgErroIdade = document.getElementById('idade-erro');
const introIdade = document.getElementById('overlay-idade__intro');

function liberarSite() {
    overlayIdade.classList.add('overlay-idade--fechado');
    document.body.classList.remove('body--idade-bloqueada');
    try {
        localStorage.setItem(STORAGE_CHAVE, '1');
    } catch (e) {
        /* ignore */
    }
}

function mostrarErroIdade(texto) {
    msgErroIdade.textContent = texto;
    msgErroIdade.hidden = false;
}

if (overlayIdade && formIdade) {
    let jaVerificado = false;
    try {
        jaVerificado = localStorage.getItem(STORAGE_CHAVE) === '1';
    } catch (e) {
        jaVerificado = false;
    }

    if (jaVerificado) {
        liberarSite();
    } else {
        document.body.classList.add('body--idade-bloqueada');
        if (introIdade) {
            introIdade.textContent =
                'Bem-vindo ao Café Espacial. O conteúdo é indicado para maiores de ' +
                IDADE_MINIMA +
                ' anos. Informe sua idade para continuar.';
        }
        inputIdade.focus();
        formIdade.addEventListener('submit', function (event) {
            event.preventDefault();
            msgErroIdade.hidden = true;
            const idade = parseInt(inputIdade.value, 10);
            if (Number.isNaN(idade) || idade < 0) {
                mostrarErroIdade('Informe uma idade válida.');
                return;
            }
            if (idade < IDADE_MINIMA) {
                mostrarErroIdade(
                    'Desculpe, este conteúdo é indicado para maiores de ' + IDADE_MINIMA + ' anos. Você não pode acessar o site.'
                );
                return;
            }
            liberarSite();
        });
    }
}

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


document.addEventListener('DOMContentLoaded', () => {
    console.log('Portal Agrinho 2026 carregado com sucesso!');

    
    const botoes = document.querySelectorAll('.btn-primario');

    
    botoes.forEach(botao => {
        botao.addEventListener('click', (evento) => {
            
            const tema = evento.target.getAttribute('data-tema');
            exibirMensagemEducativa(tema);
        });
    });
});


function exibirMensagemEducativa(tema) {
    let mensagem = "";

    switch(tema) {
        case 'agro':
            mensagem = "🌱 Segurança Alimentar:\nA agroecologia produz alimentos livres de defensivos sintéticos prejudiciais, protegendo a saúde de quem planta e de quem consome!";
            break;
        case 'solo':
            mensagem = "🪱 Solo Vivo:\nA cobertura do solo, a adubação verde e a rotação de culturas barram a erosão e estimulam os microrganismos que fertilizam a terra de modo sustentável.";
            break;
        case 'fauna':
            mensagem = "🐞 Controle Biológico:\nA fauna nativa (como joaninhas e pássaros) serve de controle biológico ao atacar insetos que danificam lavouras, reduzindo a pegada ecológica da produção.";
            break;
        default:
            mensagem = "Incrível! Você está descobrindo a sustentabilidade e a preservação do meio ambiente.";
    }

    
    alert(mensagem);
}

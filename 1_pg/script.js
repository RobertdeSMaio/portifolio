const prompt = require ('readline-sync');

document.addEventListener("DOMContentLoaded", function() {
    let retangulo5 = document.getElementById("retangulo5");

    // Função para verificar a posição da página ao rolar
    function verificarPosicao() {
        // Pega a posição vertical atual da página
        let posicaoScroll = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

        // Define a altura onde o retângulo deve aparecer
        let alturaAparecer = window.innerHeight / 2; // Aparece quando a metade da janela estiver visível

        // Se o scroll estiver abaixo da altura definida, mostra o retângulo, caso contrário, esconde
        if (posicaoScroll > alturaAparecer) {
            retangulo5.classList.add("mostrar");
        } else {
            retangulo5.classList.remove("mostrar");
        }
    }

    // Evento de rolagem da página
    window.addEventListener("scroll", verificarPosicao);
});
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os links de navegação
    const navLinks = document.querySelectorAll('nav a');

    // Adiciona um ouvinte de eventos para cada link
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Previne o comportamento padrão do link

            // Obtém o id do alvo a partir do href do link
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Usa o scrollIntoView para centralizar a seção na tela
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center' // Centraliza verticalmente
                });
            }
        });
    });
});

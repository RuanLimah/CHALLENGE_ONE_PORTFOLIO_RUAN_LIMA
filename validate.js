document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formularioContato');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário
        
        // Captura dos campos do formulário
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const assunto = document.getElementById('assunto').value;
        const mensagem = document.getElementById('mensagem').value;

        // Validação dos campos
        if (nome.trim() === '' || email.trim() === '' || assunto.trim() === '' || mensagem.trim() === '') {
            alert('Por favor, preencha todos os campos do formulário.');
            return; // Impede o envio do formulário se algum campo estiver vazio
        }

        });
    });
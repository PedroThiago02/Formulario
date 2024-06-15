// Selecionando o formulário e adicionando um evento de escuta para o envio
        document.getElementById('form1').addEventListener('submit', function(event) {
            // Capturando os valores dos campos de Email e Nome
            var nomeValue = document.getElementById('nome').value.trim();
            var emailValue = document.getElementById('email').value.trim();
            
            // Validando se ambos os campos estão preenchidos
            if (nomeValue === '' || emailValue === '') {
                // Se algum campo estiver vazio, impedir o envio do formulário
                event.preventDefault();
                // Exibir mensagem de erro (pode ser alert, mensagem na tela, etc.)
                alert('Por favor, preencha os campos obrigatórios: Nome e Email.');
            }
            // Se ambos os campos estiverem preenchidos, o formulário será enviado normalmente
        });

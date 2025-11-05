// Espera o DOM (HTML) carregar completamente antes de rodar o script
document.addEventListener('DOMContentLoaded', () => {

    // --- NOVO: LÓGICA DO MENU HAMBÚRGUER ---
    const menuBtn = document.getElementById('menu-toggle-btn');
    const navLinksList = document.getElementById('navbar-links-list');

    if (menuBtn && navLinksList) {
        menuBtn.addEventListener('click', () => {
            // Adiciona/Remove a classe 'active' no botão (para o X)
            menuBtn.classList.toggle('active');
            
            // Adiciona/Remove a classe 'active' na lista (para mostrar/esconder)
            navLinksList.classList.toggle('active');
        });
    }
    // --- FIM DO NOVO BLOCO ---


    // --- LÓGICA DA PÁGINA DE CARDÁPIO ---
    
    // 1. Tenta encontrar o container do menu
    const menuContainer = document.getElementById('menu-container');

    // 2. Se ele existir (estamos na cardapio.html), carregue o menu
    if (menuContainer) {
        carregarCardapio();
    }

    // --- LÓGICA DA PÁGINA DE RESERVA (CONTATO) ---

    // 1. Tenta encontrar o formulário de reserva
    const formReserva = document.getElementById('form-reserva');
    const mensagemStatus = document.getElementById('mensagem-status');

    // 2. Se ele existir (estamos na contato.html), adicione o "escutador"
    if (formReserva) {
        formReserva.addEventListener('submit', (evento) => {
            
            // Impede o recarregamento padrão da página
            evento.preventDefault(); 

            // Coleta dos dados do formulário
            const dadosReserva = {
                nome: document.getElementById('nome').value,
                data: document.getElementById('data').value,
                pessoas: document.getElementById('pessoas').value,
                email: document.getElementById('email').value
            };

            // Exibe no console os dados que seriam enviados
            console.log("--- DADOS PRONTOS PARA ENVIAR PARA O BACK-END (JSON): ---");
            console.log(dadosReserva);
            
            // ----------------------------------------------------
            //  >>> PONTO DE ENTREGA PARA O BACK-END (Node.js) <<<
            // ----------------------------------------------------
            // Seu parceiro vai descomentar este bloco e implementar a API
            // O servidor (Node.js) deve estar rodando para isso funcionar.
            
            /* // O código do seu parceiro (usando fetch) vai entrar aqui:
            
            // A API (Node.js) provavelmente vai rodar em "http://localhost:3000"
            // (ou qualquer porta que seu parceiro configurar no Node.js)
            const API_URL = '/api/reservas'; // Rota relativa funciona bem

            fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dadosReserva), // Converte o objeto JS em texto JSON
            })
            .then(resposta => {
                if (!resposta.ok) {
                    // Se o servidor der um erro (ex: 500, 404)
                    throw new Error('Erro no servidor: ' + resposta.statusText);
                }
                return resposta.json(); // Pega a resposta do back-end
            })
            .then(dadosDaResposta => {
                // Sucesso! Mostra a mensagem do back-end (ex: "Reserva confirmada!")
                mensagemStatus.textContent = dadosDaResposta.mensagem;
                mensagemStatus.style.color = 'green';
                formReserva.reset(); // Limpa o formulário
            })
            .catch(erro => {
                // Erro! Mostra uma mensagem de erro (rede ou servidor)
                console.error('Erro ao enviar reserva:', erro);
                mensagemStatus.textContent = 'Erro ao enviar reserva. Tente novamente.';
                mensagemStatus.style.color = 'red';
            });
            */
           
            // ----------------------------------------------------
            // SIMULAÇÃO (para você testar sem o back-end)
            // APAGUE ISSO QUANDO O BACK-END ESTIVER PRONTO
            mensagemStatus.textContent = "Reserva enviada para simulação! (Front-end OK)";
            mensagemStatus.style.color = 'blue';
            console.log("Simulação de envio front-end concluída.");
            formReserva.reset();
            // ----------------------------------------------------
        });
    }

}); // Fim do 'DOMContentLoaded'


/**
 * Função que carrega o cardápio (simulação de API)
 */
function carregarCardapio() {
    // Dados Falsos (Mock). No futuro, o back-end enviará isso.
    const mockData = {
        entradas: [
            { nome: 'Bruschetta', preco: 'R$ 25,00', desc: 'Pão italiano, tomate fresco, alho e manjericão.' },
            { nome: 'Salada Caprese', preco: 'R$ 30,00', desc: 'Muçarela de búfala, tomate e manjericão.' }
        ],
        pratosPrincipais: [
            { nome: 'Carbonara', preco: 'R$ 55,00', desc: 'Massa fresca, guanciale, ovos e queijo pecorino.' },
            { nome: 'Risoto de Cogumelos', preco: 'R$ 60,00', desc: 'Arroz arbóreo com mix de cogumelos frescos.' },
            { nome: 'Bife Ancho', preco: 'R$ 75,00', desc: 'Corte nobre grelhado com batatas rústicas.' }
        ],
        sobremesas: [
            { nome: 'Tiramisu', preco: 'R$ 28,00', desc: 'Clássica sobremesa italiana com café e mascarpone.' }
        ]
    };

    const container = document.getElementById('menu-container');
    container.innerHTML = ''; // Limpa o "Carregando..."

    // Loop pelas categorias (entradas, pratosPrincipais, etc.)
    for (const categoria in mockData) {
        // Cria a seção (ex: <h2>Entradas</h2>)
        const secao = document.createElement('section');
        secao.className = 'menu-secao';
        
        const titulo = document.createElement('h2');
        // Transforma "pratosPrincipais" em "Pratos Principais"
        titulo.textContent = categoria
            .replace(/([A-Z])/g, ' $1') // Adiciona espaço antes de letra maiúscula
            .replace(/^./, (str) => str.toUpperCase()); // Capitaliza a primeira letra
        
        secao.appendChild(titulo);

        // Loop pelos itens dentro da categoria
        mockData[categoria].forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'menu-item';

            itemDiv.innerHTML = `
                <h3>
                    ${item.nome}
                    <span class="item-preco">${item.preco}</span>
                </h3>
                <p>${item.desc}</p>
            `;
            secao.appendChild(itemDiv);
        });

        container.appendChild(secao);
    }
}
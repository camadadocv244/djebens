document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Contador de Interações com Lógica Condicional ---
    let contador = 0;
    const LIMITE_ETICO = 10; // Evita uso compulsivo e demonstra controle condicional

    const btnCurtir = document.getElementById('btn-curtir');
    const btnResetar = document.getElementById('btn-resetar');
    const contadorValor = document.getElementById('contador-valor');
    const statusMsg = document.getElementById('status-contador');

    function atualizarInterface() {
        contadorValor.textContent = contador;

        // Lógica Condicional para Feedback ao Usuário
        if (contador === 0) {
            statusMsg.textContent = 'Você ainda não interagiu nesta sessão.';
            statusMsg.style.backgroundColor = '#e2e8f0';
            btnCurtir.disabled = false;
        } else if (contador > 0 && contador < LIMITE_ETICO) {
            statusMsg.textContent = `Obrigado! Interações registradas: ${contador}/${LIMITE_ETICO}.`;
            statusMsg.style.backgroundColor = '#d1e7dd';
            statusMsg.style.color = '#0f5132';
            btnCurtir.disabled = false;
        } else {
            statusMsg.textContent = 'Limite diário de curtidas atingido para incentivar o uso consciente!';
            statusMsg.style.backgroundColor = '#f8d7da';
            statusMsg.style.color = '#842029';
            btnCurtir.disabled = true; // Desabilita botão após o limite
        }
    }

    btnCurtir.addEventListener('click', () => {
        if (contador < LIMITE_ETICO) {
            contador++;
            atualizarInterface();
        }
    });

    btnResetar.addEventListener('click', () => {
        contador = 0;
        atualizarInterface();
    });

    // --- 2. Filtro em Tempo Real (Manipulação do DOM) ---
    const campoBusca = document.getElementById('campo-busca');
    const itensTopicos = document.querySelectorAll('#lista-topicos li');

    campoBusca.addEventListener('input', (event) => {
        const termoBusca = event.target.value.toLowerCase().trim();

        itensTopicos.forEach((item) => {
            const textoItem = item.textContent.toLowerCase();
            
            // Lógica condicional para exibir/ocultar elementos
            if (textoItem.includes(termoBusca)) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });

    // --- 3. Scroll Suave Acessível ---
    const btnSaibaMais = document.getElementById('btn-saiba-mais');
    btnSaibaMais.addEventListener('click', () => {
        const secaoRecursos = document.getElementById('recursos');
        secaoRecursos.scrollIntoView({ behavior: 'smooth' });
    });
});

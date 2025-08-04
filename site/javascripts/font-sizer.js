console.log('font-sizer.js carregado com correção de recarregamento!');

(function() {

  // --- INÍCIO: CÓDIGO DE RECARREGAMENTO FORÇADO APÓS SENHA ---

  // Primeiro, verifica se a página acabou de ser recarregada por este script
  if (sessionStorage.getItem('page_reloaded_after_decrypt')) {
    // Se sim, remove a flag e não faz mais nada para evitar um loop.
    sessionStorage.removeItem('page_reloaded_after_decrypt');
  } else {
    // Se não, configura o "vigia" para esperar pela senha.
    const observer = new MutationObserver(function(mutations) {
      for (let mutation of mutations) {
        // A melhor forma de saber que a senha foi aceite é quando o formulário é removido do HTML.
        const passwordFormRemoved = Array.from(mutation.removedNodes).some(node => node.id === 'mkdocs-decrypt-form');

        if (passwordFormRemoved) {
          // 1. Define uma flag para que, no próximo carregamento, saibamos que fomos nós.
          sessionStorage.setItem('page_reloaded_after_decrypt', 'true');
          
          // 2. Força o recarregamento da página.
          location.reload();

          // 3. Para de observar para não causar problemas.
          observer.disconnect();
          break;
        }
      }
    });

    // Começa a observar o corpo do documento por remoções de elementos.
    observer.observe(document.body, { childList: true, subtree: true });
  }
  // --- FIM: CÓDIGO DE RECARREGAMENTO FORÇADO ---


  // --- O SEU SCRIPT DE PAINEL DE FONTES (continua igual) ---
  const html = document.documentElement;
  let currentSize = 100;

  function setFontSize(size) {
    html.style.fontSize = size + '%';
    localStorage.setItem('fontSize', size);
  }

  function changeFontSize(delta) {
    currentSize = Math.max(80, Math.min(150, currentSize + delta));
    setFontSize(currentSize);
  }

  function createFontSizer() {
    if (document.getElementById('font-sizer-panel')) return;
    const container = document.createElement('div');
    container.id = 'font-sizer-panel';
    // ... (estilos do seu painel)
    container.style.position = 'fixed';
    container.style.bottom = '16px';
    container.style.right = '16px';
    container.style.zIndex = '9999';
    container.style.background = '#fff';
    container.style.border = '1px solid #ccc';
    container.style.borderRadius = '4px';
    container.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
    container.style.padding = '4px 8px';
    container.style.display = 'flex';
    container.style.gap = '4px';

    const decrease = document.createElement('button');
    decrease.textContent = 'A-';
    decrease.title = 'Diminuir fonte';
    decrease.onclick = () => changeFontSize(-10);

    const reset = document.createElement('button');
    reset.textContent = 'A';
    reset.title = 'Fonte padrão';
    reset.onclick = () => { currentSize = 100; setFontSize(currentSize); };

    const increase = document.createElement('button');
    increase.textContent = 'A+';
    increase.title = 'Aumentar fonte';
    increase.onclick = () => changeFontSize(10);
    
    [decrease, reset, increase].forEach(btn => {
        btn.style.border = '1px solid #ddd';
        btn.style.background = '#f0f0f0';
        btn.style.cursor = 'pointer';
        btn.style.minWidth = '28px';
    });

    container.appendChild(decrease);
    container.appendChild(reset);
    container.appendChild(increase);
    document.body.appendChild(container);
  }

  function initFontSizer() {
    const saved = parseInt(localStorage.getItem('fontSize'), 10);
    if (!isNaN(saved)) {
      currentSize = saved;
      setFontSize(currentSize);
    }
    createFontSizer();
  }

  document.addEventListener('DOMContentLoaded', initFontSizer);
  document.addEventListener('pjax:complete', createFontSizer);

})();
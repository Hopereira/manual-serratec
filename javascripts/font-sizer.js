console.log('font-sizer.js carregado!');

(function() {
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
    // Evita duplicar o painel
    if (document.getElementById('font-sizer-panel')) return;

    const container = document.createElement('div');
    container.id = 'font-sizer-panel';
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

  // Para navegação interna do MkDocs Material (quando troca de página sem recarregar)
  document.addEventListener('pjax:complete', createFontSizer);
})();

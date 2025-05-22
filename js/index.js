// Configuração global do jsPDF
window.jsPDF = window.jspdf.jsPDF;

// ===== GERADOR DE PDF ATS OTIMIZADO =====
function generateATS_PDF() {
  const originalContent = document.querySelector('.ats-version');
  const clone = originalContent.cloneNode(true);
  
  // Remover elementos não essenciais
  clone.querySelectorAll('i, img, script, style, link, [aria-hidden="true"]').forEach(el => el.remove());
  
  // Aplicar estilos temporários
  clone.style.display = 'block';
  clone.style.position = 'absolute';
  clone.style.left = '-9999px';
  document.body.appendChild(clone);

  // Configurar opções de impressão
  const printWindow = window.open('', '_blank');
  printWindow.document.open();
  printWindow.document.write(`
    <html>
      <head>
        <title>Currículo - Daniel Eloy</title>
        <style>
          ${document.querySelector('#ats-print-styles').innerHTML}
        </style>
      </head>
      <body>
        ${clone.innerHTML}
      </body>
    </html>
  `);
  printWindow.document.close();
  
  // Trigger de impressão
  setTimeout(() => {
    printWindow.print();
    printWindow.close();
    document.body.removeChild(clone);
  }, 500);
}
// ===== VALIDAÇÃO DE FORMULÁRIO MELHORADA =====
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const lgpdCheckbox = document.getElementById('lgpd');
  const errorMessage = document.getElementById('lgpd-error');

  const showError = () => {
    errorMessage.classList.add('active');
    setTimeout(() => errorMessage.classList.remove('active'), 3000);
  };

  form.addEventListener('submit', (e) => {
    if (!lgpdCheckbox.checked) {
      e.preventDefault();
      showError();
      lgpdCheckbox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });

  lgpdCheckbox.addEventListener('change', () => {
    errorMessage.classList.remove('active');
  });
});

// ===== GERENCIAMENTO DE ANIMAÇÕES =====
const animationStyle = document.createElement('style');
animationStyle.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-8px); }
    50% { transform: translateX(8px); }
    75% { transform: translateX(-4px); }
  }

  .error-message.active {
    display: block;
    animation: shake 0.4s ease-in-out;
  }
`;
document.head.appendChild(animationStyle);


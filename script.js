// Adicione seu JavaScript aqui, se necessário.
// Por enquanto, os botões estão usando onclick diretamente no HTML.

const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  // ativa a animação do X imediatamente
  menuToggle.classList.toggle('active'); 
  
  // abre/fecha o menu com leve atraso
  if (!menu.classList.contains('active')) {
    setTimeout(() => {
      menu.classList.add('active');
    }, 100); // 100ms de delay
  } else {
    menu.classList.remove('active');
  }
});

const menu = document.getElementById('menu');
const menuToggle = document.getElementById('menu-toggle');

// Garante que o menu esteja fechado quando a página é carregada ou restaurada do cache
window.addEventListener('pageshow', () => {
  menu.classList.remove('active');
  menuToggle.classList.remove('active');
});


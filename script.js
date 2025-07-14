// Script para demonstração WCAG 2.2
console.log('Site WCAG carregado!');

document.addEventListener('DOMContentLoaded', function() {
    // Botões de ícones
    const botoes = document.querySelectorAll('button[aria-label]');
    botoes.forEach(btn => {
        btn.onclick = () => alert(`Clicou em: ${btn.getAttribute('aria-label')}`);
    });
    
    // Navegação suave
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.onclick = (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
        };
    });
    
    // Melhorar acessibilidade dos controles de mídia
    const mediaElements = document.querySelectorAll('audio, video');
    mediaElements.forEach(media => {
        media.addEventListener('play', function() {
            console.log('Mídia iniciada');
        });
        
        media.addEventListener('pause', function() {
            console.log('Mídia pausada');
        });
    });
    
    // Adicionar indicação visual para seção ativa
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Destacar link da navegação correspondente
                links.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${entry.target.id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 0.3 });
    
    sections.forEach(section => {
        observer.observe(section);
    });
});

// Função para testar acessibilidade
function testarAcessibilidade() {
    console.log('=== TESTE DE ACESSIBILIDADE ===');
    
    // Verificar imagens sem alt
    const imagens = document.querySelectorAll('img');
    console.log(`Total de imagens: ${imagens.length}`);
    
    imagens.forEach((img, index) => {
        const alt = img.getAttribute('alt');
        if (alt === null) {
            console.warn(`Imagem ${index + 1} sem atributo alt`);
        } else if (alt === '') {
            console.log(`Imagem ${index + 1} decorativa (alt vazio)`);
        } else {
            console.log(`Imagem ${index + 1} com alt: "${alt}"`);
        }
    });
    
    // Verificar botões sem aria-label
    const botoes = document.querySelectorAll('button');
    botoes.forEach((btn, index) => {
        const ariaLabel = btn.getAttribute('aria-label');
        const texto = btn.textContent.trim();
        
        if (!ariaLabel && !texto) {
            console.warn(`Botão ${index + 1} sem rótulo acessível`);
        }
    });
    
    console.log('=== FIM DO TESTE ===');
}

// Disponibilizar função globalmente
window.testarAcessibilidade = testarAcessibilidade; 
# Front-end Acessível - Projeto IHC

## Grupo 1 - Integrantes

<table align="center">
  <tr>
    <td align="center"><a href="https://github.com/BrzGab"><img style="border-radius: 50%;" src="https://github.com/BrzGab.png" width="100px;" alt=""/><br /><sub><b>Gabriel Lopes</b></sub></a><br />
    <td align="center"><a href="https://github.com/taybalau"><img style="border-radius: 50%;" src="https://github.com/taybalau.png" width="100px;" alt=""/><br /><sub><b>Taynara Gabrielle</b></sub></a><br />   
    <td align="center"><a href="https://github.com/uires2023"><img style="border-radius: 50%;" src="https://github.com/uires2023.png" width="100px;" alt=""/><br /><sub><b>Uires Carlos</b></sub></a><br />   
    <td align="center"><a href="https://github.com/pedroluizfo"><img style="border-radius: 50%;" src="https://github.com/pedroluizfo.png" width="100px;" alt=""/><br /><sub><b>Pedro Luiz</b></sub></a><br />
  </tr>
</table>

## Descrição

Implementação prática dos critérios de acessibilidade WCAG 2.2 do **Grupo 1 - Perceptível: Textos Alternativos e Multimídia**.

Este projeto demonstra como implementar corretamente os critérios de acessibilidade em um front-end web, proporcionando uma experiência inclusiva para todos os usuários.

## Critérios WCAG 2.2 Implementados

### 1.1.1 - Conteúdo Não-texto (Level A)
**Especificação:** Todo conteúdo não-textual apresentado ao usuário deve ter uma alternativa textual que serve o mesmo propósito.

**Implementações:**
- **Imagens informativas**: Alt text descritivo e significativo
- **Imagens decorativas**: `alt=""` e `role="presentation"` para serem ignoradas por leitores de tela  
- **Ícones funcionais**: `aria-label` descrevendo a ação do botão
- **Gráficos complexos**: Descrições textuais detalhadas

### 1.2.1 - Apenas Áudio e Apenas Vídeo Pré-gravado (Level A)
**Especificação:** Para mídia pré-gravada de apenas áudio e apenas vídeo, alternativas equivalentes devem ser fornecidas.

**Implementações:**
- **Conteúdo apenas áudio**: Transcrições textuais completas incluindo identificação de locutores
- **Conteúdo apenas vídeo**: Descrições textuais ou áudio-descrição equivalente
- **Informações temporais**: Timestamps e duração do conteúdo

### 1.2.2 - Legendas Pré-gravadas (Level A)
**Especificação:** Legendas são fornecidas para todo conteúdo de áudio pré-gravado em mídia sincronizada.

**Implementações:**
- **Legendas WebVTT**: Arquivo `.vtt` com legendas sincronizadas
- **Transcrições completas**: Texto alternativo incluindo efeitos sonoros e identificação de locutores
- **Controles acessíveis**: Players de mídia operáveis por teclado

## Importância e Público-alvo

### Por que estes critérios são fundamentais?

#### Critério 1.1.1 - Pessoas com Deficiência Visual
- **Cegueira total**: Usuários de leitores de tela (JAWS, NVDA, VoiceOver) precisam de textos alternativos para compreender imagens
- **Baixa visão**: Descrições textuais complementam a percepção visual limitada
- **Daltonismo**: Alt text ajuda quando informações são transmitidas apenas por cor

#### Critério 1.2.1 - Pessoas com Deficiência Auditiva
- **Surdez**: Transcrições permitem acesso ao conteúdo sonoro
- **Deficiência auditiva parcial**: Texto complementa o áudio de baixa qualidade
- **Ambientes silenciosos**: Beneficia usuários em locais onde não podem ouvir áudio

#### Critério 1.2.2 - Múltiplas Deficiências
- **Surdocegueira**: Legendas podem ser convertidas em braille por displays táteis
- **Deficiências cognitivas**: Texto reforça a compreensão do conteúdo auditivo
- **Dificuldades de processamento auditivo**: Legendas facilitam o entendimento

### Benefícios para todos os usuários:
- **Contextos ruidosos**: Transporte público, escritórios abertos
- **Ambientes silenciosos**: Bibliotecas, hospitais, madrugada
- **Idiomas não nativos**: Texto auxilia na compreensão
- **Conexões lentas**: Texto carrega mais rápido que mídia

## Técnicas de Programação Implementadas

### HTML Semântico
```html
<!-- Imagem informativa -->
<img src="grafico.jpg" alt="Gráfico de barras mostrando crescimento de 25% nas vendas">

<!-- Imagem decorativa -->
<img src="decoracao.jpg" alt="" role="presentation">

<!-- Ícone funcional -->
<button aria-label="Buscar no site">🔍</button>
```

### Elementos de Mídia Acessíveis
```html
<!-- Vídeo com legendas -->
<video controls>
    <track kind="captions" src="legendas.vtt" srclang="pt-BR" label="Português" default>
    <p>Fallback para navegadores sem suporte</p>
</video>

<!-- Áudio com transcrição -->
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    <p>Seu navegador não suporta áudio. <a href="#transcricao">Ver transcrição</a></p>
</audio>
```

### CSS para Acessibilidade
```css
/* Skip links */
.skip-link {
    position: absolute;
    top: -40px;
    left: 6px;
}
.skip-link:focus { top: 6px; }

/* Foco visível */
*:focus {
    outline: 2px solid #4f46e5;
    outline-offset: 2px;
}

/* Contraste adequado */
body { color: #1a202c; background: #ffffff; }
```

### JavaScript para Interatividade
```javascript
// Navegação suave acessível
links.forEach(link => {
    link.onclick = (e) => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href'))
                .scrollIntoView({behavior: 'smooth'});
    };
});

// Controles de mídia acessíveis
mediaElements.forEach(media => {
    media.addEventListener('play', function() {
        console.log('Mídia iniciada');
    });
});
```

### Atributos ARIA
- `aria-label`: Rótulos acessíveis para elementos sem texto visível
- `role="presentation"`: Remove semântica de elementos decorativos
- Navegação por landmarks semânticos (`main`, `nav`, `section`)

## Como Rodar o Código

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional, para mídia externa)

### Opção 1: Execução Direta (Recomendada)
1. **Clone ou baixe o repositório:**
   ```bash
   git clone https://github.com/BrzGab/site-ihc.git
   cd site-ihc
   ```

2. **Abra o arquivo principal:**
   - Clique duas vezes em `index.html` OU
   - Arraste `index.html` para o navegador OU
   - Botão direito → "Abrir com" → Navegador

3. **Navegue pelo site:**
   - Use o menu superior para navegar entre critérios
   - Teste a navegação por teclado (Tab, Enter, Setas)
   - Acesse `midia-alternativa.html` se os vídeos não carregarem

### Opção 2: Servidor Local (Para desenvolvimento)
1. **Usando Python:**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```

2. **Usando Node.js (npx):**
   ```bash
   npx http-server
   ```

3. **Usando PHP:**
   ```bash
   php -S localhost:8000
   ```

4. **Acesse:** `http://localhost:8000`

### Opção 3: GitHub Pages (Deploy Online)
1. **Acesse diretamente:** [https://brzgab.github.io/site-ihc](https://brzgab.github.io/site-ihc)
2. **Ativar GitHub Pages:**
   - Vá em Settings → Pages
   - Source: Deploy from branch
   - Branch: main → Save

### Testando a Acessibilidade

1. **Navegação por teclado:**
   - Use `Tab` para navegar entre elementos
   - `Enter/Espaço` para ativar botões/links
   - `Shift+Tab` para voltar

2. **Leitores de tela:**
   - Windows: NVDA (gratuito)
   - macOS: VoiceOver (nativo)
   - Navegador: Extensões como Screen Reader

3. **Ferramentas de validação:**
   - [WAVE Web Accessibility Evaluator](https://wave.webaim.org/)
   - axe DevTools (extensão do navegador)
   - Lighthouse (Chrome DevTools → Accessibility)

4. **Teste manual no console:**
   ```javascript
   // Execute no console do navegador
   testarAcessibilidade();
   ```

## Estrutura do Projeto

```
site-ihc/
├── index.html              # Página principal com demonstrações
├── midia-alternativa.html  # Mídia simulada (fallback)
├── styles.css              # Estilos acessíveis e responsivos
├── script.js               # Funcionalidades JavaScript
├── legendas.vtt            # Legendas WebVTT
└── README.md               # Esta documentação
```

## Recursos de Acessibilidade Implementados

### Navegação
- Skip links para conteúdo principal
- Navegação por teclado completa
- Indicadores de foco visíveis
- Hierarquia semântica de headings (h1, h2, h3)
- Landmarks ARIA implícitos

### Conteúdo Não-texto
- Alt text descritivo para imagens informativas
- Alt vazio para imagens decorativas
- Aria-label para ícones funcionais
- Descrições textuais para gráficos

### Multimídia
- Transcrições completas para áudio
- Descrições para vídeo apenas visual
- Legendas sincronizadas (WebVTT)
- Controles de mídia acessíveis
- Fallbacks para conteúdo não suportado

### Design Inclusivo
- Contraste de cores adequado (WCAG AA)
- Tipografia legível e escalável
- Layout responsivo
- Espaçamento adequado para touch targets

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e elementos de mídia
- **CSS3**: Estilos acessíveis, Grid Layout, Flexbox
- **JavaScript ES6+**: Interatividade e funcionalidades dinâmicas
- **WebVTT**: Formato padrão para legendas web
- **Web APIs**: Intersection Observer, Media APIs

## Validação e Conformidade

### Padrões Atendidos
- **WCAG 2.2 Level A** para critérios 1.1.1, 1.2.1, 1.2.2
- **HTML5 válido** (W3C Validator)
- **CSS3 válido** (W3C CSS Validator)
- **Acessibilidade testada** com leitores de tela

### Ferramentas de Validação Recomendadas
- [WAVE](https://wave.webaim.org/): Análise automática de acessibilidade
- [axe DevTools](https://www.deque.com/axe/): Extensão para desenvolvedores
- [Lighthouse](https://developers.google.com/web/tools/lighthouse): Auditoria do Chrome
- [Color Contrast Analyzer](https://www.tpgi.com/color-contrast-checker/): Verificação de contraste

## Recursos Adicionais

- [Guia WCAG 2.2 em Português](https://guia-wcag.com/)
- [MDN Web Accessibility](https://developer.mozilla.org/pt-BR/docs/Web/Accessibility)
- [W3C Web Accessibility Initiative](https://www.w3.org/WAI/)

## Licença

Projeto desenvolvido para fins educacionais - Disciplina de Interação Humano-Computador (IHC) 2025.

---

*Este projeto demonstra a implementação prática de critérios WCAG 2.2, contribuindo para uma web mais inclusiva e acessível para todos.*

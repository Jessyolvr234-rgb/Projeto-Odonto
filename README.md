# Projeto-Odonto
Projeto Odonto

## Avaliação

- 21/10 - avaliação em pares - Vinícius Teixeira Silva

### Aula 6 — CSS3 — Sintaxe, Seletores e Box Model

**1. Seletores eficientes**

- **Status:** Atende Plenamente
- **Comentário:** Os seletores são curtos e baseados em classe (`.menu a`, `.botao-principal`, `.menu-toggle:checked ~ .menu`), sem exageros.

**2. Box model consistente**

- **Status:** Atende Plenamente
- **Comentário:** O `style.css` aplica `box-sizing: border-box` com o seletor universal `*` (linha 23), junto do reset de `margin` e `padding`.

**3. CSS organizado**

- **Status:** Atende Plenamente
- **Comentário:** Todo o estilo está no arquivo externo `style.css`, ligado por um único `<link>`. Não encontrei nenhum atributo `style=""` no `index.html`, e o arquivo é dividido em seções numeradas com comentários de cabeçalho.

### Aula 8 — CSS3 — Menus e Navegação

**4. Menu funcional e responsivo**

- **Status:** Atende Plenamente
- **Comentário:** Em tela grande o menu em Flexbox funciona bem, e em telas de até 760px o hambúrguer abre e fecha o menu.

**5. Estados de interação visíveis**

- **Status:** Atende Plenamente
- **Comentário:** O `:hover` está em `.menu a:hover` (linha 154), que muda a cor do link, e em `.menu .menu-botao:hover` (linha 166), que muda o fundo e levanta o botão. O foco por teclado usa o `:focus-visible` global (linha 1051) e `.menu-toggle:focus-visible + .menu-icone` no mobile.

**6. Sem sobreposição indevida**

- **Status:** Atende Plenamente
- **Comentário:** A hierarquia de `z-index` é coerente: o cabeçalho sticky fica em 1000 (linha 115), acima do botão flutuante do WhatsApp em 900, e o ícone do menu mobile fica em 1002. Nada no menu aparece cortado nem coberto por outro elemento.

### Aula 9 — JavaScript — Lógica e Fundamentos

**1. Variáveis, tipos e conversão**

- **Status:** Atende Parcialmente
- **Comentário:** O `script.js` usa `const` e nomes compreensíveis, mas não solicita entrada com `prompt`, não converte com `Number()` nem valida os dados de entrada exigidos para a análise.

**2. Condicionais (`if` e `switch`)**

- **Status:** Atende Parcialmente
- **Comentário:** Há verificações com `if` no formulário, mas não a classificação dos dados em três faixas nem o `switch` completo solicitado na atividade.


**3. Organização e documentação**

- **Status:** Atende Parcialmente
- **Comentário:** O `script.js` está dividido em seções e contém comentários sobre as funcionalidades do site, mas não documenta o planejamento, o pseudocódigo ou o teste de mesa da atividade.

### Cálculo da Nota Final

| # | Critério | Status | Pontos |
|---|----------|--------|--------|
| 1 | Seletores eficientes | Atende Plenamente | 2 |
| 2 | Box model consistente | Atende Plenamente | 2 |
| 3 | CSS organizado | Atende Plenamente | 2 |
| 4 | Menu funcional e responsivo | Atende Plenamente | 2 |
| 5 | Estados de interação visíveis | Atende Plenamente | 2 |
| 6 | Sem sobreposição indevida | Atende Plenamente | 2 |
| 7 | Variáveis, tipos e conversão | Atende Parcialmente | 1 |
| 8 | Condicionais (`if` e `switch`) | Atende Parcialmente | 1 |
| 9 | Organização e documentação | Atende Parcialmente | 1 |

**Nota Final: 8,3** (15 de 18 pontos)

Nota por aula/atividade: Aula 6 = 10,0 · Aula 8 = 10,0 · Aula 9 = 5,0

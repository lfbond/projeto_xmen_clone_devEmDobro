# 🧬 X-Men — Character Selector

Uma aplicação Front-end inspirada no universo dos **X-Men**, desenvolvida originalmente como projeto de estudos e posteriormente **refatorada para demonstrar evolução técnica em JavaScript, arquitetura Front-end, manipulação do DOM, acessibilidade e responsividade**.

O projeto começou como uma seleção simples de personagens utilizando **HTML, CSS e JavaScript Vanilla** e evoluiu para uma aplicação orientada a dados, com renderização dinâmica, componentes JavaScript, estado da aplicação, estatísticas, cards detalhados e uma interface responsiva.

> 💡 Mais do que recriar o projeto original, esta refatoração busca mostrar a evolução entre **como eu desenvolvia anteriormente e como estruturaria a mesma solução hoje**.

---

## 🌐 Demonstração

🚀 **Aplicação online**

```text
https://lfbond.github.io/projeto_xmen_clone_devEmDobro/
```

📦 **Repositório**

```text
https://github.com/lfbond/projeto_xmen_clone_devEmDobro
```

> ⚠️ A versão refatorada está sendo desenvolvida na branch `refactor/character-selection`.
> Após a conclusão dos testes e revisão final, ela será integrada à `main`.

---

# 📸 Antes × Depois

Uma das propostas principais desta refatoração é tornar visível a evolução técnica do projeto.

## 🔴 Antes — versão original

A primeira versão possuía uma interface simples de seleção de personagens.

A interação era baseada principalmente no evento `mouseenter`, alterando diretamente elementos do DOM para exibir:

* imagem;
* nome;
* descrição;
* personagem selecionado.

### Screenshot da versão original

<!-- Substitua o caminho abaixo pela imagem da versão antiga -->

<img width="1900" height="907" alt="x-men-antes" src="https://github.com/user-attachments/assets/8a2ae53b-2cbd-48d7-a866-6d58a4722e92" />


**ESPAÇO PARA IMAGEM — ANTES**

---

## 🟢 Depois — versão refatorada

A nova versão transforma o projeto em uma interface baseada em **dados e componentes JavaScript**, apresentando uma coleção muito maior de personagens e informações.

### Screenshot da versão refatorada

<!-- Substitua o caminho abaixo pela imagem da versão nova -->

<img width="1898" height="908" alt="x-men-depois" src="https://github.com/user-attachments/assets/5970b854-92c8-4677-95d5-9d8a67a4cb15" />


**ESPAÇO PARA IMAGEM — DEPOIS**

---

# 🔄 Comparação da evolução

| Antes                                              | Depois                                                                       |
| -------------------------------------------------- | ---------------------------------------------------------------------------- |
| HTML com personagens escritos manualmente          | Personagens armazenados como objetos JavaScript                              |
| Dados misturados ao HTML                           | Dados centralizados em `characters.js`                                       |
| Manipulação direta do DOM                          | Renderização dinâmica                                                        |
| Seleção principalmente por `mouseenter`            | Elementos interativos utilizando `button`                                    |
| Poucos dados por personagem                        | Nome, nome real, poder, nível, equipe, status, primeira aparição e biografia |
| Estrutura JavaScript simples                       | Separação entre dados, estado, renderização e handlers                       |
| Layout de seleção tradicional                      | Grid responsivo de personagens                                               |
| Informações exibidas diretamente                   | Cards + modal de detalhes                                                    |
| Estado representado principalmente por classes CSS | Estado controlado pelo JavaScript                                            |
| Projeto essencialmente visual                      | Maior preocupação com acessibilidade                                         |
| Lista pequena de personagens                       | Base expandida de personagens                                                |
| Responsividade básica                              | Abordagem Mobile First na nova interface                                     |
| Sem estatísticas                                   | Dashboard resumido dos personagens                                           |

---

# 🎯 Objetivo da refatoração

O objetivo não foi simplesmente adicionar novas funcionalidades.

A proposta foi revisitar um código criado durante uma etapa anterior dos meus estudos e aplicar conceitos que adquiri posteriormente.

A pergunta utilizada como base para a refatoração foi:

> **Se eu tivesse que desenvolver este projeto novamente hoje, como estruturaria a aplicação?**

A partir disso, foram trabalhados conceitos como:

```text
Código original
      ↓
Análise dos problemas
      ↓
Separação de responsabilidades
      ↓
Estrutura de dados
      ↓
Estado da aplicação
      ↓
Renderização dinâmica
      ↓
Componentização
      ↓
Acessibilidade
      ↓
Responsividade
      ↓
Experiência do usuário
```

---

# ✨ Funcionalidades

A versão refatorada possui:

* 🧬 listagem dinâmica de personagens;
* 🖱️ seleção através de interação com os cards;
* ⌨️ suporte a navegação utilizando elementos nativos de teclado;
* ♿ melhorias de acessibilidade;
* 📱 layout responsivo;
* 📊 estatísticas dos personagens;
* 👥 agrupamento por equipes;
* ⭐ classificação de nível;
* 🟢 indicação de status;
* ⚡ informações sobre poderes;
* 📛 nome real dos personagens;
* 📚 primeira aparição;
* 📖 biografia resumida;
* 🔍 modal com informações completas;
* 🎨 feedback visual para seleção;
* ⌨️ tecla `ESC` para remover a seleção;
* 🖼️ lazy loading das imagens;
* 🧩 renderização dinâmica dos cards.

---

# 📊 Dashboard de estatísticas

Outra evolução adicionada durante a refatoração foi uma pequena área de estatísticas.

A aplicação calcula dinamicamente informações como:

```text
🧬 Total de personagens
👥 Número de equipes
⭐ Nível médio
🟢 Personagens ativos
```

As informações são calculadas diretamente a partir da base de personagens.

```javascript
getCharacterStats();
```

Isso significa que novos personagens adicionados ao array são automaticamente considerados nas estatísticas.

---

# 🗃️ Dados separados da interface

Uma das mudanças mais importantes foi retirar os dados dos personagens do HTML.

## Antes

Os dados estavam diretamente associados aos elementos:

```html
<li
  class="personagem"
  id="wolverine"
  data-name="Wolverine"
  data-description="..."
>
```

Essa solução funciona em aplicações pequenas, mas aumenta o acoplamento entre conteúdo e interface.

## Depois

Os personagens passaram a ser representados como objetos:

```javascript
{
  id: "wolverine",
  name: "Wolverine",
  realName: "Logan (James Howlett)",
  power: "Fator de cura, garras de adamantium, sentidos apurados",
  image: "./src/assets/card-wolverine.jpg",
  team: "X-Men",
  level: 5,
  status: "Ativo",
  firstAppearance: "The Incredible Hulk #180 (1974)",
  bio: "..."
}
```

Agora existe uma separação muito mais clara entre:

```text
DADOS
  ↓
LÓGICA
  ↓
RENDERIZAÇÃO
  ↓
INTERFACE
```

---

# 🧩 Renderização dinâmica

Na versão original, os personagens precisavam existir previamente no HTML.

Na versão refatorada, os cards são construídos pelo JavaScript.

```javascript
state.characters.forEach((char) => {
  const card = createCharacterCard(char);
  container.appendChild(card);
});
```

Essa mudança facilita:

* inclusão de novos personagens;
* manutenção dos dados;
* reutilização da interface;
* filtros futuros;
* buscas;
* ordenação;
* integração futura com APIs.

---

# 🧠 Estado da aplicação

Outra mudança importante foi introduzir um estado simples para controlar a aplicação.

```javascript
let state = {
  selectedId: null,
  characters: characters,
};
```

A seleção deixa de depender exclusivamente do estado visual do HTML.

Funções específicas controlam esse comportamento:

```javascript
selectCharacter(id);

deselectCharacter();

toggleCharacter(id);

isCharacterSelected(id);
```

Essa abordagem aproxima o projeto de conceitos utilizados em bibliotecas modernas como React.

---

# 🧱 Separação de responsabilidades

A lógica foi dividida em diferentes responsabilidades.

```text
src/
│
├── assets/
│   └── imagens dos personagens
│
├── components/
│   └── CharacterSelector.js
│
├── config/
│   └── images.js
│
├── css/
│   ├── reset.css
│   ├── estilos.css
│   ├── responsivo.css
│   └── character-selector.css
│
├── data/
│   └── characters.js
│
└── js/
    └── index.js
```

### `data/characters.js`

Responsável pela base de dados dos personagens e funções auxiliares.

### `components/CharacterSelector.js`

Responsável por:

* estado;
* seleção;
* criação dos cards;
* atualização da interface;
* eventos;
* modal de detalhes.

### `character-selector.css`

Responsável pela nova interface dos cards, estados visuais, modal, estatísticas e comportamento responsivo.

---

# 🔎 Funções auxiliares

A base de personagens também ganhou funções reutilizáveis.

### Buscar personagem pelo ID

```javascript
getCharacterById(id);
```

### Filtrar por equipe

```javascript
getCharactersByTeam(team);
```

### Filtrar por nível

```javascript
getCharactersByLevel(minLevel);
```

### Filtrar por status

```javascript
getCharactersByStatus(status);
```

### Pesquisar personagens

```javascript
searchCharacters(searchTerm);
```

### Personagens aleatórios

```javascript
getRandomCharacters(count);
```

### Estatísticas

```javascript
getCharacterStats();
```

Essas funções deixam o projeto preparado para futuras funcionalidades de **busca, filtros e ordenação**.

---

# ♿ Acessibilidade

A acessibilidade foi um dos pontos centrais da refatoração.

Na versão original, a principal interação acontecia através do mouse.

A versão nova utiliza elementos interativos nativos:

```html
<button>
```

e atributos como:

```html
aria-label
aria-selected
aria-modal
aria-labelledby
```

Também foram adicionados:

* `:focus-visible`;
* textos alternativos nas imagens;
* indicação textual de status;
* labels de acessibilidade;
* interação através do teclado;
* fechamento utilizando `ESC`;
* estrutura de modal utilizando `role="dialog"`.

Exemplo:

```javascript
button.setAttribute(
  "aria-label",
  `Selecionar ${char.name}`
);

button.setAttribute(
  "aria-selected",
  isSelected ? "true" : "false"
);
```

---

# 📱 Responsividade

A nova interface utiliza uma abordagem **Mobile First**.

### Mobile

```text
1 coluna
```

### Tablet

```text
2 colunas
```

### Desktop

```text
4 colunas
```

Exemplo:

```css
.character-grid {
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .character-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1040px) {
  .character-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

---

# 🖼️ Comparação visual responsiva

## Desktop

### Antes

<img width="1185" height="840" alt="desktop-antes" src="https://github.com/user-attachments/assets/dcf7ca38-aa52-406c-b0fc-b5c4b0b51212" />


### Depois

<img width="1363" height="904" alt="desktop-depois" src="https://github.com/user-attachments/assets/37b2c35c-0336-4086-90c8-10cc8ae19d01" />

Modal: 

<img width="1264" height="852" alt="desktop-modal-depois" src="https://github.com/user-attachments/assets/a10c51ce-7301-4e41-8100-4abdc06bb337" />


---

## Mobile

### Antes

**ESPAÇO PARA SCREENSHOT MOBILE — ANTES**

<img width="479" height="662" alt="mobile-antes" src="https://github.com/user-attachments/assets/68a6967d-0dcc-4dd0-b9a2-c8d6e2639ebd" />


### Depois

**ESPAÇO PARA SCREENSHOT MOBILE — DEPOIS**

<img width="488" height="889" alt="mobile-depois" src="https://github.com/user-attachments/assets/4a87d94c-b619-4749-8e0f-5db062b42425" />


---

# 🪟 Modal de detalhes

Cada personagem possui a opção:

```text
📖 Ver mais
```

que abre uma visualização contendo informações adicionais.

O modal apresenta:

* nome;
* imagem;
* nome real;
* poder;
* nível;
* equipe;
* status;
* primeira aparição;
* biografia.

Ele também pode ser fechado:

```text
✕ botão fechar

ESC

clique fora do conteúdo
```

---

# 🛠️ Tecnologias

### HTML5

Utilizado para estruturar a aplicação e fornecer a base semântica da interface.

### CSS3

Utilizado para:

* CSS Grid;
* Flexbox;
* responsividade;
* Mobile First;
* animações;
* estados de interação;
* `focus-visible`;
* modal;
* cards;
* dashboard.

### JavaScript ES Modules

Utilizado para:

* manipulação do DOM;
* módulos;
* arrays e objetos;
* estado;
* eventos;
* `CustomEvent`;
* renderização dinâmica;
* filtros;
* funções reutilizáveis;
* criação programática de elementos.

---

# 🧠 Conceitos praticados

A refatoração permitiu trabalhar principalmente:

```text
JavaScript Vanilla
       ↓
ES Modules
       ↓
Estrutura de dados
       ↓
Estado
       ↓
DOM
       ↓
Renderização dinâmica
       ↓
Componentização
       ↓
Eventos
       ↓
Acessibilidade
       ↓
Responsividade
```

Além disso:

* Clean Code;
* separação de responsabilidades;
* organização de arquivos;
* reutilização de funções;
* gerenciamento simples de estado;
* tratamento de eventos;
* design responsivo;
* experiência do usuário;
* Git e branches.

---

# 📈 Evolução técnica

A diferença mais importante entre as duas versões não está apenas no visual.

## Versão original

```text
HTML
 ↓
CSS
 ↓
JavaScript
 ↓
querySelector
 ↓
Eventos
 ↓
Manipulação direta do DOM
```

## Versão refatorada

```text
Dados
 ↓
Estado
 ↓
Componentes
 ↓
Renderização
 ↓
Eventos
 ↓
Atualização da UI
```

Essa evolução demonstra uma mudança de pensamento:

> de apenas fazer a interface funcionar para estruturar o código pensando em manutenção, expansão e reutilização.

---

# ⚙️ Como executar

Clone o projeto:

```bash
git clone https://github.com/lfbond/projeto_xmen_clone_devEmDobro.git
```

Entre na pasta:

```bash
cd projeto_xmen_clone_devEmDobro
```

Para acessar a versão em desenvolvimento:

```bash
git checkout refactor/character-selection
```

Como o projeto utiliza JavaScript Vanilla e ES Modules, não é necessário instalar dependências.

Recomenda-se executar através de um servidor local, por exemplo:

```text
Live Server
```

no Visual Studio Code.

---

# 🌿 Estratégia de desenvolvimento

A refatoração também foi utilizada para praticar um fluxo mais próximo de um ambiente profissional.

```text
main
  │
  └── refactor/character-selection
             │
             ├── refatoração
             ├── novos dados
             ├── componentes
             ├── acessibilidade
             ├── responsividade
             └── revisão
                    ↓
               Pull Request
                    ↓
                  main
```

Isso permite preservar a versão original enquanto a nova implementação é desenvolvida e validada.

---

# 📋 Roadmap

## Concluído na refatoração

* [x] Separar dados dos personagens
* [x] Criar estrutura de objetos
* [x] Criar módulo `characters.js`
* [x] Criar `CharacterSelector`
* [x] Renderizar cards dinamicamente
* [x] Criar estado da aplicação
* [x] Implementar seleção por clique
* [x] Adicionar feedback visual
* [x] Melhorar navegação por teclado
* [x] Adicionar atributos de acessibilidade
* [x] Implementar `focus-visible`
* [x] Criar modal de detalhes
* [x] Criar estatísticas
* [x] Expandir quantidade de personagens
* [x] Criar funções de busca e filtros
* [x] Implementar grid responsivo
* [x] Melhorar versão mobile

## Próximas melhorias

* [ ] Revisar e remover código legado não utilizado
* [ ] Revisar completamente a semântica ARIA
* [ ] Melhorar gerenciamento de foco do modal
* [ ] Adicionar campo de pesquisa à interface
* [ ] Adicionar filtros por equipe
* [ ] Adicionar filtros por nível
* [ ] Implementar ordenação
* [ ] Adicionar testes automatizados
* [ ] Validar acessibilidade com Lighthouse
* [ ] Validar performance
* [ ] Otimizar imagens
* [ ] Fazer merge da branch de refatoração
* [ ] Atualizar GitHub Pages
* [ ] Criar versão React + TypeScript

---

# ⚛️ Próxima evolução — React + TypeScript

Depois de consolidar a versão Vanilla JavaScript, uma possível próxima etapa é reconstruir a aplicação utilizando:

```text
React
+
TypeScript
```

Uma possível arquitetura seria:

```text
src/
│
├── components/
│   ├── CharacterCard/
│   ├── CharacterGrid/
│   ├── CharacterDetails/
│   ├── CharacterStats/
│   └── CharacterFilters/
│
├── data/
│   └── characters.ts
│
├── types/
│   └── Character.ts
│
├── hooks/
│   └── useCharacters.ts
│
└── App.tsx
```

Isso permitirá comparar diretamente:

```text
Vanilla JavaScript
        VS
React + TypeScript
```

e demonstrar como os mesmos conceitos de **estado, componentes, eventos e renderização** são tratados nas duas abordagens.

---

# 🎓 Origem do projeto

O projeto foi desenvolvido originalmente durante meus estudos a partir de conteúdos educacionais do **Dev em Dobro**.

A versão atual utiliza esse projeto inicial como base para um exercício pessoal de refatoração e evolução técnica.

Em vez de descartar projetos antigos, a proposta é utilizá-los para demonstrar:

```text
Como eu programava
        ↓
O que aprendi
        ↓
O que identifiquei
        ↓
O que refatorei
        ↓
Como estruturaria hoje
```

---

# 👨‍💻 Autor

**Luís Felipe Bond**

Desenvolvedor Front-end / Full Stack JavaScript Jr.

### Stack

```text
JavaScript • TypeScript • React • Node.js
HTML • CSS • Git • GitHub
```

### GitHub

```text
https://github.com/lfbond
```

---

# ⭐ Sobre esta refatoração

Este projeto representa mais do que uma atualização visual.

Ele documenta a evolução de uma implementação simples baseada em manipulação direta do DOM para uma estrutura mais organizada baseada em:

**dados → estado → componentes → eventos → renderização → interface.**

O objetivo é demonstrar que evolução como desenvolvedor não significa apenas aprender novos frameworks, mas também saber **revisitar uma solução existente, identificar limitações e melhorar sua arquitetura utilizando fundamentos sólidos da Web**.

---

## 🚀 Status

```text
🟡 Refatoração avançada
🌿 Branch: refactor/character-selection
🧪 Próxima etapa: revisão + testes
🔀 Depois: merge → main
🌐 Final: atualização do GitHub Pages
```

# ❌ X-Men — Seleção de Personagens

Projeto Front-end inspirado no universo dos **X-Men**, desenvolvido com **HTML, CSS e JavaScript puro** durante meus estudos de desenvolvimento web.

A aplicação apresenta uma interface de seleção de personagens na qual o usuário pode interagir com os cards e visualizar informações do personagem selecionado.

> 🔄 Atualmente estou revisitando este projeto como parte da evolução do meu portfólio, utilizando o código original para praticar refatoração, organização de JavaScript, manipulação do DOM, acessibilidade e responsividade.

---

# 🌐 Demonstração

🚀 **Aplicação online:**

https://lfbond.github.io/projeto_xmen_clone_devEmDobro/

---

# 💻 Sobre o projeto

Este projeto foi desenvolvido durante meus estudos de desenvolvimento Front-end a partir de um projeto educacional do **Dev em Dobro**.

O objetivo inicial era praticar fundamentos importantes da Web utilizando apenas:

```text
HTML
CSS
JavaScript
```

A aplicação trabalha principalmente conceitos de:

* estruturação semântica;
* estilização;
* responsividade;
* manipulação do DOM;
* eventos JavaScript;
* alteração dinâmica de conteúdo;
* interação entre usuário e interface.

Posteriormente decidi revisitá-la como exercício de refatoração.

Em vez de simplesmente substituir o projeto antigo por outro, quero utilizá-lo para responder uma pergunta importante:

> **Se eu desenvolvesse esta aplicação hoje, o que faria diferente?**

---

# ✨ Funcionalidades

A aplicação possui:

* seleção interativa de personagens;
* alteração visual do personagem selecionado;
* atualização das informações exibidas;
* imagem correspondente ao personagem;
* descrição individual;
* interface inspirada no universo X-Men;
* layout adaptável a diferentes tamanhos de tela.

---

# 🛠️ Tecnologias

### HTML5

Utilizado para estruturar os elementos da página.

### CSS3

Responsável pela:

* estilização;
* layout;
* responsividade;
* estados visuais;
* destaque do personagem selecionado.

### JavaScript

Utilizado para:

* selecionar elementos;
* manipular o DOM;
* trabalhar com eventos;
* identificar o personagem selecionado;
* alterar informações dinamicamente;
* controlar estados visuais da interface.

---

# 🧠 Conceitos praticados

Durante o desenvolvimento foram trabalhados conceitos fundamentais de JavaScript.

## Seleção de elementos

```javascript
document.querySelector()
document.querySelectorAll()
```

---

## Eventos

A interface utiliza eventos para identificar a interação do usuário com os personagens.

```javascript
element.addEventListener(...)
```

---

## Manipulação do DOM

Após selecionar um personagem, o JavaScript atualiza dinamicamente elementos da interface.

Isso permite alterar:

* personagem ativo;
* imagem;
* nome;
* descrição;
* classes CSS.

---

## Classes CSS dinâmicas

O JavaScript controla classes responsáveis por indicar qual personagem está atualmente selecionado.

Conceitos praticados:

```javascript
classList.add()
classList.remove()
```

---

## Data Attributes

Os elementos podem utilizar atributos `data-*` para relacionar informações presentes no HTML com a lógica JavaScript.

Exemplo:

```html
<li data-name="Wolverine">
```

Essa abordagem permite associar elementos da interface aos respectivos personagens.

---

# 🔄 Evolução do projeto

A versão original foi criada durante uma etapa anterior dos meus estudos.

Em 2026 decidi revisitá-la para aplicar conhecimentos adquiridos posteriormente.

O objetivo não é simplesmente adicionar frameworks.

Antes disso, quero melhorar a implementação utilizando corretamente os fundamentos da plataforma Web.

---

# 🧱 Versão original

```text
HTML
  ↓
CSS
  ↓
JavaScript
  ↓
DOM
  ↓
Eventos
```

Principais objetivos da versão inicial:

* aprender manipulação do DOM;
* trabalhar eventos;
* alterar elementos dinamicamente;
* desenvolver interfaces responsivas;
* praticar HTML, CSS e JavaScript.

---

# 🚀 Refatoração planejada

## Etapa 1 — Organização do JavaScript

* [ ] revisar nomes de variáveis e funções;
* [ ] eliminar código duplicado;
* [ ] separar responsabilidades;
* [ ] criar funções menores;
* [ ] melhorar legibilidade;
* [ ] utilizar nomes mais descritivos;
* [ ] revisar manipulação do DOM.

Exemplo da ideia:

```javascript
function selecionarPersonagem(personagem) {
  removerPersonagemSelecionado();
  adicionarPersonagemSelecionado(personagem);
  atualizarPersonagemPrincipal(personagem);
}
```

A intenção é tornar o código mais fácil de:

```text
ler
↓
entender
↓
testar
↓
manter
```

---

# ♿ Etapa 2 — Acessibilidade

Uma das principais melhorias planejadas para esta nova versão é tornar a seleção de personagens acessível sem depender exclusivamente do mouse.

A aplicação deverá permitir interação através de:

```text
Mouse
Teclado
Touch
```

Eventos que serão estudados e implementados:

```javascript
click
mouseenter
focus
keydown
```

---

## Navegação por teclado

Planejado:

```text
← personagem anterior

→ próximo personagem

Enter selecionar

Space selecionar
```

Também serão revisados:

* foco visível;
* ordem de navegação;
* elementos interativos;
* atributos ARIA quando necessários;
* textos alternativos;
* contraste;
* semântica HTML.

---

# 📱 Etapa 3 — Responsividade

Revisar o comportamento da aplicação em:

```text
Desktop
Tablet
Smartphone
```

Pontos de atenção:

* tamanho dos cards;
* espaçamentos;
* tipografia;
* imagem principal;
* área de toque;
* quebra de layout;
* orientação da tela.

---

# 📦 Etapa 4 — Dados separados da interface

Outra melhoria planejada é reduzir o acoplamento entre os dados dos personagens e o HTML.

Uma possível estrutura será:

```javascript
const personagens = [
  {
    id: "ciclope",
    nome: "Ciclope",
    descricao: "...",
    imagem: "..."
  },

  {
    id: "wolverine",
    nome: "Wolverine",
    descricao: "...",
    imagem: "..."
  }
];
```

Dessa forma, os personagens passam a ser tratados como **dados da aplicação**.

Isso permitirá praticar:

* arrays;
* objetos;
* `map`;
* funções;
* renderização dinâmica;
* separação entre dados e apresentação.

---

# 🧩 Etapa 5 — Renderização dinâmica

Em uma evolução posterior, os cards poderão ser gerados através do JavaScript.

Conceitualmente:

```javascript
personagens.map(personagem => {
  // criar card
});
```

Isso reduz a repetição no HTML e facilita a inclusão de novos personagens.

---

# ⚛️ Possível versão futura — React + TypeScript

Depois de concluir a refatoração utilizando JavaScript puro, pretendo reconstruir o projeto utilizando React e TypeScript.

A intenção será comparar as duas abordagens.

### Versão Vanilla

```text
HTML
CSS
JavaScript
DOM
```

### Versão React

```text
React
TypeScript
Components
Props
State
Events
```

Possível estrutura:

```text
src/

├── components/
│   ├── CharacterCard/
│   ├── CharacterList/
│   └── CharacterDetails/
│
├── data/
│   └── characters.ts
│
├── types/
│   └── Character.ts
│
└── App.tsx
```

---

# 📚 Objetivos de aprendizado

A refatoração deste projeto será utilizada para aprofundar:

* JavaScript;
* DOM;
* eventos;
* arrays;
* objetos;
* funções;
* modularização;
* acessibilidade;
* responsividade;
* Git;
* organização de código.

Posteriormente:

* React;
* TypeScript;
* componentização;
* gerenciamento de estado.

---

# ⚙️ Como executar

## Clone o repositório

```bash
git clone https://github.com/lfbond/projeto_xmen_clone_devEmDobro.git
```

Entre na pasta:

```bash
cd projeto_xmen_clone_devEmDobro
```

Como o projeto utiliza HTML, CSS e JavaScript puro, ele não necessita de instalação de dependências.

Você pode abrir:

```text
index.html
```

diretamente no navegador.

Para uma melhor experiência de desenvolvimento, também pode utilizar uma extensão como **Live Server** no VS Code.

---

# 🌐 Deploy

A aplicação está publicada através do **GitHub Pages**.

🔗 Aplicação:

https://lfbond.github.io/projeto_xmen_clone_devEmDobro/

---

# 🌿 Estratégia de refatoração

Para documentar minha evolução e praticar um fluxo de desenvolvimento mais próximo do utilizado profissionalmente, as melhorias poderão seguir:

```text
Issue
 ↓
Branch
 ↓
Desenvolvimento
 ↓
Commit
 ↓
Pull Request
 ↓
Code Review
 ↓
Merge
```

Mesmo sendo um projeto individual, esse processo permite praticar organização e versionamento de código.

---

# 📝 Exemplos de commits

As próximas alterações serão registradas utilizando commits mais descritivos.

Exemplos:

```text
refactor: improve character selection logic

feat: add click character selection

feat: add keyboard navigation

a11y: improve character cards accessibility

refactor: separate character data from markup

feat: render characters dynamically

fix: improve mobile layout

docs: document project refactoring
```

---

# 📋 Roadmap

### JavaScript

* [ ] Refatorar seleção dos personagens
* [ ] Separar responsabilidades
* [ ] Criar estrutura de dados dos personagens
* [ ] Renderizar personagens dinamicamente

### Interação

* [ ] Adicionar seleção através de click
* [ ] Adicionar suporte a touch
* [ ] Implementar navegação por teclado

### Acessibilidade

* [ ] Melhorar navegação por foco
* [ ] Revisar HTML semântico
* [ ] Adicionar atributos ARIA quando necessários
* [ ] Revisar textos alternativos
* [ ] Melhorar foco visual

### Responsividade

* [ ] Revisar versão mobile
* [ ] Melhorar área de toque
* [ ] Revisar tipografia
* [ ] Testar diferentes resoluções

### Evolução

* [ ] Criar versão React
* [ ] Migrar versão React para TypeScript
* [ ] Adicionar testes

---

# 🎓 Origem do projeto

Projeto desenvolvido originalmente durante meus estudos utilizando conteúdos e desafios educacionais do **Dev em Dobro**.

A versão presente neste repositório e suas futuras refatorações fazem parte do meu processo pessoal de aprendizado, evolução técnica e construção de portfólio.

---

# 👨‍💻 Autor

**Luís Felipe Bond**

Desenvolvedor Front-end / Full Stack JavaScript Jr.

Tecnologias em estudo e desenvolvimento:

`JavaScript` • `TypeScript` • `React` • `Node.js`

GitHub:

https://github.com/lfbond

---

## ⭐ Projeto em evolução

Este repositório também funciona como registro da minha evolução como desenvolvedor.

Em vez de esconder códigos desenvolvidos durante etapas anteriores dos meus estudos, pretendo utilizá-los para demonstrar:

**como eu programava → o que aprendi → o que identifiquei → como refatorei → como faria hoje.**

🚀 As próximas melhorias serão documentadas através dos commits e do histórico do projeto.

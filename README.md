# X-Men Clone | Dev em Dobro

Interface interativa inspirada no menu da série animada **X-Men**, desenvolvida a partir de um desafio do canal [Dev em Dobro](https://www.youtube.com/@devemdobro). O projeto recria a atmosfera visual dos anos 90 com cards de personagens, imagem em destaque e layout responsivo.

> Projeto educacional de front-end, feito para praticar HTML, CSS e JavaScript puro.

## Demonstração

Confira a versão publicada no GitHub Pages: [X-Men Clone](https://lfbond.github.io/projeto_xmen_clone_devEmDobro/).

![Prévia do X-Men Clone](https://github.com/lfbond/projeto_xmen_clone_devEmDobro/assets/69223872/1c601df0-3ee4-47a4-a85b-547a70c428c2)

## Funcionalidades

- Exibição de oito personagens: Ciclope, Jean Grey, Lince Negra, Tempestade, Vampira, Wolverine, Noturno e Magneto.
- Seleção de personagem ao passar o mouse sobre um card.
- Atualização dinâmica da imagem, do nome e da descrição do personagem selecionado.
- Destaque visual do card ativo com borda e sombra.
- Rolagem automática para o topo em telas muito pequenas, facilitando a visualização do personagem selecionado.
- Layout adaptado para desktops, tablets e dispositivos móveis.

## Tecnologias

- **HTML5** para a estrutura semântica da página.
- **CSS3** para layout, cores, tipografia, fundo e responsividade.
- **JavaScript** para eventos de seleção e atualização dos dados exibidos.
- **Google Fonts** para carregar a fonte Oxanium.
- **GitHub Pages** para publicação da demonstração.

Não há framework, gerenciador de pacotes ou processo de compilação. O navegador executa os arquivos diretamente.

## Estrutura do projeto

```text
.
├── index.html                 # Página principal
├── src/
│   ├── assets/                # Imagens, logo e favicon
│   ├── css/
│   │   ├── reset.css          # Reset básico dos estilos
│   │   ├── estilos.css        # Estilos principais da interface
│   │   └── responsivo.css     # Regras para telas menores
│   └── js/
│       └── index.js           # Lógica de seleção dos personagens
└── README.md
```

## Como executar localmente

Como este é um projeto estático, basta clonar o repositório e abrir o `index.html` no navegador.

### 1. Clonar o repositório

```bash
git clone https://github.com/lfbond/projeto_xmen_clone_devEmDobro.git
cd projeto_xmen_clone_devEmDobro
```

### 2. Abrir a aplicação

No Windows, abra o arquivo `index.html` pelo Explorador de Arquivos ou execute:

```powershell
start .\index.html
```

No macOS:

```bash
open index.html
```

No Linux:

```bash
xdg-open index.html
```

Também é possível usar a extensão **Live Server** do VS Code para servir o projeto localmente e recarregar a página automaticamente durante o desenvolvimento.

## Como funciona

Cada card de personagem possui um `id`, um nome e uma descrição em atributos `data-*` no HTML. O arquivo `src/js/index.js` escuta o evento `mouseenter` e, quando a seleção muda:

1. Remove a classe `selecionado` do card anterior.
2. Adiciona a classe ao card atual.
3. Monta o caminho da imagem correspondente usando o `id` do personagem.
4. Atualiza o nome e a descrição na área de destaque.

Para adicionar um personagem, inclua o card e seus dados no `index.html` e disponibilize as imagens com os nomes esperados em `src/assets/`:

```text
card-id-do-personagem.jpg
card-id-do-personagem.png
```

## Melhorias planejadas

- Adicionar suporte à seleção por clique e teclado, além do mouse.
- Incluir informações detalhadas de cada personagem.
- Adicionar efeitos sonoros opcionais, respeitando direitos autorais.
- Expandir a lista com mais personagens e vilões.
- Melhorar a acessibilidade com foco visível, navegação por teclado e estados adequados para leitores de tela.

## Contribuição

1. Faça um fork do projeto.
2. Crie uma branch para sua alteração:

   ```bash
   git checkout -b minha-melhoria
   ```

3. Faça as alterações e teste a interface em diferentes tamanhos de tela.
4. Envie um pull request descrevendo o que foi alterado.

Sugestões e relatos de problemas também podem ser enviados pela seção de [issues](https://github.com/lfbond/projeto_xmen_clone_devEmDobro/issues).

## Créditos

Projeto inspirado no desafio do [Dev em Dobro](https://www.youtube.com/@devemdobro). As imagens e os personagens pertencem aos seus respectivos detentores de direitos. Este repositório tem finalidade educacional.

## Licença

Não há um arquivo `LICENSE` no repositório no momento. Defina e adicione uma licença ao projeto antes de distribuí-lo oficialmente.



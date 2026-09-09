import { characters, getCharacterById } from "../data/characters.js";

// Estado da aplicação
let state = {
  selectedId: null,
  characters: characters,
};

// ======================
// FUNÇÕES PURAS (não tocam no DOM)
// ======================

function getSelectedCharacter() {
  return state.selectedId ? getCharacterById(state.selectedId) : null;
}

function isCharacterSelected(id) {
  return state.selectedId === id;
}

function selectCharacter(id) {
  // Atualiza estado
  state.selectedId = id;

  // Retorna o estado atualizado para quem quiser usar
  return state;
}

function deselectCharacter() {
  state.selectedId = null;
  return state;
}

function toggleCharacter(id) {
  if (isCharacterSelected(id)) {
    return deselectCharacter();
  }
  return selectCharacter(id);
}

// ======================
// FUNÇÕES DE RENDERIZAÇÃO (interagem com o DOM)
// ======================

function renderCharacterList(container) {
  if (!container) return;

  // Limpa o container
  container.innerHTML = "";

  // Cria cada card de personagem
  state.characters.forEach((char) => {
    const card = createCharacterCard(char);
    container.appendChild(card);
  });
}

function createCharacterCard(char) {
  const isSelected = isCharacterSelected(char.id);

  // Usando elementos semânticos
  const card = document.createElement("article");
  card.className = `character-card ${isSelected ? "selected" : ""}`;
  card.dataset.characterId = char.id;

  // Botão para seleção (semântico e acessível)
  const button = document.createElement("button");
  button.className = "character-button";
  button.setAttribute("aria-label", `Selecionar ${char.name}`);
  button.setAttribute("aria-selected", isSelected ? "true" : "false");

  // Imagem com alt descritivo
  const img = document.createElement("img");
  img.src = char.image;
  img.alt = char.alt || `${char.name} - ${char.power}`;
  img.loading = "lazy";
  img.width = 200;
  img.height = 200;

  // Informações do personagem
  const info = document.createElement("div");
  info.className = "character-info";

  const name = document.createElement("h3");
  name.textContent = char.name;

  const realName = document.createElement("p");
  realName.className = "real-name";
  realName.textContent = char.realName;

  const power = document.createElement("p");
  power.className = "power";
  power.textContent = `⚡ ${char.power}`;

  // Monta a estrutura
  info.appendChild(name);
  info.appendChild(realName);
  info.appendChild(power);

  button.appendChild(img);
  button.appendChild(info);
  card.appendChild(button);

  // Evento de clique (mouse)
  button.addEventListener("click", () => {
    handleCharacterClick(char.id);
  });

  // Evento de teclado (ENTER e SPACE já são nativos do button!)
  // Não precisamos de onKeyDown para buttons

  return card;
}

// ======================
// HANDLERS (orquestram estado + UI)
// ======================

function handleCharacterClick(id) {
  // Atualiza estado
  const newState = toggleCharacter(id);

  // Atualiza UI (rerenderiza apenas os cards afetados)
  updateCharacterCards();

  // Dispara evento customizado para outros componentes
  const event = new CustomEvent("characterSelected", {
    detail: { characterId: id, selected: isCharacterSelected(id) },
  });
  document.dispatchEvent(event);
}

function updateCharacterCards() {
  const cards = document.querySelectorAll(".character-card");
  cards.forEach((card) => {
    const id = card.dataset.characterId;
    const isSelected = isCharacterSelected(id);

    // Atualiza classe
    card.classList.toggle("selected", isSelected);

    // Atualiza ARIA
    const button = card.querySelector(".character-button");
    if (button) {
      button.setAttribute("aria-selected", isSelected ? "true" : "false");
    }
  });
}

// ======================
// INICIALIZAÇÃO
// ======================

export function initCharacterSelector(containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container #${containerId} não encontrado`);
    return;
  }

  // Renderiza a lista inicial
  renderCharacterList(container);

  // Adiciona listeners globais (ex: teclado)
  document.addEventListener("keydown", (e) => {
    // ESC para deselecionar
    if (e.key === "Escape") {
      deselectCharacter();
      updateCharacterCards();
    }
  });

  console.log("✅ Character Selector inicializado");
}

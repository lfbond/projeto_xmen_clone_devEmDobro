import {
  characters,
  getCharacterById,
  searchCharacters,
} from "../data/characters.js";

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

  // Card principal
  const card = document.createElement("article");
  card.className = `character-card ${isSelected ? "selected" : ""}`;
  card.dataset.characterId = char.id;

  // Botão de seleção
  const button = document.createElement("button");
  button.className = "character-button";
  button.setAttribute("aria-label", `Selecionar ${char.name}`);
  button.setAttribute("aria-selected", isSelected ? "true" : "false");

  // ==============================================
  // IMAGEM
  // ==============================================
  const img = document.createElement("img");
  img.src = char.image;
  img.alt = char.alt || `${char.name} - ${char.power}`;
  img.loading = "lazy";
  img.width = 200;
  img.height = 200;
  img.onerror = function () {
    this.src = "./src/assets/images/placeholder/default.jpg";
    this.alt = "Imagem não disponível";
  };

  // ==============================================
  // INFORMAÇÕES DO PERSONAGEM (TUDO AQUI!)
  // ==============================================
  const info = document.createElement("div");
  info.className = "character-info";

  // ----- 1. NOME DO PERSONAGEM -----
  const name = document.createElement("h3");
  name.className = "character-name";
  name.textContent = char.name;

  // ----- 2. NOME REAL -----
  const realName = document.createElement("p");
  realName.className = "real-name";
  realName.textContent = `📛 ${char.realName}`;

  // ----- 3. PODER -----
  const power = document.createElement("p");
  power.className = "power";
  power.textContent = `⚡ ${char.power}`;

  // ----- 4. NÍVEL (com estrelas) -----
  const level = document.createElement("p");
  level.className = "level";
  // Cria estrelas baseado no nível
  const stars = "⭐".repeat(char.level) + "☆".repeat(5 - char.level);
  level.textContent = `Nível: ${stars}`;
  level.setAttribute("aria-label", `Nível ${char.level} de 5`);

  // ----- 5. EQUIPE (com cor) -----
  const team = document.createElement("p");
  team.className = `team team-${char.team.toLowerCase().replace(/\s+/g, "-")}`;
  team.textContent = `🏷️ ${char.team}`;

  // ----- 6. STATUS -----
  const status = document.createElement("p");
  status.className = "status";
  const statusIcon = char.status === "Ativo" ? "🟢" : "🔴";
  status.textContent = `${statusIcon} ${char.status}`;
  status.setAttribute("aria-label", `Status: ${char.status}`);

  // ----- 7. PRIMEIRA APARIÇÃO -----
  const firstAppearance = document.createElement("p");
  firstAppearance.className = "first-appearance";
  firstAppearance.textContent = `📚 ${char.firstAppearance}`;

  // ----- 8. BIOGRAFIA (resumida) -----
  const bio = document.createElement("p");
  bio.className = "bio";
  // Limita a bio a 100 caracteres para não ficar enorme
  const bioText =
    char.bio.length > 100 ? char.bio.substring(0, 100) + "..." : char.bio;
  bio.textContent = bioText;

  // ----- 9. BOTÃO "VER MAIS" (opcional) -----
  const detailsButton = document.createElement("button");
  detailsButton.className = "details-button";
  detailsButton.textContent = "📖 Ver mais";
  detailsButton.setAttribute("aria-label", `Ver detalhes de ${char.name}`);
  detailsButton.addEventListener("click", (e) => {
    e.stopPropagation(); // Não seleciona o personagem
    showCharacterDetails(char); // Função para mostrar detalhes completos
  });

  // ==============================================
  // MONTAGEM DA ESTRUTURA
  // ==============================================

  // Adiciona todos os elementos à div info
  info.appendChild(name);
  info.appendChild(realName);
  info.appendChild(power);
  info.appendChild(level);
  info.appendChild(team);
  info.appendChild(status);
  info.appendChild(firstAppearance);
  info.appendChild(bio);
  info.appendChild(detailsButton); // Opcional

  // Monta o card
  button.appendChild(img);
  button.appendChild(info);
  card.appendChild(button);

  // ==============================================
  // EVENTO DE CLIQUE (seleção)
  // ==============================================
  button.addEventListener("click", () => {
    handleCharacterClick(char.id);
  });

  return card;
}

// ==============================================
// FUNÇÃO PARA MOSTRAR DETALHES COMPLETOS
// ==============================================

function showCharacterDetails(char) {
  // Cria um modal ou expande o card
  const detailsContainer = document.createElement("div");
  detailsContainer.className = "character-details-modal";
  detailsContainer.setAttribute("role", "dialog");
  detailsContainer.setAttribute("aria-modal", "true");
  detailsContainer.setAttribute("aria-labelledby", "details-title");

  detailsContainer.innerHTML = `
    <div class="details-content">
      <button class="close-details" aria-label="Fechar detalhes">✕</button>
      <h2 id="details-title">${char.name}</h2>
      <img src="${char.image}" alt="${char.alt}" style="max-width: 200px;">
      <p><strong>Nome real:</strong> ${char.realName}</p>
      <p><strong>Poder:</strong> ${char.power}</p>
      <p><strong>Nível:</strong> ${"⭐".repeat(char.level)}</p>
      <p><strong>Equipe:</strong> ${char.team}</p>
      <p><strong>Status:</strong> ${char.status}</p>
      <p><strong>Primeira aparição:</strong> ${char.firstAppearance}</p>
      <p><strong>Biografia:</strong> ${char.bio}</p>
    </div>
  `;

  document.body.appendChild(detailsContainer);

  // Fechar modal
  const closeBtn = detailsContainer.querySelector(".close-details");
  closeBtn.addEventListener("click", () => {
    detailsContainer.remove();
  });

  // Fechar com ESC
  detailsContainer.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      detailsContainer.remove();
    }
  });

  // Fechar clicando fora
  detailsContainer.addEventListener("click", (e) => {
    if (e.target === detailsContainer) {
      detailsContainer.remove();
    }
  });
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

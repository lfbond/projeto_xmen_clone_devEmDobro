/**
 * Dados completos dos personagens do universo X-Men
 * Refatorado e separado da lógica de DOM
 */

export const characters = [
  // ======================
  // X-MEN (TIME PRINCIPAL)
  // ======================

  {
    id: "professor-x",
    name: "Professor Charles Xavier",
    realName: "Charles Francis Xavier",
    power: "Telepatia, telecinese limitada, controle mental",
    image: "./src/assets/card-professorX.jpeg",
    alt: "Professor Charles Xavier em sua cadeira de rodas amarela",
    team: "X-Men",
    level: 5,
    status: "Ativo",
    firstAppearance: "X-Men #1 (1963)",
    bio: "Fundador dos X-Men, o Professor X é um dos mais poderosos telepatas do mundo. Dedica sua vida à coexistência entre humanos e mutantes.",
  },
  {
    id: "wolverine",
    name: "Wolverine",
    realName: "Logan (James Howlett)",
    power: "Fator de cura, garras de adamantium, sentidos apurados",
    image: "./src/assets/card-wolverine.jpg",
    alt: "Wolverine com garras de adamantium estendidas",
    team: "X-Men",
    level: 5,
    status: "Ativo",
    firstAppearance: "The Incredible Hulk #180 (1974)",
    bio: "Um dos mutantes mais icônicos, Wolverine possui um fator de cura que o torna praticamente imortal. Suas garras de adamantium podem cortar quase qualquer material.",
  },
  {
    id: "cyclops",
    name: "Cyclops",
    realName: "Scott Summers",
    power: "Rajada óptica de energia concussiva",
    image: "./src/assets/card-ciclope.jpg",
    alt: "Cyclops com seu visor vermelho característico",
    team: "X-Men",
    level: 4,
    status: "Ativo",
    firstAppearance: "X-Men #1 (1963)",
    bio: "Líder de campo dos X-Men, Cyclops dispara rajadas de energia de seus olhos que são controladas por um visor de rubi-quartzo.",
  },
  {
    id: "storm",
    name: "Storm",
    realName: "Ororo Munroe",
    power: "Atmocinese (controle do clima)",
    image: "./src/assets/card-tempestade.jpg",
    alt: "Storm com cabelos brancos e olhos brilhantes",
    team: "X-Men",
    level: 5,
    status: "Ativo",
    firstAppearance: "Giant-Size X-Men #1 (1975)",
    bio: "Deusa do clima, Storm pode controlar tempestades, raios, ventos e até a temperatura. Foi uma das líderes mais respeitadas dos X-Men.",
  },
  {
    id: "jean-grey",
    name: "Jean Grey",
    realName: "Jean Elaine Grey-Summers",
    power: "Telepatia, telecinese, Força Fênix",
    image: "./src/assets/card-jean-grey.jpg",
    alt: "Jean Grey com cabelos ruivos e aura verde",
    team: "X-Men",
    level: 5,
    status: "Ativo",
    firstAppearance: "X-Men #1 (1963)",
    bio: "Uma das mutantes mais poderosas, Jean Grey é uma telepatia e telecinética de nível ômega. Já foi hospedeira da entidade cósmica Força Fênix.",
  },
  {
    id: "beast",
    name: "Beast",
    realName: 'Dr. Henry "Hank" McCoy',
    power: "Força sobre-humana, agilidade, intelecto genial",
    image: "./src/assets/card-fera.jpeg",
    alt: "Beast com aparência felina azul",
    team: "X-Men",
    level: 4,
    status: "Ativo",
    firstAppearance: "X-Men #1 (1963)",
    bio: "Cientista brilhante e mutante com força e agilidade sobre-humanas. Beast é um dos intelectos mais avançados da Marvel.",
  },
  {
    id: "rogue",
    name: "Rogue",
    realName: "Anna Marie LeBeau",
    power: "Absorção de poderes, memórias e energia",
    image: "./src/assets/card-vampira.jpg",
    alt: "Rogue com mechas brancas no cabelo e jaqueta verde",
    team: "X-Men",
    level: 4,
    status: "Ativo",
    firstAppearance: "Avengers Annual #10 (1981)",
    bio: "Rogue absorve poderes, memórias e energia de qualquer pessoa que toca. Com o tempo aprendeu a controlar seus poderes.",
  },
  {
    id: "gambit",
    name: "Gambit",
    realName: "Remy Etienne LeBeau",
    power: "Carregamento cinético de objetos",
    image: "./src/assets/card-gambit.jpeg",
    alt: "Gambit com cartas de baralho e olhos vermelhos",
    team: "X-Men",
    level: 3,
    status: "Ativo",
    firstAppearance: "Uncanny X-Men #266 (1990)",
    bio: "Mestre do arremesso, Gambit pode carregar objetos com energia cinética, transformando-os em explosivos. É conhecido por seu charme e sotaque cajun.",
  },
  {
    id: "jubilee",
    name: "Jubilee",
    realName: "Jubilation Lee",
    power: "Explosões de energia pirotécnica",
    image: "./src/assets/card-jubillee.jpeg",
    alt: "Jubilee com óculos de sol e jaqueta amarela",
    team: "X-Men",
    level: 3,
    status: "Ativo",
    firstAppearance: "Uncanny X-Men #244 (1989)",
    bio: "A mais jovem dos X-Men originais, Jubilee cria explosões de energia que usa para ofuscar e desorientar inimigos.",
  },
  {
    id: "nightcrawler",
    name: "Nightcrawler",
    realName: "Kurt Wagner",
    power: "Teletransporte, agilidade sobre-humana",
    image: "./src/assets/card-noturno.jpg",
    alt: "Nightcrawler com aparência demoníaca azul e cauda",
    team: "X-Men",
    level: 4,
    status: "Ativo",
    firstAppearance: "Giant-Size X-Men #1 (1975)",
    bio: "Mutante com aparência demoníaca, Nightcrawler possui a habilidade de se teletransportar através de dimensões. É profundamente religioso e espiritual.",
  },
  {
    id: "colossus",
    name: "Colossus",
    realName: "Piotr Nikolaievitch Rasputin",
    power: "Transformação em aço orgânico",
    image: "./src/assets/card-colossus.jpeg",
    alt: "Colossus em forma de aço orgânico",
    team: "X-Men",
    level: 4,
    status: "Ativo",
    firstAppearance: "Giant-Size X-Men #1 (1975)",
    bio: "Colossus pode transformar sua pele em aço orgânico, ganhando força e resistência sobre-humanas. É um dos mais fortes X-Men.",
  },
  {
    id: "shadowcat",
    name: "Shadowcat (Kitty Pryde)",
    realName: 'Katherine "Kitty" Pryde',
    power: "Intangibilidade, faseamento",
    image: "./src/assets/card-lince-negra.jpg",
    alt: "Shadowcat com cabelo castanho e uniforme preto",
    team: "X-Men",
    level: 4,
    status: "Ativo",
    firstAppearance: "Uncanny X-Men #129 (1980)",
    bio: "Kitty Pryde pode atravessar objetos sólidos, tornando-se intangível. É uma especialista em computação e liderança.",
  },

  // ======================
  // IRMANDADE DE MUTANTES
  // ======================

  {
    id: "magneto",
    name: "Magneto",
    realName: "Erik Magnus Lehnsherr",
    power: "Magnetocinese, controle de metais",
    image: "./src/assets/card-magneto.jpg",
    alt: "Magneto com capacete vermelho e roxo",
    team: "Irmandade",
    level: 5,
    status: "Ativo",
    firstAppearance: "X-Men #1 (1963)",
    bio: "Magneto é o mestre do magnetismo e um dos mutantes mais poderosos. Líder da Irmandade, acredita na supremacia mutante.",
  },
  {
    id: "mystique",
    name: "Mystique",
    realName: "Raven Darkhölme",
    power: "Metamorfose, mudança de forma",
    image: "./src/assets/card-mistica.jpeg",
    alt: "Mystique com pele azul e cabelo vermelho",
    team: "Irmandade",
    level: 4,
    status: "Ativo",
    firstAppearance: "Ms. Marvel #18 (1978)",
    bio: "Mystique é uma metamorfa que pode assumir a aparência de qualquer pessoa. É uma das mutantes mais enigmáticas e perigosas.",
  },
  {
    id: "juggernaut",
    name: "Juggernaut",
    realName: "Cain Marko",
    power: "Força invencível, resistência sobre-humana",
    image: "./src/assets/card-juggernalt.jpeg",
    alt: "Juggernaut com capacete de metal",
    team: "Irmandade",
    level: 5,
    status: "Ativo",
    firstAppearance: "X-Men #12 (1965)",
    bio: "Embora não seja mutante, Juggernaut é uma força imparável da natureza. Seu poder vem da mística Cyttorak.",
  },
  {
    id: "quicksilver",
    name: "Quicksilver",
    realName: "Pietro Maximoff",
    power: "Supervelocidade",
    image: "./src/assets/card-quicksilver.jpeg",
    alt: "Quicksilver com cabelo prateado",
    team: "Irmandade",
    level: 4,
    status: "Ativo",
    firstAppearance: "X-Men #4 (1964)",
    bio: "Pietro Maximoff é um dos mutantes mais rápidos do mundo. É filho de Magneto e irmão de Wanda Maximoff (Feiticeira Escarlate).",
  },

  // ======================
  // NOVOS MUTANTES
  // ======================

  {
    id: "cannonball",
    name: "Cannonball",
    realName: 'Samuel "Sam" Guthrie',
    power: "Propulsão invulnerável",
    image: "./src/assets/card-cannonball.jpeg",
    alt: "Cannonball com seu capacete de voo",
    team: "Novos Mutantes",
    level: 3,
    status: "Ativo",
    firstAppearance: "Marvel Graphic Novel #4 (1982)",
    bio: "Cannonball pode criar um campo de energia que o protege enquanto voa em alta velocidade. É líder dos Novos Mutantes.",
  },
  {
    id: "sunspot",
    name: "Sunspot",
    realName: 'Roberto "Bobby" da Costa',
    power: "Absorção de energia solar",
    image: "./src/assets/card-sunspot.jpeg",
    alt: "Sunspot com aura solar",
    team: "Novos Mutantes",
    level: 3,
    status: "Ativo",
    firstAppearance: "Marvel Graphic Novel #4 (1982)",
    bio: "Sunspot absorve energia solar para se tornar mais forte e criar explosões de calor. É um dos líderes dos Novos Mutantes.",
  },
  {
    id: "warlock",
    name: "Warlock",
    realName: "Warlock",
    power: "Transmorfeação",
    image: "./src/assets/card-warlock.jpeg",
    alt: "Warlock com aparência de technarch",
    team: "Novos Mutantes",
    level: 4,
    status: "Ativo",
    firstAppearance: "New Mutants #21 (1984)",
    bio: "Warlock é um technarch alienígena que se juntou aos Novos Mutantes. Pode se transformar em qualquer forma tecnológica.",
  },

  // ======================
  // X-FORCE
  // ======================

  {
    id: "cable",
    name: "Cable",
    realName: "Nathan Christopher Charles Summers",
    power: "Telepatia, telecinese, fator de cura",
    image: "./src/assets/card-cable.jpeg",
    alt: "Cable com armadura cibernética e arma",
    team: "X-Force",
    level: 5,
    status: "Ativo",
    firstAppearance: "New Mutants #87 (1990)",
    bio: "Cable é o filho de Cyclops e Jean Grey do futuro. É um soldado e líder militar com poderes psiônicos e tecnologia avançada.",
  },
  {
    id: "deadpool",
    name: "Deadpool",
    realName: "Wade Winston Wilson",
    power: "Fator de cura, imortalidade",
    image: "./src/assets/card-deadpool.jpeg",
    alt: "Deadpool em seu uniforme vermelho e preto",
    team: "X-Force",
    level: 4,
    status: "Ativo",
    firstAppearance: "New Mutants #98 (1991)",
    bio: 'O "Mercenário Tagarela" é conhecido por seu humor quebrar a quarta parede e seu fator de cura que o torna imortal.',
  },

  // ======================
  // MAGIA E OCULTISMO
  // ======================

  {
    id: "magik",
    name: "Magik",
    realName: "Illyana Rasputin",
    power: "Magia, teletransporte dimensional",
    image: "./src/assets/card-magik.jpeg",
    alt: "Magik com sua armadura e Soulsword",
    team: "X-Men",
    level: 5,
    status: "Ativo",
    firstAppearance: "Giant-Size X-Men #1 (1975)",
    bio: "Irmã de Colossus, Magik é uma poderosa feiticeira e governante do Limbo. Possui uma Soulsword que pode cortar qualquer coisa mágica.",
  },

  // ======================
  // OUTROS MUTANTES NOTÁVEIS
  // ======================

  {
    id: "angel",
    name: "Angel (Archangel)",
    realName: "Warren Kenneth Worthington III",
    power: "Asas, visão sobre-humana, sangue curativo",
    image: "./src/assets/card-angel.jpeg",
    alt: "Angel com asas brancas",
    team: "X-Men",
    level: 3,
    status: "Ativo",
    firstAppearance: "X-Men #1 (1963)",
    bio: "Angel possui asas de pássaro que permitem voar. Mais tarde, se torna Archangel com asas de metal e poderes aprimorados.",
  },
  {
    id: "bishop",
    name: "Bishop",
    realName: "Lucas Bishop",
    power: "Absorção de energia, projeção de energia",
    image: "./src/assets/card-bishop.jpeg",
    alt: "Bishop com seu uniforme azul e marca no rosto",
    team: "X-Men",
    level: 4,
    status: "Ativo",
    firstAppearance: "Uncanny X-Men #282 (1991)",
    bio: "Vindo do futuro, Bishop é um policial mutante que caça criminosos. Pode absorver e projetar energia.",
  },
  {
    id: "polaris",
    name: "Polaris",
    realName: "Lorna Dane",
    power: "Magnetocinese",
    image: "./src/assets/card-polaris.jpeg",
    alt: "Polaris com cabelo verde e magnetismo",
    team: "X-Men",
    level: 4,
    status: "Ativo",
    firstAppearance: "X-Men #49 (1968)",
    bio: "Filha de Magneto, Polaris também possui poder sobre metais e magnetismo. É uma mutante poderosa e líder dos X-Men.",
  },
];

// ======================
// FUNÇÕES AUXILIARES
// ======================

/**
 * Retorna um personagem pelo ID
 * @param {string} id - ID do personagem
 * @returns {Object|null} - Objeto do personagem ou null se não encontrado
 */
export function getCharacterById(id) {
  return characters.find((char) => char.id === id) || null;
}

/**
 * Retorna personagens por equipe
 * @param {string} team - Nome da equipe (X-Men, Irmandade, etc.)
 * @returns {Array} - Lista de personagens da equipe
 */
export function getCharactersByTeam(team) {
  return characters.filter((char) => char.team === team);
}

/**
 * Retorna personagens por nível mínimo
 * @param {number} minLevel - Nível mínimo (1-5)
 * @returns {Array} - Lista de personagens com nível >= minLevel
 */
export function getCharactersByLevel(minLevel) {
  return characters.filter((char) => char.level >= minLevel);
}

/**
 * Retorna personagens por status
 * @param {string} status - Status do personagem (Ativo, Inativo, etc.)
 * @returns {Array} - Lista de personagens com o status
 */
export function getCharactersByStatus(status) {
  return characters.filter((char) => char.status === status);
}

/**
 * Busca personagens por termo (nome ou poder)
 * @param {string} searchTerm - Termo para busca
 * @returns {Array} - Lista de personagens que correspondem à busca
 */
export function searchCharacters(searchTerm) {
  const term = searchTerm.toLowerCase().trim();
  if (!term) return characters;

  return characters.filter(
    (char) =>
      char.name.toLowerCase().includes(term) ||
      char.realName.toLowerCase().includes(term) ||
      char.power.toLowerCase().includes(term) ||
      char.team.toLowerCase().includes(term),
  );
}

/**
 * Retorna personagens aleatórios
 * @param {number} count - Quantidade de personagens
 * @returns {Array} - Lista de personagens aleatórios
 */
export function getRandomCharacters(count = 3) {
  const shuffled = [...characters].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

/**
 * Retorna estatísticas dos personagens
 * @returns {Object} - Estatísticas (total, por time, etc.)
 */
export function getCharacterStats() {
  const teams = {};
  const levels = {};
  const status = {};

  characters.forEach((char) => {
    // Estatísticas por time
    teams[char.team] = (teams[char.team] || 0) + 1;

    // Estatísticas por nível
    levels[char.level] = (levels[char.level] || 0) + 1;

    // Estatísticas por status
    status[char.status] = (status[char.status] || 0) + 1;
  });

  return {
    total: characters.length,
    teams,
    levels,
    status,
    averageLevel:
      characters.reduce((sum, char) => sum + char.level, 0) / characters.length,
  };
}

// ======================
// EXPORTAÇÃO PARA CONSOLE (DEBUG)
// ======================

console.log(`🧬 X-Men Database carregado: ${characters.length} personagens`);
console.log("📊 Estatísticas:", getCharacterStats());

export default characters;

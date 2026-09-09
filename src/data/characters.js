// Dados puros, fáceis de modificar e testar
export const characters = [
  {
    id: "wolverine",
    name: "Wolverine",
    realName: "Logan",
    power: "Fator de cura, garras de adamantium",
    image: "wolverine.jpg",
    alt: "Wolverine com garras estendidas",
    team: "X-Men",
    level: 5,
  },
  {
    id: "cyclops",
    name: "Cyclops",
    realName: "Scott Summers",
    power: "Rajada óptica",
    image: "cyclops.jpg",
    alt: "Cyclops com visor vermelho",
    team: "X-Men",
    level: 4,
  },
  {
    id: "storm",
    name: "Storm",
    realName: "Ororo Munroe",
    power: "Controle do clima",
    image: "storm.jpg",
    alt: "Storm com cabelo branco e olhos brilhantes",
    team: "X-Men",
    level: 5,
  },
  {
    id: "magneto",
    name: "Magneto",
    realName: "Erik Lehnsherr",
    power: "Controle magnético",
    image: "magneto.jpg",
    alt: "Magneto usando seu capacete",
    team: "Irmandade",
    level: 5,
  },
];

// Funções auxiliares para acessar dados
export function getCharacterById(id) {
  return characters.find((char) => char.id === id);
}

export function getCharactersByTeam(team) {
  return characters.filter((char) => char.team === team);
}

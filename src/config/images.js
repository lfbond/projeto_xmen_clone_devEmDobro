export const IMAGE_CONFIG = {
  // Tamanhos responsivos
  sizes: {
    mobile: { width: 300, height: 300 },
    tablet: { width: 400, height: 400 },
    desktop: { width: 500, height: 500 },
  },

  // Fallback
  fallback: "./src/assets/images/placeholder/avatar-default.svg",

  // CDN ou caminho base
  baseUrl: import.meta.env.DEV
    ? "./src/assets/images/" // desenvolvimento
    : "https://cdn.seusite.com/images/", // produção
};

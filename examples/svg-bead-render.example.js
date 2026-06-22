/**
 * EXEMPLE PÉDAGOGIQUE SIMPLIFIÉ
 * -----------------------------
 * Illustre le PRINCIPE général utilisé pour générer une perle en SVG
 * (gradient + légère variation aléatoire = "seed") plutôt qu'avec une image.
 *
 * Le moteur réel de GemStudio 360™ gère de nombreux presets par minéral
 * (veinage, inclusions, translucidité, etc.) qui ne sont pas reproduits ici.
 */

// Générateur pseudo-aléatoire simple basé sur un seed (pour reproductibilité)
function makeSeededRandom(seed) {
  let value = seed % 2147483647;
  return function next() {
    value = (value * 16807) % 2147483647;
    return (value - 1) / 2147483646;
  };
}

/**
 * Génère un fragment SVG très simplifié représentant une perle ronde
 * avec un dégradé radial, à partir d'une couleur de base et d'un seed.
 */
function renderDemoBead({ id, baseHue = 220, baseSat = 40, baseLight = 55, seed = 1 }) {
  const rng = makeSeededRandom(seed);

  // Légère variation de teinte pour que deux perles ne soient jamais identiques
  const hueJitter = (rng() - 0.5) * 12;
  const hue = baseHue + hueJitter;

  const gradientId = `demo-grad-${id}`;

  return `
    <defs>
      <radialGradient id="${gradientId}" cx="40%" cy="35%" r="65%">
        <stop offset="0%" stop-color="hsla(${hue}, ${baseSat}%, ${baseLight + 20}%, 1)" />
        <stop offset="60%" stop-color="hsla(${hue}, ${baseSat}%, ${baseLight}%, 1)" />
        <stop offset="100%" stop-color="hsla(${hue}, ${baseSat}%, ${baseLight - 20}%, 1)" />
      </radialGradient>
    </defs>
    <circle cx="50" cy="50" r="48" fill="url(#${gradientId})" />
  `;
}

// Exemple d'utilisation : génère 3 perles "Améthyste" avec de légères variations
for (let i = 0; i < 3; i++) {
  const svgFragment = renderDemoBead({
    id: `amethyst-${i}`,
    baseHue: 270,
    baseSat: 45,
    baseLight: 60,
    seed: 1000 + i,
  });
  console.log(svgFragment);
}

module.exports = { renderDemoBead, makeSeededRandom };

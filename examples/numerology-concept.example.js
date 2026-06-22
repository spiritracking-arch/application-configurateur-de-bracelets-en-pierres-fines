/**
 * EXEMPLE PÉDAGOGIQUE SIMPLIFIÉ
 * -----------------------------
 * Ce fichier illustre le *type* de transformation effectuée par le moteur
 * numérologique de GemStudio 360™ (texte + date → valeur symbolique → pierre).
 *
 * Il ne reproduit PAS la table de correspondance lettres/chiffres réelle,
 * ni les règles de réduction utilisées en production. Il s'agit d'un exemple
 * minimal à but illustratif et éducatif uniquement.
 */

// Exemple de table de correspondance simplifiée (illustrative uniquement)
const DEMO_LETTER_VALUES = {
  a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9,
  j: 1, k: 2, l: 3, m: 4, n: 5, o: 6, p: 7, q: 8, r: 9,
  s: 1, t: 2, u: 3, v: 4, w: 5, x: 6, y: 7, z: 8,
};

// Réduction numérique simple (somme des chiffres jusqu'à obtenir un nombre 1-9)
function reduceToSingleDigit(n) {
  while (n > 9) {
    n = String(n)
      .split("")
      .reduce((sum, d) => sum + Number(d), 0);
  }
  return n;
}

// Démonstration : transforme un prénom en un "nombre archétype" (1-9)
function demoNameToArchetype(firstName) {
  const total = firstName
    .toLowerCase()
    .split("")
    .reduce((sum, char) => sum + (DEMO_LETTER_VALUES[char] || 0), 0);

  return reduceToSingleDigit(total);
}

// Démo de mapping nombre → pierre (catalogue réduit, fictif, à but d'exemple)
const DEMO_STONE_BY_ARCHETYPE = {
  1: "Œil de Tigre",
  2: "Pierre de Lune",
  3: "Citrine",
  4: "Hématite",
  5: "Turquoise",
  6: "Quartz Rose",
  7: "Améthyste",
  8: "Labradorite",
  9: "Lapis Lazuli",
};

// Exemple d'utilisation
const archetype = demoNameToArchetype("Marie");
console.log(`Nombre archétype (démo) : ${archetype}`);
console.log(`Pierre associée (démo) : ${DEMO_STONE_BY_ARCHETYPE[archetype]}`);

module.exports = { demoNameToArchetype, reduceToSingleDigit };

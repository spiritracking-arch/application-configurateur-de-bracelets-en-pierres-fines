# Architecture — GemStudio 360™

> Document d'architecture à usage de vitrine technique. Les implémentations exactes (algorithme numérologique, moteur de génération SVG des minéraux, base de données complète des pierres) ne sont pas incluses dans ce dépôt.

## 1. Vue d'ensemble

L'application est une **Single Page Application (SPA) statique**, livrée comme une page HTML unique enrichie de JavaScript vanilla, fonctionnant comme **Progressive Web App (PWA)**. Aucun framework frontend n'est utilisé : l'état est géré manuellement en JavaScript natif, ce qui réduit le poids de l'application et le temps de chargement (critère important en e-commerce / SEO mobile).

## 2. Couches applicatives

### 2.1 Couche de présentation (UI)

- Système d'onglets (`tab-perles`, `tab-smart`, `tab-options`, `tab-panier`) pour séparer les responsabilités : sélection des pierres, suggestions, personnalisation visuelle, panier/commande.
- Rendu du bracelet dans un `<svg>` central, avec un cercle-guide sur lequel les perles sont positionnées de façon circulaire (calcul trigonométrique de la position de chaque perle selon son index et le nombre total de perles).
- Recherche et filtres (couleur, propriété, catégorie) avec **debounce** sur le champ de recherche pour limiter le nombre de re-rendus.

### 2.2 Moteur numérologique ("Chemin de Vie")

Module isolé qui transforme une identité (prénom(s), nom, date de naissance) en une série de valeurs numériques, elles-mêmes associées à une sélection de pierres représentant 8 dimensions symboliques (Base, Sommet, Chemin de Vie, Appel, Personnalité, Expression, Touche finale, Vœu).

> ℹ️ Le détail de la table de correspondance lettres → chiffres et des règles de réduction numérologique constitue le cœur algorithmique propriétaire de l'application et n'est pas documenté ici. Voir [`examples/numerology-concept.example.js`](../examples/numerology-concept.example.js) pour un exemple **pédagogique simplifié** du *type* de transformation effectuée (entrée texte → score → catégorie), sans reproduire la logique réelle.

### 2.3 Moteur de rendu génératif des gemmes

Chaque pierre du catalogue est rendue comme un **SVG généré dynamiquement** (et non comme une image statique), à partir d'un `seed` et d'un `preset` propres à chaque type de minéral. Cela permet de simuler :

- le veinage (ex. Lapis Lazuli, Labradorite) via des gradients et filtres SVG ;
- la translucidité et les inclusions internes ;
- des variations légères de teinte (jitter de hue) pour qu'aucune perle ne soit visuellement identique à une autre, même pierre.

Avantage technique : pas de banque d'images à charger/maintenir pour 70+ pierres × variations, tout est vectoriel et généré côté client.

> Voir [`examples/svg-bead-render.example.js`](../examples/svg-bead-render.example.js) pour un exemple simplifié du principe de génération (gradient radial + bruit), sans le moteur complet.

### 2.4 Module de suggestions intelligentes

- **Palettes harmonieuses** : regroupements de pierres pré-calculés par cohérence chromatique.
- **Thèmes prédéfinis** : compositions de bracelets clé-en-main (ex. "Protection", "Abondance", "Sérénité").
- **Score lithothérapique** : indicateur de cohérence énergétique de la composition choisie par l'utilisateur (propriété intellectuelle Loch Ness®).

### 2.5 Gestion d'état & historique

- Pile d'actions avec **undo/redo** sur la composition du bracelet.
- Persistance locale des favoris et de la composition en cours (état client, sans backend de compte utilisateur).
- Compteur de remplissage (perles posées / capacité max du bracelet, ex. 19 perles).

### 2.6 Tunnel de demande sur-mesure

L'application **ne vend pas directement** : elle aboutit à une demande envoyée à un artisan partenaire qui réalise physiquement le bracelet. Le tunnel final comprend :

1. Récapitulatif visuel de la composition + estimation tarifaire.
2. Formulaire (identité, taille de poignet, message) pré-rempli avec la composition sérialisée (champ caché).
3. Envoi de la demande → prise en charge par un artisan partenaire pour la confection.

### 2.7 PWA & Performance

- `manifest.json` pour l'installabilité (icônes, couleur de thème, mode standalone).
- Service Worker (`sw.js`) pour le cache des ressources statiques et le fonctionnement hors-ligne partiel.
- Optimisations de chargement : police chargée en `media="print"` puis basculée en `all` (évite le blocage du rendu), `touch-action: manipulation` pour supprimer le délai tactile de 300ms.

### 2.8 SEO & données structurées

- Balises Open Graph / Twitter Cards pour le partage social.
- JSON-LD `SoftwareApplication` (présentation de l'app comme un logiciel gratuit) et `FAQPage` (FAQ structurée, visible aussi en HTML classique pour l'accessibilité et le référencement).
- URL canonique déclarée pour éviter la duplication de contenu.

## 3. Flux de données simplifié

```
[Saisie identité] ──► [Moteur numérologique] ──► [8 pierres suggérées]
                                                        │
[Sélection manuelle perle par perle] ◄──────────────────┘
        │
        ▼
[État du bracelet (array ordonné de perles)]
        │
   ┌────┴─────┐
   ▼          ▼
[Rendu SVG] [Score lithothérapique + estimation prix]
   │
   ▼
[Panier] ──► [Formulaire de demande] ──► [Artisan partenaire]
```

## 4. Pourquoi ces choix techniques ?

| Choix | Raison |
|---|---|
| JS vanilla (pas de framework) | Poids minimal, chargement rapide, important pour le SEO mobile et la conversion e-commerce |
| SVG généré plutôt qu'images | Pas de banque d'images à maintenir pour 70+ pierres, rendu net à toute résolution, personnalisation infinie (seed) |
| PWA | Permet l'installation sur mobile sans passer par un store, fonctionnement hors-ligne partiel |
| JSON-LD FAQPage | Visibilité accrue dans les résultats de recherche enrichis (rich snippets) |
| Demande sur-mesure plutôt que paiement direct | Chaque bracelet étant unique et fabriqué à la main, le modèle nécessite une validation humaine par l'artisan avant fabrication |

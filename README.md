# 💎 GemStudio 360™ — Configurateur de Bracelet Chemin de Vie

> Vitrine technique et documentation d'architecture du **configurateur de bracelets en pierres fines** de [Loch Ness Paris](https://lochness-paris.com).

[![Live App](https://img.shields.io/badge/Application-en%20ligne-d4af37?style=for-the-badge)](https://lochness-paris.com/configurateur-de-bracelet.html)
[![Lithothérapie](https://img.shields.io/badge/Pierres-70%2B%20gemmes-8B5CF6?style=for-the-badge)](https://lochness-paris.com/configurateur-de-bracelet.html)
[![PWA](https://img.shields.io/badge/PWA-installable-1a1a1a?style=for-the-badge)](https://lochness-paris.com/configurateur-de-bracelet.html)
[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.19836838.svg)](https://doi.org/10.5281/zenodo.19836838)

**🔗 Essayer l'application : [lochness-paris.com/configurateur-de-bracelet.html](https://lochness-paris.com/configurateur-de-bracelet.html)**

---1. C. Guerineau, Loch Ness : Système Algorithmique de Détermination Archétypale et de Synergies Minérales à Géométrie Variable. (2026), , doi:10.5281/zenodo.19836837. 

## ✨ Présentation

**GemStudio 360™** est une application web (PWA) permettant de **créer un bracelet de lithothérapie sur-mesure**, en associant :

- un **calcul numérologique personnalisé** (« bracelet chemin de vie ») à partir des prénoms, du nom et de la date de naissance d'une personne ;
- un **configurateur visuel interactif** permettant de composer un bracelet perle par perle parmi un catalogue de **70+ pierres fines** ;
- un **rendu graphique génératif** (SVG) simulant le veinage, la translucidité et les inclusions propres à chaque minéral ;
- un **système de suggestions intelligentes** (palettes harmonieuses, thèmes prédéfinis, score lithothérapique) ;
- une **mise en relation avec un artisan partenaire** qui façonne physiquement le bracelet validé par l'utilisateur.

Ce dépôt est une **vitrine technique** : il documente l'architecture, les choix techniques et les concepts utilisés par l'application, **sans exposer le code source de production** (algorithme de calcul, moteur de rendu génératif, base de données des pierres), qui reste la propriété intellectuelle exclusive de Loch Ness®.

## 🧩 Fonctionnalités

| Module | Description |
|---|---|
| 🔢 Calcul "Chemin de Vie" | Numérologie appliquée à l'identité (prénoms + nom + date de naissance) → 8 pierres symboliques (Base, Sommet, Chemin de Vie, Appel, Personnalité, Expression, Touche finale, Vœu) |
| 🎨 Configurateur visuel | Sélection de perles par glisser/cliquer sur un bracelet en cercle ou en forme de poignet, avec rendu temps réel |
| 🤖 Suggestions intelligentes | Palettes de couleurs harmonieuses, thèmes prédéfinis, score de cohérence lithothérapique |
| 🪨 Catalogue de gemmes | 70+ pierres fines et précieuses, filtrables par couleur, propriété énergétique et catégorie |
| 🛠️ Options de personnalisation | Taille des perles, espacement, vue cercle/poignet, fond, animation de rotation |
| 🛒 Panier & demande sur-mesure | Récapitulatif, favoris, estimation tarifaire, envoi de la demande à un artisan partenaire |
| 📱 PWA | Installable, fonctionne hors-ligne via Service Worker, icônes et manifest dédiés |
| 🔍 SEO & données structurées | Schema.org (`SoftwareApplication`, `FAQPage`), Open Graph, Twitter Cards |

## 🏗️ Architecture

Voir [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) pour le détail des couches applicatives, du flux de données et des choix techniques (rendu SVG génératif, gestion d'état côté client, PWA).

```
Utilisateur
   │
   ▼
┌─────────────────────────────┐
│   Interface (HTML/CSS/JS)   │  ← onglets Perles / Smart / Options / Panier
└──────────────┬───────────────┘
               │
   ┌───────────┼────────────┐
   ▼           ▼            ▼
Moteur de    Moteur de    Module de
calcul       rendu SVG    suggestions
numérologie  génératif    (palettes, score)
   │           │            │
   └─────┬─────┴──────┬─────┘
         ▼             ▼
   État du bracelet (perles sélectionnées)
         │
         ▼
   Formulaire de demande → Artisan partenaire
```

## 🛠️ Stack technique

- **Frontend** : HTML5, CSS3 (custom properties), JavaScript vanilla (sans framework)
- **Rendu graphique** : SVG généré dynamiquement (gradients, filtres, motifs minéraux)
- **PWA** : `manifest.json` + Service Worker (cache, installabilité)
- **SEO** : balises Open Graph / Twitter Cards, JSON-LD (`SoftwareApplication`, `FAQPage`)
- **Analytics** : Google Tag (gtag.js)

## 📚 Documentation

- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — architecture détaillée
- [`docs/FEATURES.md`](docs/FEATURES.md) — détail fonctionnel de chaque module
- [`docs/ROADMAP.md`](docs/ROADMAP.md) — pistes d'évolution
- [`examples/`](examples/) — exemples de code **pédagogiques et simplifiés**, illustrant les concepts (et non le code de production)

## 🤝 Contribuer

Les contributions sont les bienvenues sur la **documentation**, les **exemples pédagogiques**, la **traduction** et les **suggestions d'architecture**. Voir [`CONTRIBUTING.md`](CONTRIBUTING.md).

## 🔒 Propriété intellectuelle

Ce dépôt est une vitrine documentaire publique. **L'algorithme de calcul numérologique, le moteur de rendu génératif des pierres, le système de score lithothérapique et le code source de production de l'application ne sont pas publiés ici** et restent la propriété intellectuelle exclusive de **Loch Ness®** (GemStudio 360™ / Score Lithothérapique™). Toute reproduction, copie ou imitation du configurateur, de son interface visuelle ou de son système de suggestion de gemmes est strictement interdite. Voir [`LICENSE`](LICENSE).

## 🔗 Liens

- 🌐 Application : **[lochness-paris.com/configurateur-de-bracelet.html](https://lochness-paris.com/configurateur-de-bracelet.html)**
- 🏠 Site : [lochness-paris.com](https://lochness-paris.com)
- 📜 DOI : [10.5281/zenodo.19836838](https://doi.org/10.5281/zenodo.19836838)
## 📖 Citation

Si vous référencez ce projet dans un travail académique, un article ou une documentation, merci de citer :

> C. Guerineau, *Loch Ness : Système Algorithmique de Détermination Archétypale et de Synergies Minérales à Géométrie Variable* (2026), doi:[10.5281/zenodo.19836837](https://doi.org/10.5281/zenodo.19836837)

## 🔒 Dépôt de propriété intellectuelle

La méthodologie et la nomenclature archétypale présentées dans ce projet font l'objet d'un dépôt horodaté et certifié (DOI) :

> C. Guerineau, *Loch Ness : Système Algorithmique de Détermination Archétypale et de Synergies Minérales à Géométrie Variable* (2026), DOI: [10.5281/zenodo.19836838](https://doi.org/10.5281/zenodo.19836838)

Format BibTeX :

```bibtex
@misc{guerineau_2026_lochness,
  author    = {Guerineau, Camille},
  title     = {Loch Ness : Système Algorithmique de Détermination Archétypale et de Synergies Minérales à Géométrie Variable},
  year      = {2026},
  publisher = {Zenodo},
  doi       = {10.5281/zenodo.19836838},
  url       = {https://doi.org/10.5281/zenodo.19836838}
}
```

<sub>Mots-clés : bracelet chemin de vie, configurateur de bijoux, lithothérapie, numérologie, pierres fines, bijou sur-mesure, PWA, gemmes, Loch Ness Paris.</sub>

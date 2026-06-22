# Fonctionnalités — GemStudio 360™

## 🔢 Calcul "Chemin de Vie"

- Deux modes : calcul par **Chemin de Vie** (date de naissance) ou par **Réduction de prénom** (mode "RG").
- Champs : prénom(s) + date de naissance.
- Résultat : un nombre archétype (ex. *7 — L'Analyste*) accompagné d'une description, et une sélection de pierres correspondantes affichées sous forme de "chips" cliquables.

## 🎨 Configurateur visuel

- Bracelet affiché en `<svg>`, perles disposées en cercle (vue "Cercle") ou en ellipse (vue "Poignet") selon la préférence de l'utilisateur.
- Ajout de perle par clic dans le catalogue, avec retour visuel ("toast" de confirmation), limite maximale de perles selon la taille de poignet choisie.
- Drag/réordonnancement des perles sur le bracelet (composition perle par perle).

## 🔍 Recherche & filtres

- Barre de recherche texte (avec debounce).
- Filtres par couleur (pastilles de couleur), par propriété énergétique (catégorisation symbolique) et par catégorie de pierre.

## 🤖 Suggestions intelligentes (onglet "Smart")

- **Palettes harmonieuses** : compositions de couleurs pré-calculées.
- **Thèmes prédéfinis** : compositions clé-en-main par intention (protection, abondance, sérénité, etc.).

## 🛠️ Options de personnalisation (onglet "Options")

- Taille des perles (slider 24–52 px).
- Espacement / rayon du bracelet (slider 100–175).
- Vue Cercle ↔ Poignet.
- Fond du bracelet (réglage visuel).
- Animation de rotation (activable/désactivable).
- Export de la composition (visuel et/ou données).

## 🛒 Panier & demande (onglet "Panier")

- Barre de remplissage (ex. *12 / 19 perles*).
- Score lithothérapique (cohérence énergétique de la composition, avec contenu explicatif).
- Liste des perles du panier, résumé (nombre de perles, prix estimé).
- Gestion des favoris.
- Bouton final d'envoi de la demande avec prix estimé.

## ✉️ Tunnel de demande sur-mesure

- Modale de contact avec récapitulatif visuel de la composition.
- Formulaire : prénom, nom, email, taille de poignet (avec aide à la mesure), message/intention.
- Champ caché transmettant la composition complète du bracelet (sérialisée) à l'artisan partenaire.

## 📱 PWA

- Application installable (icône, splash screen, mode standalone via `manifest.json`).
- Service Worker pour la mise en cache des ressources statiques.

## 🔍 SEO

- Données structurées `SoftwareApplication` (présentée comme application gratuite, Android/iOS).
- Données structurées `FAQPage` reprenant 10 questions/réponses sur le bracelet chemin de vie, dupliquées en HTML visible pour l'accessibilité.
- Open Graph et Twitter Cards pour le partage social.
- URL canonique.

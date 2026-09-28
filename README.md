# Imposteur — design system

Imposteur est un jeu d'ambiance de déduction sociale, joué sur un seul téléphone qu'on se passe autour de la table. L'ambiance est **pop et festive** : un fond blanc, du turquoise, du jaune pâle, des formes bien rondes et des boutons qui ont l'air d'autocollants. L'appli est un maître du jeu complice : elle distribue les mots, désigne qui commence et arbitre les éliminations ; le débat et le vote se font à l'oral.

> **Statut : version 2.** Le dépôt `Adrien-EPF/Impostor_Game` ne contient pas encore de code d'interface : tout ce qui suit vient de ses choix (pop & festif, thème clair uniquement, turquoise + jaune pâle sur blanc, typo ronde, icônes de rôles, animations de révélation, ton complice).

## Ton : complice et taquin

L'appli parle comme un ami qui anime la soirée : tutoiement, phrases courtes, un clin d'œil de temps en temps.

| Écran | Oui | Non |
| --- | --- | --- |
| E5 Passage | « Passe le téléphone à **Léa**. Les autres, on regarde ailleurs 👀 » | « Veuillez transmettre l'appareil au joueur suivant. » |
| E5 Carte | « Ton mot : **Orangina**. Chut. » | « Vous êtes Civil. » (on ne dit jamais son rôle à un civil ou un imposteur) |
| E5 Mr. White | « Tu es **Mr. White**. Aucun mot pour toi… bon courage 😏 » | |
| E6 Tour | « Tour 3 — **Hugo** commence. Un mot chacun, pas plus ! » | |
| E7 Élimination | « Adieu **Sam**… c'était un Imposteur ! » | « Joueur éliminé. Rôle : IMPOSTEUR. » |
| E8 Fin | « Les civils ont flairé l'arnaque 🎉 » | |

- Un emoji au maximum par écran, jamais dans le mot secret ni sur un bouton.
- La blague ne cache jamais la consigne : l'action à faire est toujours dans le libellé du bouton (« Afficher mon mot », « J'ai mémorisé »).
- Même écran pour un Civil et un Imposteur : jamais d'indice sur le rôle avant la révélation.

## Fondations visuelles

- **Fond blanc** `surface` partout ; tuiles et panneaux en `surface-tint`.
- **Turquoise** `turquoise` = la marque et l'action principale (un seul bouton turquoise par écran, texte `ink`). Pour du texte turquoise sur blanc, utiliser `turquoise-deep`.
- **Jaune pâle** `lemon` = la carte secrète et les mises en avant. Il se voit à peine sur le blanc : toujours avec `shadow-card`. `lemon-strong` marque le « premier joueur ».
- **Rôles = couleur + icône + nom**, et seulement après révélation : Civil `civil` (turquoise, silhouette), Imposteur `imposteur` (corail, loup masqué), Mr. White `mr-white` (lavande, fantôme). Texte `ink` sur chacun.
- **Définitif = `danger`** : le bouton « Éliminer » est le seul rouge de l'appli. Pas d'Annuler.
- **Style sticker** : boutons en `radius-pill`, tuiles et cartes en `radius-lg`, ombre dure `shadow-sticker` qui s'écrase au clic.
- **Typo ronde** : Baloo 2 (`display`) pour le mot secret et les titres lus à 1 m, Nunito (`sans`) pour les consignes et les boutons.
- **Toucher** : zones cliquables d'au moins 44 px (les boutons font 56 px), écart `space-4` entre tuiles, marge d'écran `space-6`.

## Iconographie

Trois icônes de rôle pleines et arrondies, dans le groupe **Roles**. Elles sont toujours posées sur un disque de la couleur du rôle, avec le nom à côté. Pas d'autres icônes pour l'instant.

## Animations

Deux moments sont animés : le retournement de la carte secrète et la révélation d'un rôle. Voir la section **Animations** et les composants `CarteSecrete` et `RevelationRole`.


## Animations (détail)

Deux moments forts, animés avec un petit rebond ; le reste de l'appli reste immobile.

| Moment | Quoi | Durée | Courbe |
| --- | --- | --- | --- |
| Carte secrète — « Afficher mon mot » | La carte se retourne (rotation Y 0 → 180°), dos turquoise → face `lemon` | 450 ms | `cubic-bezier(.34, 1.56, .64, 1)` (rebond) |
| Carte secrète — « J'ai mémorisé » | Retour face cachée, sans rebond : le mot doit disparaître vite | 250 ms | `ease-in` |
| Révélation d'un rôle (E7) | Le disque du rôle apparaît en « pop » (échelle 0.4 → 1.08 → 1), puis le libellé glisse de 8 px vers le haut | 500 ms + 200 ms | rebond, puis `ease-out` |
| Bouton pressé | L'ombre `shadow-sticker` passe à 0, le bouton descend de 4 px | 80 ms | `ease-out` |
| Victoire (E8) | Pluie de confettis ronds `turquoise`, `lemon-strong`, `imposteur`, `mr-white` | 1,2 s, une fois | `ease-out` |

Règles :

- Le mot n'est **jamais** visible pendant l'animation d'ouverture avant la moitié du retournement, et il est masqué dès le début de la fermeture.
- `prefers-reduced-motion: reduce` : pas de rotation ni de rebond, un simple fondu de 150 ms.
- Aucune animation en boucle.


## Iconographie — fichiers


Trois pictogrammes pleins et arrondis, un par rôle : **Civil** (silhouette), **Imposteur** (loup de bal masqué), **Mr. White** (fantôme, sans mot). Grille 24 px, encre unique `ink` (#1f2a37) — à recolorer en CSS si on les inline.

Toujours posés sur un disque de la couleur du rôle (`civil`, `imposteur`, `mr-white`) avec le nom du rôle à côté : la couleur seule ne suffit jamais. N'apparaissent qu'après une révélation (élimination E7, fin de partie E8) — jamais sur la carte secrète.


## Fichiers

- `colors_and_type.css` — toutes les variables (couleurs, espacements, rayons, ombres, polices) et les classes de texte.
- `tokens.json` — les mêmes tokens en JSON.
- `assets/roles/` — icônes Civil, Imposteur, Mr. White (SVG).
- `components/` — aperçus HTML : Bouton, CarteSecrete, RevelationRole, cover.

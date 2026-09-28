---
category: Jeu
---

# CarteSecrete

La carte de l'écran E5 : face cachée turquoise, puis retournée sur une face `lemon` qui montre le mot en `secret-word`.

- Le consommateur fournit le prénom du joueur et son mot (ou « Tu es Mr. White » à la place du mot).
- « Afficher mon mot » retourne la carte (450 ms avec rebond) ; « J'ai mémorisé » la referme (250 ms) et vide le mot.
- Un Civil et un Imposteur voient exactement la même carte : jamais de couleur ou d'icône de rôle ici.
- Le mot n'est dans le DOM que pendant qu'il est affiché.
- `prefers-reduced-motion` : pas de rotation.
- Les mots longs (« Ping-pong », « Iced Tea ») réduisent leur taille jusqu'à tenir sur une ligne, sans descendre sous 28 px.

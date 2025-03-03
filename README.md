# mfe-atelier-elone-maccioni

Ce projet est un exercice de Micro Frontend utilisant **Module Federation** de Webpack. Il se compose de deux parties :

- **Shell (Application Hôte)** : L'application principale qui intègre dynamiquement le micro frontend.
- **Header (Micro Frontend)** : Un micro frontend indépendant qui expose un module (un composant Header) destiné à être intégré dans le Shell.

## Structure du Projet

La structure du dépôt est organisée de la manière suivante :

```bash
mfe-atelier-prenom-nom/
├── header/ # Micro frontend "Header"
│   ├── src/
│   │   ├── Header.js // Composant Header
│   │   └── index.js // Point d'entrée pour tester le Header en standalone (optionnel)
│   ├── webpack.config.js
│   └── package.json
└── shell/ # Application Hôte
    ├── src/
    │   └── index.js // Point d'entrée du Shell qui consomme le Header
    ├── webpack.config.js
    └── package.json


## Prérequis
Node.js installé sur ta machine.
npm (fourni avec Node.js).
Installation
Pour chaque partie du projet (header et shell), installe les dépendances :

1. Micro Frontend Header
bash
Copier
Modifier
cd header
npm install
2. Application Hôte (Shell)
bash
Copier
Modifier
cd shell
npm install
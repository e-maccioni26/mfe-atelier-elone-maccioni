# MFE Atelier - Elone Maccioni

Ce projet est un exercice de Micro Frontend utilisant **Module Federation** de Webpack. Il se compose de deux parties :

- **Shell (Application Hôte)** : L'application principale qui intègre dynamiquement le micro frontend.
- **Header (Micro Frontend)** : Un micro frontend indépendant qui expose un module (un composant Header) destiné à être intégré dans le Shell.

## Structure du Projet

La structure du dépôt est organisée de la manière suivante :

```plaintext
mfe-atelier-elone-maccioni/
├── header/          # Micro frontend "Header"
│   ├── src/
│   │   ├── Header.js    // Composant Header
│   │   └── index.js     // Point d'entrée pour tester le Header en standalone (optionnel)
│   ├── webpack.config.js
│   └── package.json
└── shell/           # Application Hôte
    ├── src/
    │   └── index.js     // Point d'entrée du Shell qui consomme le Header
    ├── webpack.config.js
    └── package.json
```

## Prérequis

- Node.js installé sur ta machine.
- npm (fourni avec Node.js).

## Installation

Pour chaque partie du projet (header et shell), installe les dépendances :

1. Micro Frontend Header
```bash
cd header
npm install
```

2. Application Hôte (Shell)
```bash
cd shell
npm install
```

## Démarrage de l'Application

1. Lancer le Micro Frontend Header
```bash
cd header
npx webpack serve
```
Le Header est servi sur le port 3001. Note : La page accessible directement sur http://localhost:3001 affichera "Cannot get /" car le Header est destiné à être consommé via le Shell. Pour tester le Header en standalone, ajoute un fichier index.html ou utilise le plugin HTML de Webpack.

2. Lancer l'Application Hôte (Shell)
```bash
cd shell
npx webpack serve
```
Le Shell est servi sur le port 3000. Ouvre http://localhost:3000 dans ton navigateur pour voir l'application en action.

## Fonctionnement

- Shell : Charge dynamiquement le module exposé par le micro frontend Header via Module Federation. Le composant Header est injecté en haut de la page, suivi du contenu principal du Shell.
- Header : Expose le composant Header dans le fichier remoteEntry.js pour que le Shell puisse l'importer.

## Configuration de Module Federation

- Dans `header/webpack.config.js`, le plugin ModuleFederation expose `./Header` via `remoteEntry.js`.
- Dans `shell/webpack.config.js`, le plugin ModuleFederation configure `header` comme remote en pointant sur `http://localhost:3001/remoteEntry.js`.

## Dépendances Partagées

Si vous utilisez des bibliothèques communes (comme React), pensez à les ajouter dans la section `shared` de la configuration Module Federation pour éviter les duplications.

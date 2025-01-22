# KeepUp - Gestionnaire d'Articles Web

## Description
Vue qu'OMNIVORE est dead, j'ai décidé de créer ma propre application de gestion d'articles. 
Je compte integrer les differentes fonctionnalités de omnivore dans cette application.


## Fonctionnalités
- Sauvegarde d'articles à partir d'URLs
- Affichage en mode grille ou liste
- Lecture des articles dans une vue dédiée
- Suppression d'articles


## Technologies Utilisées
### Frontend
- React.js
- Axios pour les requêtes HTTP
- CSS Modules pour le styling

### Backend
- Node.js
- Express.js
- PostgreSQL pour la base de données
- @mozilla/readability pour le parsing d'articles
- JSDOM pour le parsing HTML

## Installation

### Prérequis
- Node.js
- PostgreSQL
- npm ou yarn

### Configuration de la Base de Données
1. Créez une base de données PostgreSQL
2. Créez une table `articles` :
sql
CREATE TABLE articles (
id SERIAL PRIMARY KEY,
title VARCHAR(255),
link TEXT
);


### Configuration du Backend
1. Naviguez vers le dossier `keepUpAPI`
2. Créez un fichier `.env` avec les variables suivantes :
DB_USER=votre_utilisateur
DB_HOST=localhost
DB_NAME=nom_de_votre_base
DB_PASSWORD=votre_mot_de_passe
DB_PORT=5432
3. Installez les dépendances :
bash
npm install
4. Démarrez le serveur :
bash
npm start


## Utilisation
1. Ajoutez un article en cliquant sur le bouton "Add" dans la barre latérale
2. Collez l'URL de l'article que vous souhaitez sauvegarder
3. Visualisez vos articles en mode grille ou liste
4. Cliquez sur un article pour le lire
5. Utilisez la barre d'outils pour gérer vos articles (supprimer, archiver, etc.)

## Structure du Projet
keepUp/
├── keepUpAapp/ # Frontend React
│ ├── public/assets/ # Assets
│ ├── src/
│ │ ├── components/ # Composants React et Fichiers CSS
└── keepUpAPI/ # Backend Express
├── routes/ # Routes API
└── config/ # Configuration

## Contribution


## Licence
Ce projet est sous licence MIT - voir le fichier LICENSE pour plus de détails.

## Auteur
KeepUp - 2025

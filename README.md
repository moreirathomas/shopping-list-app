# Demo

![App Demo](demo.gif)

---

[Version française](#version-française)<br />
[English version](#english-version)

# Version française

## Comment voir ce projet

### Lancer le serveur api

Executez `npm run server`.<br/>
Le serveur d'api est lancé sur [http://localhost:3000](http://localhost:3000).

### Lancer l'app

Executez `ng serve`.<br/>
L'app est accessible à [http://localhost:4200](http://localhost:4200).

## Connection à MongoDB

Cette application utilise [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) comme base de données. Pour que l'application fonctionne, vous aurez besoin d'un compte (vous pouvez en créer un gratuitement).<br/>
Construisez un cluster ou utiliser un cluster existant. Puis connectez-le à l'application en utilisant les pilotes Node.js v3.0 ou plus récent de MongoDB.<br/>

Vous devrez renseigner un utilisateur et un mot de passe dans le fichier `backend/config.json`. <br/>

```js
// remplacez USER et PASSWORD dans la clé connectionString, noter le séparateur ':'
{
  "connectionString": "mongodb+srv://USER:PASSWORD@cluster0-nvcdl.mongodb.net/test?retryWrites=true&w=majority",
  "secret": "THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING"
}
```

## Amélioration à venir

- Page d'accueil avec authentification de l'utilisateur - **WIP**

---

# English version

## How to check this project

### Running the api server

Run `npm run server`.<br/>
The api server runs at [http://localhost:3000](http://localhost:3000).

### Running the app

Run `ng serve`.<br/>
The app runs at [http://localhost:4200](http://localhost:4200).

## MongoDB connect

This app uses [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) as a database. For the app to work you will need a account (you can create one for free).<br/>
Build a cluster or use an existing one. Then connect it to the app using MongoDB's Node.js v3.0 or later drivers.<br/>

You will need to provide a user and password in the `backend/config.json` file. <br/>

```js
// replace USER and PASSWORD in the connectionString key, note the ':' separator
{
  "connectionString": "mongodb+srv://USER:PASSWORD@cluster0-nvcdl.mongodb.net/test?retryWrites=true&w=majority",
  "secret": "THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING"
}
```

## Improvments to come

- Homepage with user authentication - **WIP**

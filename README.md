# Demo

![App Demo](demo.gif)

---

[Version française](#version-française)<br />
[English version](#english-version)

# Version française

## Comment voir ce projet

`git clone <ce repo>` <br/>
`npm i`

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

## Configuration de l'utilisateur pour authentification

L'application nécessite une authentification. Le système d'authentification vérifie si le nom d'utilisateur et le mot de passe fournis sont ceux d'un utilisateur de la base de donnée.<br/>
Vous devrez au préalable créer un cet utilisateur dans votre propre base de donnée.<br/>
Vous pouvez utiliser (Postman) [https://www.postman.com/] pour une mise en place facile.<br/>

```js
// requête POST à http://localhost:3000/api/users
{
	"username": "user",
    "password": "user"
}
```

## Amélioration à venir

- API factice pour une utilisation simplifiée (dans l'idée d'une demo)
- Refactorisation du code
- Enregirstrement d'un nouvel utilisateur ?
- Améliorations esthétiques

---

# English version

## How to check this project

`git clone <ce repo>` <br/>
`npm i`

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

_Je travaille actuellement à l'enregistrement utilisateur pour éviter ce problème._

## User set up for authentication

The app requires authentication. The authentication system checks if the username and the password provided are ones of a user in the database.<br/>
You will need to setup such a user in your own data base beforehand.<br/>
You can use (Postman)[https://www.postman.com/] for an easy set up. <br/>

```js
// POST request to http://localhost:3000/api/users
{
	"username": "user",
    "password": "user"
}
```

_I am currently working on user registration to avoid this inconvenience_

## Improvments to come

- Fake API implementation for easier usage (for a demo purposes)
- Code refactoring
- New user registration ?
- Aesthetic improvements

<h1 align="center">Fullstack Challenge (<strong>Backend</strong>) - Foton Tech 🔥</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
  <a href="https://twitter.com/hierror404" target="_blank">
    <img alt="Twitter: hierror404" src="https://img.shields.io/twitter/follow/hierror404.svg?style=social" />
  </a>
</p>

> This is the repository for the backend project of the Fullstack Challenge. It represents an API Rest that manages a library, being able to create new books and searching them.

## Installation and configuration

Use [npm](https://www.npmjs.com/) to install all the project dependencies.

```sh
npm install
```

After the installation, grab a copy of `.env.example` and rename it to `.env`. If you wish, set the port to a value different from default, but you'll need to change the port value inside the servers property of the `swagger.json` to run the docs locally.

## Usage

You can run the server with:

```sh
npm run start
```

If you wish to run into dev. mode, use instead:

```sh
npm run start:dev
```

## Documentation

Swagger is used to structure and deploy the documentation easily. To access the docs., go to the `/docs` endpoint of your server after starting it.

## Author

👤 **Hierro Duarte <hierror>**

-   Twitter: [@hierror404](https://twitter.com/hierror404)
-   Github: [@hierror](https://github.com/hierror)

## Thoughts about the project

There is a few thoughts that I would like to share with you about the development of this project, including improvements that could made to enhance it.

### Types!

I have done a lot of projects using [Node.js](https://nodejs.org/) and [Express](https://expressjs.com/pt-br/), so I am very experienced on it. Yet, this was my first time using [TypeScript](https://www.typescriptlang.org/) in the backend. Due to my lack of practice with it, there were times when TypeScript itself became an obstacle because I didn't understood how it all worked. Overrall, it was a great experience, since the language made it so easy to debug any problems that I ran into. 10/10, will use it again! 😆

### Linting and formatting

I have used [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) for linting and formatting the codebase. This could be improved using Husky, a library that could automate these processes using Git hooks, but it was a bit of overkill in this project.

### The database

Since this was a very simple project, I chose to go with a simple database instead of a technology that would give me more complexity through configuration than benefits, such as any SQL database or MongoDB. [PouchDB](https://pouchdb.com/) is an open-source JavaScript database inspired by Apache CouchDB, storing documents locally and in a very easy way. With it, I could simulate the behavior of a database without doing something as simple as in-memory array.

---

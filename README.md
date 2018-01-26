# Brewery-Conservation

## Homolog env
This application is deployed on [this firebase link](https://brewery-conservation.firebaseapp.com/panel)

And server side is deployed on [this Heroku link](https://dry-plateau-42363.herokuapp.com)

## Instructions
User information to use on this application:

email: email@domain.com
password: 123456 

## Instalation

Install the application dependencies.

```bash
npm install
```

- To initializate the application, run the command `start`, like the example bellow.

  ```bash
  npm start
  ```

- To compile the code and compress the assets, run the command `build`, like the example bellow.

  ```bash
  npm run build
  ```

## Requirements

- Node.js 6.x ^;
- NPM 3.x ^;


## Server Project

This project has a dependence of brewery-conservation-server that is on [this repository](https://github.com/aldo-jr/brewery-conservation-server)  

### What could I have been done in a better way?

I could have done the tests, but for the sake of time, I'll leave it to do on a v2

### What would I do in version 2.0?

- I'll open a websocket with server side, to get real time information
- I will improve the layout, UX and UI.
- Transform this web application on PWA (Progressive Web App)
- Use push notification
- Button to logout (access /logout)
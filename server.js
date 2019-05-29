const express = require('express');  // creates express app !!!
const helmet = require('helmet');  // hides headers 
const logger = require('morgan');  // logger thingy



// ADD this here and start building postRouter.js
const HubsRouter = require('./posts/postRouter');



const server = express();

// *-> GLOBAL MIDDLEWARE(declared up top here)
//* this is built-in middleware !!!
server.use(express.json());    // allows reading / parses req.body !!!!


server.get('/', (req, res) => {
  res.send(`<h2>Routes and custom middleware !</h2>`)
});

//custom middleware

function logger2(req, res, next) {

};

module.exports = server;

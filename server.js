const express = require('express');  // creates express app !!!
const helmet = require('helmet');  // hides headers 
const logger = require('morgan');  // logger thingy



// ADD this here and start building postRouter.js
const PostsRouter = require('./posts/postRouter');



const server = express();

// *******-> GLOBAL MIDDLEWARE(declared up top here)
//* this is built-in middleware !!!
server.use(express.json());    // allows reading / parses req.body !!!!



// @@@@@@@->  third-party-middleware
server.use(helmet());
// >>> morgan pre-define formats: combined, common, dev, short, tiny
//server.use(logger('short')); // include parameter for logging display option
server.use(logger('dev'));


// Postsrouter endpoint called out
server.use('api/posts', PostsRouter);


server.get('/', (req, res) => {
  res.send(`<h2>Routes and custom middleware !</h2>`)
});

//#######->  custom middleware

function logger2(req, res, next) {

};

module.exports = server;

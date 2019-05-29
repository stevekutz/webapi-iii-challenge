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


//#######->  custom middleware
server.use(myLogger);


// Postsrouter endpoint called out
server.use('api/posts', PostsRouter);


server.get('/', (req, res) => {
  res.send(`<h2>Routes and custom middleware !</h2>`)
});





//   custom middleware callbacks definitions
// myLogger
function myLogger(req, res, next){
  
 //  console.log('### req', req);
  console.log(`\n >>> a ${req.method} method Requesteeee was made 
               \n >>> from url  ${req.url} 
               \n >>> at ${new Date().toISOString()}  from myLogger`);
  

  next(); // MUST be called in order to let "next" middlewqware(e.g. morgan) continue
};



function logger2(req, res, next) {

};

module.exports = server;

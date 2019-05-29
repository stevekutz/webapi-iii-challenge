//const express = 'express';   ///???
 const express = require('express');   // this should replace above line



const Posts = require('./postDb.js');
// const Users = require('../users/userDb.js');   // split this into userRouter

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        //const posts = await Posts.get(req.query);   // no arg in postDb !!!
        const posts = await Posts.get();
        res.status(200).json(posts);
      } catch (error) {
        // log error to database
        console.log(error);
        res.status(500).json({
          message: 'Error retrieving the posts',
        });
      }
});


router.get('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

// custom middleware

function validatePostId(req, res, next) {

};

module.exports = router;
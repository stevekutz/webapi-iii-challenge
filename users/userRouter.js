// const express = 'express';
const express = require('express');   // this should replace above line


const Users = require('./userDb.js');


const router = express.Router();

router.post('/', (req, res) => {

});

router.post('/:id/posts', (req, res) => {

});

router.get('/', async (req, res) => {
    try {
        const users = await Users.get();
        res.status(200).json(users);
      } catch (error) {
        // log error to database
        console.log(error);
        res.status(500).json({
          message: 'Error retrieving the posts',
        });
      }

});

router.get('/:id', async (req, res) => {
    try {
      const user = await Users.getById(req.params.id);
  
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: `User with id ${id} not found` });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: `Error retrieving the user`,
      });
    }
  });

router.get('/:user_id/posts', async (req, res) => {
    const {user_id} = req.params;

    try{
        const posts = await Users.getUserPosts(user_id);

        if(posts.length) {
            res.json(posts);
        } else {
            res.status(404).json({
                err: "no posts for this user"
            })
        }
    } catch(err) {
        res.status(500).json({err});
    }
});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

//custom middleware

function validateUserId(req, res, next) {

};

function validateUser(req, res, next) {

};

function validatePost(req, res, next) {

};

module.exports = router;

// const express = 'express';
const express = require('express');   // this should replace above line


const Users = require('./userDb.js');


const router = express.Router();

// ADD new user 
router.post('/', async (req, res) => {
    try {
        const user = await Users.insert(req.body);
        res.status(201).json(user);
      } catch (error) {
        // log error to server
        console.log(error);
        res.status(500).json({
          message: 'Error adding the user',
        });
      }
});

// ADD user post
router.post('/:user_id/posts', async (req, res) => {
    const postInfo = { ...req.body, user_id: req.params.user_id };

    try {
      const post = await Users.insert(postInfo);
      res.status(210).json(post);
    } catch (error) {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: 'Error adding the post for the user',
      });
    }
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

router.get('/:user_id', async (req, res) => {
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

router.delete('/:user_id', async (req, res) => {
    try {
        const count = await Users.remove(req.params.user_id);
        if (count > 0) {
          res.status(200).json({ message: 'The user has been nuked' });
        } else {
          res.status(404).json({ message: 'The user could not be found' });
        }
      } catch (error) {
        // log error to database
        console.log(error);
        res.status(500).json({
          message: 'Error removing the user',
        });
      }
});

router.put('/:user_id', async (req, res) => {
    try {
        const userPost = req.body;
        const post = await Users.update(req.params.user_id, req.body);
        if (hub) {
          res.status(200).json(userPost);  // userPost returns updated body
        } else {
          res.status(404).json({ message: `The post with ${user_id} could not be found` });
        }
      } catch (error) {
        // log error to database
        console.log(error);
        res.status(500).json({
          message: 'Error updating the post',
        });
      }
});

//custom middleware

function validateUserId(req, res, next) {

};

function validateUser(req, res, next) {

};

function validatePost(req, res, next) {

};

module.exports = router;

const express = 'express';   ///???
// const express = require('express');   // this should replace above line



const Posts = require('./postDb.js');
// const Users = require('../users/userDb.js');

const router = express.Router();

router.get('/', (req, res) => {

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
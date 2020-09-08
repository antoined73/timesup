/**
 * Standard router in a REST application.
 * This file declares asynchronous behaviors,
 * that will be triggered when a user access the URL corresponding to this
 * very file in the index.js file.
 * This file uses a model file in order to dissociate the server behavior
 * with users, and the server logic.
 *
 * DON'T FORGET THE ASYNC KEYWORD WHEN DECLARING ROUTE HANDLING
 * FUNCTIONS OR PEOPLE TRYING TO ACCESS THE CORRESPONDING ROUTE WILL MAKE
 * THE SERVER CRASH/NOT GET A RESPONSE FROM THE SERVER
 *
 * @author Maxime Flament
 */

let wordsModel = require('./words-model');
let log = require('bole')('words/router');
let router = require('express').Router();

/**
 * This function retrive the list of user from the model and send it in JSON to the user
 *
 * @param {express.Request}   req   Express HTTP request
 * @param {express.Response}  res   Express HTTP response
 */
const getAllWords = async (req, res) => {
  try {
    let words = await wordsModel.getAllWords();
    res.json(words);
  } catch (err) {
    res.status(500).send(err);
  }

};

/**
 * This function create a customer on what the user send in the body of the request
 *
 * @param {express.Request}   req   Express HTTP request
 * @param {express.Response}  res   Express HTTP response
 */
const getWordsByCategory = async (req, res) => {
 if (req.params && req.params.wordBank) {
   try {
     let words = await wordsModel.getWordsByCategory(req.params.wordBank);
     res.json(words);
   } catch (err) {
     res.status(err.statusCode).send();
   }
 }
 else {
   res.status(400).send();
 }
};

/**
 * Routes handle in the file
 */
router.get('/words/:wordBank', getWordsByCategory);
router.get('/words', getAllWords);

module.exports = router;

/**
 * A simple model file that represents a part of the server
 * logic.
 * You should only put the logic of the application in here,
 * like data manipulation, Database transactions, etc....
 *
 * @author Maxime Flament
 */


"use strict"; // DON'T FORGET THIS IN THE MODEL FILES,
              // OR YOU WON'T BE ABLE TO DECLARE CONST FUNCTIONS

const fs = require('fs');
const WORDS_CONSTANTS = require('../constants/words-constants').WORDS_FILES;

/**
 * Gets all words in static files from /api/app/resources/words
 */
const getAllWords = () =>  {
  let wordList = [];
  for (let wordFile of WORDS_CONSTANTS) {
    fs.readFile(wordFile.category, (err, words) => {
      if (err) {
        throw err;
      }
      else {
        wordList.push(words);
      }
    });

    return wordList;
  }
};

/**
 * Gets a list of words from a given category
 *
 * @param category the category of words to retrieve. Check
 * the file /api/app/constants/word-constants.js to see which category
 * is available
 */
const getWordsFromCategory = (category) => {
  if (!WORDS_CONSTANTS.some(c => c === category)) {
    throw new Error("Provided category doesn't exist");
  }
  else {
    let wordFile = WORDS_CONSTANTS.find(c => c === category);
    fs.readFile(wordFile.category, (err, words) => {
      if (err) {
        throw err;
      }
      else {
        return words;
      }
    });
  }
};

exports.getAllWords = getAllWords;
exports.getWordsFromCategory = getWordsFromCategory;

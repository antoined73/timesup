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
const getAllWords = async () =>  {
  let wordList = [];
  let filesToRead = 0;
  for (let wordFile of WORDS_CONSTANTS) {
    const lines = fs.readFileSync(wordFile.file, 'utf8').split(/\r?\n/);
    let wordsFromFile = [];
    lines.forEach((line) => {
      if (line !== '') {
        wordsFromFile.push(line.replace(',', ''));
      }
    });

    wordList.push(
      {
        wordBank: wordFile.wordBank,
        words: wordsFromFile
      }
    );
  }

  return wordList;
};

/**
 * Gets a list of words from a given category
 *
 * @param wordBank the category of words to retrieve. Check
 * the file /api/app/constants/word-constants.js to see which category
 * is available
 */
const getWordsByCategory = async (wordBank) => {
  if (!WORDS_CONSTANTS.some(c => c.wordBank.toLowerCase() === wordBank.toLowerCase())) {
    throw {statusCode: 400};
  }
  else {
    let wordFile = WORDS_CONSTANTS.find(c => c.wordBank.toLowerCase() === wordBank.toLowerCase());
    const lines = fs.readFileSync(wordFile.file, 'utf-8').split(/\r?\n/)
    let wordsFromFile = [];

    lines.forEach((line) => {
      if (line !== '') {
        wordsFromFile.push(line.replace(',', ''));
      }
    });
    return {
      wordBank: wordBank,
      words: wordsFromFile
    };
  }
};

exports.getAllWords = getAllWords;
exports.getWordsByCategory = getWordsByCategory;

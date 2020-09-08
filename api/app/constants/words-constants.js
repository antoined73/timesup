const path = require('path');

let WORDS_FILES = [
  {
    wordBank: 'ACTIONS',
    file: path.join(__dirname, '..', 'resources', 'words', 'actions.txt')
  },
  {
    wordBank: 'ANIMALS',
    file: path.join(__dirname, '..', 'resources', 'words', 'animals.txt')
  },
  {
    wordBank: 'EXPRESSIONS',
    file: path.join(__dirname, '..', 'resources', 'words', 'expressions.txt')
  },
  {
    wordBank: 'jobs',
    file: path.join(__dirname, '..', 'resources', 'words', 'jobs.txt')
  },
  {
    wordBank: 'PEOPLE',
    file: path.join(__dirname, '..', 'resources', 'words', 'people.txt')
  },
  {
    wordBank: 'SPORTS',
    file: path.join(__dirname, '..', 'resources', 'words', 'sports.txt')
  }
];

module.exports = {
  WORDS_FILES
}

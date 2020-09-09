const path = require('path');

let WORDS_FILES = [
  {
    wordBank: 'Actions',
    file: path.join(__dirname, '..', 'resources', 'words', 'actions.txt')
  },
  {
    wordBank: 'Animals',
    file: path.join(__dirname, '..', 'resources', 'words', 'animals.txt')
  },
  {
    wordBank: 'Expressions',
    file: path.join(__dirname, '..', 'resources', 'words', 'expressions.txt')
  },
  {
    wordBank: 'Jobs',
    file: path.join(__dirname, '..', 'resources', 'words', 'jobs.txt')
  },
  {
    wordBank: 'People',
    file: path.join(__dirname, '..', 'resources', 'words', 'people.txt')
  },
  {
    wordBank: 'Sports',
    file: path.join(__dirname, '..', 'resources', 'words', 'sports.txt')
  }
];

module.exports = {
  WORDS_FILES
}

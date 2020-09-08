import axios from 'axios'

export default {
  async getAllWords() {
    return await axios.get('/api/words/');
  },

  async getWordsByWordBank(wordBank) {
    return await axios.get('/api/words/' + wordBank);
  }
}

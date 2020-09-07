import { v4 as uuidv4 } from 'uuid';

const words = {
    namespaced: true,
    state: {
        wordBanks: [
            {
                id: 0,
                title: "Actions",
                description: "",
                words: [],
            },
            {
                id: 1,
                title: "Animals",
                description: "You will be the monkey !",
                words: [],
            },
            {
                id: 2,
                title: "Sayings",
                description: "Some good old sayingsS",
                words: [],
            },
            {
                id: 3,
                title: "Jobs",
                description: "",
                words: [],
            },
            {
                id: 4,
                title: "People",
                description: "Celebrities, Famous persons, Fictionnary persons...",
                words: [],
            },
            {
                id: 5,
                title: "Sports",
                description: "",
                words: [],
            }
        ]
    },
    mutations: {
        createWordBank (state, title, description) {
            state.wordBanks.push({id: uuidv4(), title, description});
        },
        deleteWordBank (state, wordBankId) {
            state.wordBanks = state.wordBanks.filter(wb => wb.id !== wordBankId);
        },
        renameWordBank (state, wordBankId, newTitle) {
            state.wordBanks.forEach(wb => {
                if (wb.id === wordBankId) {
                    wb.title = newTitle;
                }
            });
        },
        addWordToWordBank (state, wordBankId, word) {
            state.wordBanks.forEach(wb => {
                if (wb.id === wordBankId) {
                    if (!wb.words) {
                        wb.words = [];
                    }
                    wb.words.push(word);
                }
            });
        },
        removeWordFromWordBank (state, wordBankId, word) {
            state.wordBanks.forEach(wb => {
                if (wb.id === wordBankId) {
                    wb.words = wb.words.filter(w => w !== word);
                }
            });
        }
    },
    actions: {},
    getters: {
        getWordBankByWordBankId: (state) => (wordBankId) => {
            var wordBank = state.wordBanks.find(wb => wb.id === wordBankId);
            return wordBank;
        }
    }
}

export default words;
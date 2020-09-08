import { v4 as uuidv4 } from 'uuid';

const words = {
    namespaced: true,
    state: {
        wordBanks: [
            {
                id: '24b64c31-1ba5-4521-958b-cec4ac09ebb2',
                title: "Actions",
                description: "",
                words: [],
            },
            {
                id: '02035124-9018-432c-835f-dcd71d1e108b',
                title: "Animals",
                description: "You will be the monkey !",
                words: [],
            },
            {
                id: '14a22ba1-a20a-4c4c-a345-7bc10e3de948',
                title: "Sayings",
                description: "Some good old sayingsS",
                words: [],
            },
            {
                id: 'b6cc44dc-a900-42da-847d-3d17515c330a',
                title: "Jobs",
                description: "",
                words: [],
            },
            {
                id: '3471d60a-ead5-45a6-a0ba-cdbcd0cd8c82',
                title: "People",
                description: "Celebrities, Famous persons, Fictionnary persons...",
                words: [],
            },
            {
                id: '86d5ce49-e21b-4993-97e8-277bf41f4aa7',
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
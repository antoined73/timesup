import {v4 as uuidv4} from 'uuid';

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
                title: "Expressions",
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
        ],
        filledWithWordsFromApi: false
    },
    mutations: {
        createWordBank(state, payload) {
            state.wordBanks.push({
                id: uuidv4(),
                title: payload.title,
                description: payload.description,
                words: [],
            });
        },
        feedWordBankWithApi(state, wordBanksFromApi) {
            state.wordBanks.forEach(wordBank => {
                let titleString = JSON.stringify(wordBank.title);

                // Have to do == because wordBank.title is somehow an object and even calling JSON.stringify on it doesn't make it a string
                let wordBankFromApi = wordBanksFromApi.find(w =>  w.wordBank.toLowerCase() === wordBank.title.toLowerCase());
                if (wordBankFromApi) {
                    wordBankFromApi.words.forEach(word => {
                        wordBank.words.push(word);
                    });
                    // Have to call JSON.parse here because arrays and objects are stored as strings in localstorage
                }
                else {
                    window.console.log("Word bank couldn't be found: ", wordBank.title);
                }
            });
            state.filledWithWordsFromApi = true;
        },
        deleteWordBank(state, wordBankId) {
            state.wordBanks = state.wordBanks.filter(wb => wb.id !== wordBankId);
        },
        renameWordBank(state, payload) {
            state.wordBanks.forEach(wb => {
                if (wb.id === payload.wordBankId) {
                    wb.title = payload.newTitle;
                }
            });
        },
        addWordToWordBank(state, payload) {
            state.wordBanks.forEach(wb => {
                if (wb.id === payload.wordBankId) {
                    if (wb.words.indexOf(payload.word) !== -1) {
                        return;
                    }
                    wb.words.push(payload.word);
                }
            });
        },
        removeWordFromWordBank(state, payload) {
            state.wordBanks.forEach(wb => {
                if (wb.id === payload.wordBankId) {
                    wb.words = wb.words.filter(w => w !== payload.word);
                }
            });
        }
    },
    actions: {},
    getters: {
        getWordBankByWordBankId: (state) => (wordBankId) => {
            var wordBank = state.wordBanks.find(wb => wb.id === wordBankId);
            return wordBank;
        },
        hasFilledWithWordsFromApi: (state) => {
            return state.filledWithWordsFromApi;
        }
    }
}

export default words;

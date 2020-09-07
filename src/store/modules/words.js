const words = {
    namespaced: true,
    state: {
        wordBanks : [
            {
                id: 0,
                title: "Actions",
                description: ""
            },
             {
                id: 1,
                title: "Animals",
                description: "You will be the monkey !"
            },
             {
                id: 2,
                title: "Sayings",
                description: "Some good old sayingsS"
            },
            {
                id: 3,
                title: "Jobs",
                description: ""
            },
            {
                id: 4,
                title: "People",
                description: "Celebrities, Famous persons, Fictionnary persons..."
            },
            {
                id: 5,
                title: "Sports",
                description: ""
            }
        ]
    },
    mutations: {},
    actions: {},
    getters: {
        getWordBankByWordBankId: (state) => (wordBankId) => {
            var wordBank = state.wordBanks.find(wb => wb.id === wordBankId);
            return wordBank;
        }
    }
}

export default words;
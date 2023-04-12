const state = () => ({
    all: [],
    test: 'test test test test test test',
});

const getters = {
    getTest (state) {
        // return state.
    }
};

const actions = {
    async getProducts ({ commit }) {
        const products = [{id: 1, name: 'test'}];
        commit('setProduct', products);
    }
};

const mutations = {
    setProducts (state, products) {
        state.all = products;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};

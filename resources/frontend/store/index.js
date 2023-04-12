import Vuex from 'vuex';
// import test from './modules/test';

export default new Vuex.Store({
    // modules: {
    //     test
    // },

    state: {
        websiteSettings: {
            mainColor: '#39B9BF',
            secondColor: '#464646',
        },

        navigationDrawerSettings: {
            showSidebar: false,
            sidebarLock: true,
        },

        snackbarSettings: {
            snackbarRef: null,
        }
    },

    getters: {
        getMainColor (state) {
            return state.websiteSettings.mainColor;
        },
        getSecondColor (state) {
            return state.websiteSettings.mainColor;
        },
        getShowSidebar (state) {
            return state.navigationDrawerSettings.showSidebar;
        },
        getSidebarLock (state) {
            return state.navigationDrawerSettings.sidebarLock;
        },
        getSnackbarRef (state) {
            return state.snackbarSettings.snackbarRef;
        },
    },

    mutations: {
        setShowSidebar (state, payload) {
            state.navigationDrawerSettings.showSidebar = payload;
        },
        setSidebarLock (state, payload) {
            state.navigationDrawerSettings.sidebarLock = payload;
        },
        setSnackbarRef (state, payload) {
            state.snackbarSettings.snackbarRef = payload;
        },
    },

    actions: {
        setShowSidebarAction ({ commit }, payload) {
            commit('setShowSidebar', payload);
        },
        setSidebarLockAction ({ commit }, payload) {
            commit('setSidebarLock', payload);
        },
        setSnackbarRefAction ({ commit }, payload) {
            commit('setSnackbarRef', payload);
        },
    },
});

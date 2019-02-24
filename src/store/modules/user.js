import {
    api
} from '../../core/lib';
import * as R from 'ramda';

export default {
    namespaced: true,
    state: {
        token: localStorage.getItem('token'),
        user: {}
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token;
            localStorage.setItem('token', token);
        },

        REMOVE_TOKEN(state) {
            state.token = null;
            localStorage.removeItem('token');
        },

        SET_USER(state, user) {
            state.user = {
                ...user
            };
        },

        REMOVE_USER(state) {
            state.user = {}
        }
    },
    actions: {
        setToken({
            commit
        }, token) {
            return Promise.resolve(commit('SET_TOKEN', token));
        },

        loadUser({
            commit
        }) {
            return api().get('/user')
                .then(R.pathOr({}, ['data']))
                .then(user => {
                    commit('SET_USER', user);
                    return user;
                });
        },
        logout({ commit }) {
            return Promise.resolve(R.map(commit)(['REMOVE_TOKEN', 'REMOVE_USER']));
        }
    }
};
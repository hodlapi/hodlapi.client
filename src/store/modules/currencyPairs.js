import { api } from "../../core/lib";
import * as R from "ramda";

export default {
    namespaced: true,
    state: {
        currencyPairs: []
    },
    mutations: {
        SET_CURRENCYPAIRS(state, currencyPairs) {
            state.currencyPairs = {
                ...currencyPairs
            };
        },

        REMOVE_CURRENCYPAIRS(state) {
            state.currencyPairs = [];
        }
    },
    actions: {
        setCurrencyPairs({ commit }, currencyPairs) {
            return Promise.resolve(commit("SET_CURRENCYPAIRS", currencyPairs));
        },

        loadCurrencyPairs({ commit }) {
            return api()
                .get("/currencyPairs")
                .then(R.pathOr({}, ["data"]))
                .then(currencyPairs => {
                    commit("SET_CURRENCYPAIRS", currencyPairs);
                    return currencyPairs;
                });
        }
    }
};
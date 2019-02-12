import { api } from "../../core/lib";
import * as R from "ramda";

export default {
    namespaced: true,
    state: {
        requests: []
    },
    mutations: {
        SET_REQUESTS(state, requests) {
            state.requests = requests;
        },

        REMOVE_REQUESTS(state) {
            state.requests = [];
        }
    },
    actions: {
        setRequests({ commit }, requests) {
            return Promise.resolve(commit("SET_REQUESTS", requests));
        },

        loadRequests({ commit }) {
            return api()
                .get("/requests")
                .then(R.pathOr({}, ["data"]))
                .then(requests => {
                    commit("SET_REQUESTS", requests);
                    return requests;
                });
        }
    }
};
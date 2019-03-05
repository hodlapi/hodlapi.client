import {
    api
} from "../../core/lib";
import * as R from "ramda";

export default {
    namespaced: true,
    state: {
        requests: []
    },
    mutations: {
        UPDATE_REQUEST(state, request) {
            state.requests = R.map(e => R.eqProps('_id')(e)(request) ? {
                ...request
            } : e)(state.requests);
        },
        SET_REQUESTS(state, requests) {
            state.requests = requests;
        },

        REMOVE_REQUESTS(state) {
            state.requests = [];
        }
    },
    actions: {
        setRequests({
            commit
        }, requests) {
            return Promise.resolve(commit("SET_REQUESTS", requests));
        },

        loadRequests({
            commit
        }) {
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
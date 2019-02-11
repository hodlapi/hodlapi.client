import { api } from "../../core/lib";
import * as R from "ramda";

export default {
    namespaced: true,
    state: {
        intervals: []
    },
    mutations: {
        SET_INTERVALS(state, intervals) {
            state.intervals = {
                ...intervals
            };
        },

        REMOVE_INTERVALS(state) {
            state.intervals = [];
        }
    },
    actions: {
        setIntervals({ commit }, intervals) {
            return Promise.resolve(commit("SET_INTERVALS", intervals));
        },

        loadIntervals({ commit }) {
            return api()
                .get("/intervals")
                .then(R.pathOr({}, ["data"]))
                .then(intervals => {
                    commit("SET_INTERVALS", intervals);
                    return intervals;
                });
        }
    }
};
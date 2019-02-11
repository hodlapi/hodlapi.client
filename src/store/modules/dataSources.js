import { api } from "../../core/lib";
import * as R from "ramda";

export default {
    namespaced: true,
    state: {
        dataSources: []
    },
    mutations: {
        SET_DATASOURCES(state, dataSources) {
            state.dataSources = {
                ...dataSources
            };
        },

        REMOVE_DATASOURCES(state) {
            state.dataSources = [];
        }
    },
    actions: {
        setDataSources({ commit }, dataSources) {
            return Promise.resolve(commit("SET_DATASOURCES", dataSources));
        },

        loadDataSources({ commit }) {
            return api()
                .get("/dataSources")
                .then(R.pathOr({}, ["data"]))
                .then(dataSources => {
                    commit("SET_DATASOURCES", dataSources);
                    return dataSources;
                });
        }
    }
};
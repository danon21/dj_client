import { createStore } from "vuex";

export default createStore({
    state: {
        backendUrl: "http://127.0.0.1:8000",
        userLogin: ""
    },
    mutations: {},
    actions: {},
    modules: {},
    getters: {
        getServerUrl: state => {
            return state.backendUrl
        },
        getUserLogin: state => {
            return state.userLogin
        }
    }
})
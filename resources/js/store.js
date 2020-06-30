import Vue from 'vue'
import Vuex from 'vuex'

import Repository from "./repositories/RepositoryFactory";
const EventRepository = Repository.get("events");

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        events: [],
    },

    actions: {


        async getEvents({
            commit
        }) {
            commit("STORE_EVENTS", await EventRepository.get())
        },
        // async getProductCategories({
        //     commit
        // }) {
        //     commit("loadProductCategories", await ProductRepository.getProductCategories());
        // },
        // async loadSizeAttributes({
        //     commit,
        // }, payload) {
        //     commit("loadSizeAttributes", await AttributeRepository.find(payload.id));
        // },
        // async loadColorAttributes({
        //     commit,
        // }, payload) {
        //     commit("loadColorAttributes", await AttributeRepository.find(payload.id));
        // },
        // async loadReviews({
        //     commit
        // }, payload) {
        //     commit("loadReviews", await ReviewRepository.getReviewsByProductId(payload.id));
        // }

    },

    mutations: {
        // getCategories: (state, response) => {
        //     const {
        //         data
        //     } = response;
        //     state.categories = data;
        // },

        STORE_EVENTS: (state, response) => {
            const {
                data
            } = response;
            state.events = data;
        },

        // loadCartProducts: (state) => {
        //     state.carts = Vue.prototype.$cart.getCarts();
        // },

        // removeCartProduct: (state, product) => {
        //     state.carts = Vue.prototype.$cart.remove(product);
        // },

        // loadProductCategories: (state, response) => {
        //     const {
        //         data
        //     } = response;
        //     state.productCategories = data
        // },
        // loadSizeAttributes: (state, response) => {
        //     const {
        //         data
        //     } = response;
        //     state.sizeAttributes = data;
        // },
        // loadColorAttributes: (state, response) => {
        //     const {
        //         data
        //     } = response;
        //     state.colorAttributes = data;
        // },
        // loadReviews: (state, response) => {
        //     const {
        //         data
        //     } = response;
        //     state.reviews = data;
        // }
    },

    getters: {
        getTotalCartPrice: () => {
            return Vue.prototype.$cart.getTotalPrice();
        }
    }

    // strict: true
});

export default store;
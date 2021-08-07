import Vue from "vue";
import Vuex from "vuex";
import request from "./request";

const host = 'http://localhost:3000';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
    currencySymbol: "$",
  },
  mutations: {
    setProduct(state, products) {
      if (!Array.isArray(products)) return;
      state.products = products;
    },
    addToCart(state, product) {
      state.cart.push(product)
    },
    setCart(state, products) {
      state.cart = products
    },
    emptyCart(state) {
      state.cart = [];
    },
    changeQty(state, options) {
      const {
        productIndex,
        qty
      } = options;
      state.cart[productIndex].qty = qty

    },

    removeProduct(state, productIndex) {
      state.cart.splice(productIndex, 1)
    }
  },
  actions: {

    async emptyCart({
      commit
    }) {
      const url = host + '/api/cart/';
      await request(url, "DELETE");
      commit("emptyCart")
    },
    async setProduct({
      commit
    }) {
      const url = host + '/api/products';
      const products = await request(url);
      commit("setProduct", products)
    },
    async addToCart({
      commit,
      dispatch,
      state
    }, data) {
      let oldQty = null;
      const productIndex = state.cart.findIndex((product) => {
        if (product.id === data.id) {
          oldQty = product.qty;
          return true;
        };
      });

      if (productIndex === -1) {
        const url = host + '/api/cart';
        const product = await request(url, "POST", data);
        commit("addToCart", product)
      } else {
        dispatch("changeQty", {
          productIndex,
          qty: oldQty + 1
        })
      }
    },
    async changeQty({
      commit,
      state
    }, options) {
      commit("changeQty", options);

      const product = state.cart[options.productIndex];
      const url = host + '/api/cart/' + product.id;
      await request(url, "PUT", product)

    },
    async setCart({
      commit
    }) {
      const url = host + '/api/cart';
      const products = await request(url);
      commit("setCart", products)
    },
    async removeProduct({
      commit,
      state
    }, productIndex) {
      const product = state.cart[productIndex];
      const url = host + '/api/cart/' + product.id;
      await request(url, "DELETE", product);
      commit("removeProduct", productIndex)
    }
  },

  getters: {
    productList(state) {
      return state.products
    },
    currencySymbol(state) {
      return state.currencySymbol
    },
    cart(state) {
      return state.cart;
    },
    cartTotalQty(state) {
      let sum = 0;
      if (state.cart.length) {
        state.cart.forEach(item => {
          sum += item.qty
        })
      }
      return sum

    },
    cartTotalPrice(state) {
      let sum = 0;
      if (state.cart.length) {
        state.cart.forEach(item => {
          sum += item.specialPrice * item.qty;
        })
      }
      return sum
    }
  },
  modules: {},
});

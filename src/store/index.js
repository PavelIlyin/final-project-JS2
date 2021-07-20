import Vue from "vue";
import Vuex from "vuex";
import apiClient from "../service/api-client";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchLine: "",
    allProducts: [],
    cart: {
      contents: [],
    },
  },
  getters: {
    productsToShow(state) {
      if (!state.searchLine) {
        return state.allProducts;
      }
      const regexp = new RegExp(state.searchLine, "i");
      return state.allProducts.filter((product) =>
        regexp.test(product.product_name)
      );
    },
    getTotalPrice(state) {
      const totalPrice = state.cart.contents.reduce((accumulator, cartItem) => {
        return accumulator + Number(cartItem.price) * Number(cartItem.quantity);
      }, 0);
      return totalPrice;
    },
  },
  mutations: {
    setProductList(state, products) {
      state.allProducts = products;
    },
    setCartList(state, cart) {
      state.cart = cart;
    },
    setSearchLine(state, searchLine) {
      state.searchLine = searchLine;
    },
    addProduct(state, productId) {
      let existingItem = state.cart.contents.find(
        (cartItem) => cartItem.id_product === productId
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        let productForAdd = state.allProducts.find(
          (item) => item.id_product === productId
        );
        if (productForAdd) {
          state.cart.contents.push({
            ...productForAdd,
            quantity: 1,
          });
        }
      }
    },
    deleteProduct(state, cartItem) {
      state.cart.contents.splice(state.cart.contents.indexOf(cartItem), 1);
    },
    updateCartItem(state, cartItem) {
      const itemForUpdate = state.cart.contents.find(
        (item) => item.id_product === cartItem.id_product
      );
      Object.assign(itemForUpdate, cartItem);
    },
  },
  actions: {
    getProductList(context) {
      apiClient.getProducts().then((response) => {
        context.commit("setProductList", response.data);
      });
    },
    getCartList(context) {
      apiClient.getCart().then((response) => {
        context.commit("setCartList", response.data);
      });
    },
    addProduct(context, productId) {
      apiClient.addToCart(productId).then((response) => {
        if (!response.result) {
          return;
        }
        context.commit("addProduct", productId);
      });
    },
    deleteProduct(context, cartItem) {
      apiClient.deleteFromCart(cartItem.id_product).then((response) => {
        if (!response.result) {
          return;
        }
        context.commit("deleteProduct", cartItem);
      });
    },
    updateCartItem(context, cartItem) {
      apiClient
        .updateCartItem(cartItem.id_product, cartItem.quantity)
        .then((response) => {
          if (!response.result) {
            return;
          }
          context.commit("updateCartItem", cartItem);
        });
    },
  },
});

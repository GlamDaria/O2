export default {
  state: {
    cart: []
  },
  getters: {
    getCartList(state) {
      return state.cart;
    },
    getTotalPrice(state) {
      return state.cart.reduce((sum, item) => sum + item.price * item.count);
    }
  },
  mutations: {
    setCartList(state, cartList) {
      state.cart = cartList;
    },
    incrementCartItem(state, product) {
      let cartItem = state.cart.find(item => item.id === product.id);
      cartItem.count++;
    },
    setCartItemCount(state, { product, count }) {
      let cartItem = state.cart.find(item => item.id === product.id);
      cartItem.count = count;
    },
    decrementCartItem(state, product) {
      let cartItem = state.cart.find(item => item.id === product.id);
      cartItem.count--;
      if (cartItem.count === 0) {
        state.cart = state.cart.filter(item => item.id !== product.id);
      }
    },
    pushCartItem(state, product) {
      state.cart.push({ ...product, count: 1 });
    },
    removeCartItem(state, product) {
      state.cart = state.cart.filter(item => item.id !== product.id);
    },
    updateCartList(state) {
      localStorage.cart = state.cart;
    }
  },
  actions: {
    addCartItem({ commit, state }, product) {
      if (state.cart && state.cart.find(item => item.id === product.id)) {
        commit("incrementCartItem", product);
      } else {
        commit("pushCartItem", product);
      }
    }
  }
};
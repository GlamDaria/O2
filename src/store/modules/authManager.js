export default {
  state: {
    user: null,
    registrationError: null,
    openAuthPopup: false
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    isOpenPopup(state) {
      return state.openAuthPopup;
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setRegistrationError(state, error) {
      state.registrationError = error;
    },
    setOpenPopup(state, value) {
      state.openAuthPopup = value;
    }
  },
  actions: {
    signUp({ commit }, { email, password }) {
      console.log("email", email);
      console.log("password", password);

      return new Promise(resolve => {
        setTimeout(() => {
          const user = { id: 1 };
          commit("setUser", user);
          resolve(user);
        }, 2000);
      });
    },
    signOut({ commit }) {
      commit("setUser", null);
    },
    createUser({ commit }, { email, pass }) {
      console.log("email", email);
      console.log("password", pass);

      commit("setRegistrationError", "Ошибка регистрации");
    }
  }
};

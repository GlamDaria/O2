export default {
  state: {
    user: null,
    registrationError: null
  },
  getters: {
    getUser(state) {
      return state.user;
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setRegistrationError(state, error) {
      state.registrationError = error;
    }
  },
  actions: {
    signUp({ commit }, { email, password }) {
      console.log("email", email);
      console.log("password", password);
      const user = { id: 1 };
      commit("setUser", user);
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

import firebase from "firebase";

export default {
  state: {
    historyList: null
  },
  getters: {
    getHistoryList(state) {
      return state.historyList;
    }
  },
  mutations: {
    setHistoryList(state, value) {
      state.historyList = value;
    }
  },
  actions: {
    updateHistoryList({ commit, getters }) {
      return firebase
        .firestore()
        .collection("orders")
        .where("userId", "==", getters.getUser.id)
        .get()
        .then(data => {
          const orders = [];
          data.forEach(doc => {
            orders.push({ id: doc.id, ...doc.data() });
          });
          console.log(orders);
          commit("setHistoryList", orders);
        });
    }
  }
};

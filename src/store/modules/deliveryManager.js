import firebase from "firebase";

export default {
  state: {
    currentOrdersList: null,
    isLoadingUpdatedDeliveryList: false,
    deliveryGuyOrders: null,
  },
  getters: {
    getCurrentOrdersList(state) {
      return state.currentOrdersList;
    },
    getLoadingUpdatedDeliveryList(state) {
      return state.isLoadingUpdatedDeliveryList;
    },
    getDeliveryGuyOrders(state) {
      return state.deliveryGuyOrders;
    }
  },
  mutations: {
    setCurrentOrdersList(state, value) {
      state.currentOrdersList = value;
    },
    setLoadingUpdatedDeliveryList(state, value) {
      state.isLoadingUpdatedDeliveryList = value;
    },
    setDeliveryGuyOrders(state, value) {
      state.deliveryGuyOrders = value;
    }
  },
  actions: {
    updateCurrentOrdersList({ commit }) {
      return firebase
        .firestore()
        .collection("orders")
        .where("status", "==", "created")
        .get()
        .then(data => {
          const orders = [];
          data.forEach(doc => {
            orders.push({ id: doc.id, ...doc.data() });
          });
          console.log(orders);
          commit("setCurrentOrdersList", orders);
        });
    },
    updateOrderStatus({ dispatch, commit, getters }, id) {
      console.log("update order status", id);
      commit("setLoadingUpdatedDeliveryList", true);
       return firebase
        .firestore()
        .collection(`orders`)
        .doc(id)
        .update({
          status: "approved",
          deliveryGuyId: getters.getUser.id,
        })
        .then(() => {
          dispatch("updateCurrentOrdersList");
          commit("setLoadingUpdatedDeliveryList", false);
        });
    },
    updateDeliveryGuyOrders({ getters, commit }) {
      return firebase
        .firestore()
        .collection("orders")
        .where("deliveryGuyId", "==", getters.getUser.id)
        .get()
        .then(data => {
          const orders = [];
          data.forEach(doc => {
            orders.push({ id: doc.id, ...doc.data() });
          });
          console.log(orders);
          commit("setDeliveryGuyOrders", orders);
        });
    },
    finishOrder({ dispatch }, id) {
       return firebase
        .firestore()
        .collection("orders")
        .doc(id)
        .update({
          status: "done"
        })
        .then(() => {
          dispatch("updateDeliveryGuyOrders");
        });
    }
  }
};

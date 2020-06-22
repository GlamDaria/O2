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
    updateHistoryList({ commit }) {
      const itemList = [
        {
          id: "1",
          itemList: ["1", "2", "3"],
          totalPrice: 100,
          date: new Date(),
          status: "Завершено",
          imageURL:
            "https://cdn1.ozone.ru/s3/multimedia-6/wc250/6007096938.jpg",
          imageFullSizeURL:
            "https://cdn1.ozone.ru/s3/multimedia-6/wc1200/6007096938.jpg"
        },
        {
          id: "2",
          itemList: ["1", "2", "3"],
          totalPrice: 100,
          date: new Date(),
          status: "Завершено",
          imageURL:
            "https://cdn1.ozone.ru/s3/multimedia-6/wc250/6007096938.jpg",
          imageFullSizeURL:
            "https://cdn1.ozone.ru/s3/multimedia-6/wc1200/6007096938.jpg"
        },
        {
          id: "3",
          itemList: ["1", "2", "3"],
          totalPrice: 100,
          date: new Date(),
          status: "Завершено",
          imageURL:
            "https://cdn1.ozone.ru/s3/multimedia-6/wc250/6007096938.jpg",
          imageFullSizeURL:
            "https://cdn1.ozone.ru/s3/multimedia-6/wc1200/6007096938.jpg"
        },
        {
          id: "4",
          itemList: ["1", "2", "3"],
          totalPrice: 100,
          date: new Date(),
          status: "Завершено",
          imageURL:
            "https://cdn1.ozone.ru/s3/multimedia-6/wc250/6007096938.jpg",
          imageFullSizeURL:
            "https://cdn1.ozone.ru/s3/multimedia-6/wc1200/6007096938.jpg"
        },
        {
          id: "5",
          itemList: ["1", "2", "3"],
          totalPrice: 100,
          date: new Date(),
          status: "Завершено",
          imageURL:
            "https://cdn1.ozone.ru/s3/multimedia-6/wc250/6007096938.jpg",
          imageFullSizeURL:
            "https://cdn1.ozone.ru/s3/multimedia-6/wc1200/6007096938.jpg"
        }
      ];

      commit("setHistoryList", itemList);
    }
  }
};

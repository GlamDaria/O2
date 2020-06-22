export default {
  state: {
    itemList: null,
    item: null
  },
  getters: {
    getItemList(state) {
      return state.itemList;
    },
    getItem(state) {
      return state.item;
    }
  },
  mutations: {
    setItemList(state, value) {
      state.itemList = value;
    },
    setItem(state, value) {
      state.item = value;
    }
  },
  actions: {
    updateItemList({ commit }, category) {
      console.log(category);
      const itemList = [
        {
          id: "1",
          name: "Товар 1",
          price: 100,
          imageURL:
            "https://cdn1.ozone.ru/s3/multimedia-6/wc250/6007096938.jpg",
          imageFullSizeURL:
            "https://cdn1.ozone.ru/s3/multimedia-6/wc1200/6007096938.jpg"
        },
        {
          id: "2",
          name: "Товар 2",
          price: 100,
          imageURL:
            "https://cdn1.ozone.ru/s3/multimedia-6/wc250/6007096938.jpg",
          imageFullSizeURL:
            "https://cdn1.ozone.ru/s3/multimedia-6/wc1200/6007096938.jpg"
        },
        {
          id: "3",
          name: "Товар 3",
          price: 100,
          imageURL:
            "https://cdn1.ozone.ru/s3/multimedia-6/wc250/6007096938.jpg",
          imageFullSizeURL:
            "https://cdn1.ozone.ru/s3/multimedia-6/wc1200/6007096938.jpg"
        },
        {
          id: "4",
          name: "Товар 4",
          price: 100,
          imageURL:
            "https://cdn1.ozone.ru/s3/multimedia-6/wc250/6007096938.jpg",
          imageFullSizeURL:
            "https://cdn1.ozone.ru/s3/multimedia-6/wc1200/6007096938.jpg"
        },
        {
          id: "5",
          name: "Товар 5",
          price: 100,
          imageURL:
            "https://cdn1.ozone.ru/s3/multimedia-6/wc250/6007096938.jpg",
          imageFullSizeURL:
            "https://cdn1.ozone.ru/s3/multimedia-6/wc1200/6007096938.jpg"
        }
      ];

      commit("setItemList", itemList);
    },
    updateItem({ commit }, id) {
      console.log("update item", id);
      const item = {
        id: "5",
        name: "Товар 5",
        price: 100,
        imageURL: "https://cdn1.ozone.ru/s3/multimedia-6/wc250/6007096938.jpg",
        imageFullSizeURL:
          "https://cdn1.ozone.ru/s3/multimedia-6/wc1200/6007096938.jpg",
        description:
          "Vivamus faucibus turpis a nisi feugiat, in accumsan justo pretium. Nunc tellus tortor, consequat bibendum mi eu, lobortis pulvinar felis. Pellentesque eget dui sit amet risus venenatis efficitur. Nullam id diam lobortis, fermentum lorem auctor, venenatis nunc. Morbi blandit laoreet quam in facilisis. Fusce imperdiet dignissim mattis. Integer porta ultricies gravida. Suspendisse a dolor pretium nibh elementum interdum eget quis metus. Donec lobortis dolor sit amet odio elementum, at iaculis lacus commodo. Nam at viverra massa, quis posuere metus"
      };
      commit("setItem", item);
    },
    addItem({ dispatch }, item) {
      console.log("add item", item);

      dispatch("updateItem");
    },
    removeItem({ dispatch }, item) {
      console.log("remove item dispatch", item);

      dispatch("updateItem");
    }
  }
};

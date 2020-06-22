<template>
  <div class="main-container history">
    <h1>История заказов</h1>
    <div class="main-history-list">
      <HistoryItem
        v-for="item in historyList"
        :key="item.id"
        :item="item"
        @click="openItemPage(item)"
        class="history-item"
      />
    </div>
  </div>
</template>

<script>
import HistoryItem from "../components/HistoryItem";

export default {
  name: "History",
  components: {
    HistoryItem
  },
  created() {
    this.$store.dispatch("updateHistoryList");
  },
  computed: {
    historyList() {
      return this.$store.getters.getHistoryList;
    }
  },
  methods: {
    openItemPage({ id }) {
      console.log("router push", { id });
      this.$router.push({ name: "Product", params: { id: id } });
    }
    // addToCart(product) {
    //   console.log(product);
    //   this.$store.dispatch("addCartItem", product);
    // }
  }
};
</script>

<style>
.main-history-list {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  margin: 16px 0;
}
</style>

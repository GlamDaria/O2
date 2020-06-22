<template>
  <div class="admin-navigation">
    <a-menu
      v-model="current"
      style="width: 256px"
      mode="inline"
      @click="handleClick"
    >
      <a-menu-item key="orders"> <a-icon type="star" />Заказы </a-menu-item>
      <a-menu-item key="items"> <a-icon type="shopping" />Товары </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
export default {
  name: "AdminNavigation",
  components: {},
  created() {
    this.$store.dispatch("updateItemList");
  },
  computed: {},
  methods: {
    handleClick(click) {
      console.log(click);
      if (click.key === "orders") this.$router.push({ name: "Admin" });
      if (click.key === "items") this.$router.push({ name: "OrderList" });
    }
  },
  data: () => {
    return {
      current: ["orders"]
    };
  }
};
</script>

<style>
.main-item-list {
  /*display: grid;*/
  /*grid-template-columns: repeat(5, 1fr);*/
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  margin: 16px 0;
}
</style>

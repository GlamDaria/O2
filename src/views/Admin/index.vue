<template>
  <div class="admin-main">
    <div class="admin-main__navigation">
      <Navigation />
    </div>
    <div class="main-container admin-main__container">
      <div class="main-item-list">
        <Item
          v-for="item in itemList"
          :key="item.id"
          :item="item"
          actionText="Удалить"
          @click="openItemPage(item)"
          @addToCart="remove(item)"
        />
      </div>
    </div>

    <Orders v-if="false" />
    <Product v-if="false" />
  </div>
</template>

<script>
import Item from "@/components/Item.vue";
import Navigation from "./AdminNavigation";
import Orders from "./AdminOrders";
import Product from "./AdminProduct";

export default {
  name: "Admin",
  components: {
    Item,
    Navigation,
    Orders,
    Product
  },
  created() {
    this.$store.dispatch("updateItemList");
  },
  computed: {
    itemList() {
      return this.$store.getters.getItemList;
    }
  },
  methods: {
    openItemPage({ id }) {
      console.log("router push", { id });
      this.$router.push({ name: "EditProduct", params: { id: id } });
    },
    remove(product) {
      console.log("remove", product);
      this.$store.dispatch("removeItem", product);
    }
  }
};
</script>

<style>
.admin-main {
  display: flex;
  flex-flow: row nowrap;
}

.admin-main__navigation {
  flex-shrink: 0;
}

.admin-main__container {
  flex-shrink: 1;
  flex-grow: 1;
}

.main-item-list {
  /*display: grid;*/
  /*grid-template-columns: repeat(5, 1fr);*/
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  margin: 16px 0;
}
</style>

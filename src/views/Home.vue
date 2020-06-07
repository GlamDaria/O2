<template>
  <div class="main-container">
    <MainMenu />
    <div class="main-item-list">
      <Item v-for="item in itemList" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MainMenu from "@/components/MainMenu.vue";
import Item from "@/components/Item.vue";

export default {
  name: "Home",
  components: {
    MainMenu,
    Item
  },
  created() {
    this.$store.dispatch("updateItemList");
  },
  computed: {
    itemList() {
      return this.$store.getters.getItemList;
    }
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

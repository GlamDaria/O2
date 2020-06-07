<template>
  <div v-if="item" class="item">
    <div class="item__image">
      <img :src="item.imageURL" />
    </div>
    <div class="item__name">{{ item.name }}</div>
    <div class="item__price">{{ item.price }} ₽</div>
    <a-button @click="addToCart" type="primary" class="item__button">
      В корзину
    </a-button>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    addToCart() {
      console.log("add to cart", this.item);
    }
  },
  computed: {}
};
</script>

<style lang="scss">
@import "@/styles";
.item {
  margin-bottom: 24px;
  &:not(:last-child) {
    margin-right: 24px;
  }
}
.item__name {
  margin-top: 8px;
}

.item__price {
  font-weight: bold;
  font-size: 1.3rem;
}
</style>

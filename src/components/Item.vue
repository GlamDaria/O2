<template>
  <div v-if="item" class="item">
    <div @click="$emit('click', item)" class="item__image">
      <img :src="item.imageURL" />
    </div>

    <div class="item__info" @click="$emit('click', item)">
      <div class="item__name">{{ item.name }}</div>
      <div class="item__price">{{ item.price }} ₽</div>
    </div>

    <a-button
      @click="$emit('addToCart', item)"
      type="primary"
      class="item__button"
    >
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
  methods: {},
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
.item__image {
  cursor: pointer;
}
.item__info {
  cursor: pointer;
}
.item__name {
  margin-top: 8px;
}

.item__price {
  font-weight: bold;
  font-size: 1.3rem;
}
</style>

<template>
  <div v-if="item" class="cart-item">
    <div class="cart-item__image">
      <img :src="item.imageURL" />
    </div>

    <div class="cart-item__name">{{ item.name }}</div>

    <div class="cart-item__price">{{ item.price }} ₽</div>

    <div class="cart-item__count">
      <a-input-number
        id="inputNumber"
        v-model="item.count"
        :min="0"
        :max="100"
        @change="onChange"
      />
    </div>

    <div>
      <a-button icon="delete" size="large" />
    </div>
  </div>
</template>
<script>
export default {
  name: "CartItem",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      value: 3
    };
  },
  methods: {
    onChange(value) {
      console.log("changed", value);
    }
  }
};
</script>

<style lang="scss">
@import "@/styles";
.cart-item {
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 24px;
  justify-content: space-around;
  align-items: center;
  height: 108px;
  padding: 8px;
  border-bottom: 1px solid #ccc;
  border-radius: 4px;
}
.cart-item__image {
  height: 100%;
  img {
    height: 100%;
  }
}

.cart-item__price {
  font-weight: bold;
}
</style>

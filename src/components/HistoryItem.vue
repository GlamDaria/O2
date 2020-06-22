<template>
  <div v-if="item" class="history-item">
    <div class="history-item__header">
      <div class="history-item__id">{{ item.id }}</div>
      <div class="history-item__price">{{ item.totalPrice }} ₽</div>
    </div>

    <div class="history-item__info"></div>
    <div @click="$emit('click', item)" class="history-item__image">
      <img :src="item.imageURL" />
    </div>

    <div class="history-item__info" @click="$emit('click', item)">
      <div class="history-item__name">{{ item.itemList }}</div>
    </div>

    <div class="history-item__info">
      <div class="history-item__price"></div>
    </div>
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
.history-item {
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 24px;
  &:not(:last-child) {
    margin-right: 24px;
  }
}
.history-item__image {
}
.history-item__info {
  cursor: pointer;
}
.history-item__name {
  margin-top: 8px;
}

.history-item__price {
  font-weight: bold;
  font-size: 1.3rem;
}
</style>

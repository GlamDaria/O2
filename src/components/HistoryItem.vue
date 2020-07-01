<template>
  <div v-if="item" class="history-item">
    <div class="history-item__header">
      <div class="history-item__createdAt">
        {{ parseDate(item.createdAt) }}
      </div>
      <div class="history-item__price">{{ item.price }} ₽</div>
      <div class="history-item__status">
        {{ parseStatus(item.status) }}
      </div>
    </div>

    <div class="history-item__info">
      <div v-for="(itemCart, index) in item.cart" :key="index">
        <div class="history-item__orderHeader">
          <div class="orderItem__field">Название товара</div>
          <div class="orderItem__field">Цена товара</div>
          <div class="orderItem__field">Количество</div>
        </div>
        <div class="history-item__orderItem">
          <div class="orderItem__field">{{ itemCart.name }}</div>
          <div class="orderItem__field">{{ itemCart.price }} ₽</div>
          <div class="orderItem__field">{{ itemCart.count }}</div>
        </div>
      </div>
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
  methods: {
    parseDate(timestamp) {
      const date = timestamp.toDate();
      const minutes = `${date.getMinutes()}`.padStart(2, "0");
      const hours = `${date.getHours()}`.padStart(2, "0");
      const day = `${date.getDate()}`.padStart(2, "0");
      const month = `${date.getMonth() + 1}`.padStart(2, "0");
      const year = date.getFullYear();
      return `${day}.${month}.${year} ${hours}:${minutes}`;
    },
    parseStatus(status) {
      return {
        created: "создан",
        approved: "подтвержден",
        cancelled: "отменен",
        done: "завершен"
      }[status];
    }
  },
  computed: {}
};
</script>

<style lang="scss">
@import "@/styles";
.history-item {
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 24px;
  border-bottom: 1px solid $main-color;
  background-color: #f0f0f0;
  border-radius: 4px;
  padding: 8px 16px;
}

.history-item__header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}

.history-item__name {
  margin-top: 8px;
}

.history-item__price {
  font-weight: bold;
  font-size: 1.3rem;
}

.history-item__orderHeader {
  display: flex;
  flex-flow: row nowrap;
  font-weight: bold;
}

.history-item__orderItem {
  display: flex;
  flex-flow: row nowrap;
}

.orderItem__field {
  width: 200px;
  margin-right: 24px;
}
</style>

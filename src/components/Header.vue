<template>
  <div class="header main-container">
    <div class="header__logo">Logo</div>
    <div class="header__content">
      <a-input-search
        v-model="search"
        placeholder="input search text"
        enter-button
        @search="onSearch"
      />
    </div>
    <div class="header__action-list">
      <a-button type="primary" class="header__button">
        Корзина
      </a-button>

      <a-button type="primary" class="header__button">
        Войти
      </a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    onSearch() {
      console.log(this.search);
    }
  },
  data: () => {
    return {
      search: ""
    };
  }
};
</script>

<style lang="scss">
@import "@/styles";

.header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  height: 70px;
}
.header__logo {
  font-size: 2rem;
  align-self: baseline;
  font-weight: bold;
  color: $main-color;
}
.header__content {
  flex-grow: 1;
  flex-shrink: 1;
  margin: 0 16px;
}

.header__action-list {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}
.header__button {
  &:not(:last-child) {
    margin-right: 8px;
  }
}
</style>

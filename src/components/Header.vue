<template>
  <div class="header main-container">
    <div @click="$router.push('/')" class="header__logo">Пти-Шу</div>
    <div class="header__content">
      <a-input-search
        v-model="search"
        placeholder="input search text"
        enter-button
        @search="onSearch"
      />
    </div>
    <div class="header__action-list">
      <a-badge :count="badgeCount" class="header__button">
        <a-button type="primary" @click="go('Cart')">
          Корзина
        </a-button>
      </a-badge>

      <a-button
        v-if="!isLoggedIn"
        @click="openAuthPopup(true)"
        type="primary"
        class="header__button"
      >
        Войти
      </a-button>
      <template v-else>
        <a-button @click="go('History')" class="header__button">
          Мои заказы
        </a-button>

        <a-button @click="signOut()" class="header__button">
          Выйти
        </a-button>
      </template>
    </div>

    <LoginPopup :visible="visibleAuthPopup" />
  </div>
</template>

<script>
import LoginPopup from "./LoginPopup";
export default {
  name: "Header",
  components: {
    LoginPopup
  },
  computed: {
    visibleAuthPopup() {
      return this.$store.getters.isOpenPopup;
    },
    badgeCount() {
      return this.$store.getters.getCartItemCount;
    },
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    onSearch() {
      console.log(this.search);
    },
    go(routeName) {
      this.$router.push({ name: routeName });
    },
    openAuthPopup(value) {
      this.$store.commit("setOpenPopup", value);
    },
    signOut() {
      this.$store.dispatch("signOut").then(() => {
        this.$router.push({
          name: "Home"
        });
      });
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
  cursor: pointer;
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
    margin-right: 16px;
  }
}
</style>

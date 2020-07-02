<template>
  <div class="header main-container">
    <div @click="$router.push('/')" class="header__logo">Пти-Шу</div>
    <div class="header__content">
      <a-input-search
        v-model="search"
        placeholder="Поиск"
        enter-button
        @search="onSearch"
      />
    </div>
    <div class="header__action-list">
       <a-badge v-if="userRole === '2' || !userRole" :count="badgeCount" class="header__button">
          <a-button type="primary" @click="go('Cart')">
            Корзина
          </a-button>
        </a-badge>
        <a-button v-if="userRole === '2'" @click="go('History')" class="header__button">
            Мои заказы
        </a-button>

      <template v-else-if="userRole === '1'">
        <a-button class="header__button" type="primary" @click="go('CurrentDeliveryOrders')">
            Активные заказы
        </a-button>
        <a-button @click="go('DeliveryGuyOrders')" class="header__button">
            Мои заказы
        </a-button>
      </template>
      
      <template v-else-if="userRole === '0'">
        <a-button class="header__button" type="primary" @click="go('AdminHome')">
            Админ Панель
        </a-button>
        <a-button class="header__button" type="primary" @click="go('AdminAddProduct')">
            Добавить десерт
        </a-button>
      </template>

      <a-button
        v-if="!isLoggedIn"
        @click="openAuthPopup(true)"
        type="primary"
        class="header__button"
      >
        Войти
      </a-button>
      <a-button v-else @click="signOut()" class="header__button">
          Выйти
        </a-button>
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
      console.log(this.$store.getters.isLoggedIn)
      return this.$store.getters.isLoggedIn;
    },
    userRole() {
      return this.$store.getters.getUser ? this.$store.getters.getUser.role : '';
    },
    search: {
      get() {
        return this.$store.getters.getSearch;
      },
      set(value) {
        this.$store.commit("setSearch", value);
      }
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

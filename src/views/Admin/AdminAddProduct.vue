<template>
  <div class="main-container">
    <div class="edit-product">
      <div class="product__info">
        <div class="edit-product__field">
          <div class="edit-product__title">Название товара</div>
          <a-input v-model="name" type="text" autocomplete="off" />
        </div>

        <div class="edit-product__field">
          <div class="edit-product__title">Цена товара (₽)</div>
          <a-input v-model="price" type="number" autocomplete="off" />
        </div>

        <div class="edit-product__field">
          <div class="edit-product__title">Миниатюра изображение</div>
          <a-input v-model="imageURL" type="text" autocomplete="off" />
        </div>

        <div class="edit-product__field">
          <div class="edit-product__title">Изображение в полном размере</div>
          <a-input v-model="imageFullSizeURL" type="text" autocomplete="off" />
        </div>

        <div class="edit-product__field">
          <div class="edit-product__title">Описание товара</div>
          <a-textarea
            v-model="description"
            placeholder="Controlled autosize"
            :auto-size="{ minRows: 3, maxRows: 5 }"
          />
        </div>

        <a-button
          @click="$router.go(-1)"
          type="secondary"
          class="product__button"
          >Отмена
        </a-button>

        <a-button @click="addProduct" type="primary" class="product__button">
          Добавить
        </a-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminProduct",
  computed: {
    newProduct() {
      return {
        name: this.name,
        price: this.price,
        imageURL: this.imageURL,
        imageFullSizeURL: this.imageFullSizeURL,
        description: this.description
      };
    }
  },
  methods: {
    addProduct() {
      console.log("add", this.newProduct);
    }
  },
  data() {
    return {
      name: null,
      price: null,
      imageURL: null,
      imageFullSizeURL: null,
      description: null
    };
  }
};
</script>

<style lang="scss">
.edit-product {
  display: flex;
  flex-flow: row nowrap;
}

.edit-product__title {
  font-size: 1rem;
  font-weight: bold;
  margin: 8px 0;
}

.edit-product__field {
  margin-bottom: 16px;
}

.product__image {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 50%;
  margin-right: 28px;

  img {
    width: 100%;
  }
}

.product__info {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 50%;
}

.product__button {
  margin-top: 24px;
  margin-right: 16px;
}
</style>

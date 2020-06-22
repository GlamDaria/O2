import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "ant-design-vue/dist/antd.css";
import "./styles/index.scss";

import { Button } from "ant-design-vue";
import { Input } from "ant-design-vue";
import { InputNumber } from "ant-design-vue";
import { FormModel } from "ant-design-vue";
import { Form } from "ant-design-vue";
import { Icon } from "ant-design-vue";
import { Modal } from "ant-design-vue";
import { Menu } from "ant-design-vue";

Vue.use(Button);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(FormModel);
Vue.use(Form);
Vue.use(Icon);
Vue.use(Modal);
Vue.use(Menu);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// store.subscribe((mutation, state) => {
//   const types = [
//     "incrementCartItem",
//     "decrementCartItem",
//     "pushCartItem",
//     "removeCartItem"
//   ];
//   if (types.find(type => type === mutation.type)) {
//     console.log("save");
//     localStorage.cart = state.cartManager.cart;
//   }
// });

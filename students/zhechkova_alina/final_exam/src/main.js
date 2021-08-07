import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

import 'bootstrap/scss/bootstrap.scss';
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faSearch,
  faUser,
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

library.add(faSearch, faUser, faShoppingCart)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

Vue.prototype.$http = axios;
const token = localStorage.getItem('token');
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

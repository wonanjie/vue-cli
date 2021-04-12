import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false;
Vue.prototype.$axios = Axios
Vue.use(ElementUI);
//默认请求url拼接
// Axios.defaults.baseURL = 'url'
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
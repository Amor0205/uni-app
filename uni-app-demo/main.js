import Vue from 'vue'
import App from './App'
// import $api from './http/api.js'
import uView from "uview-ui";
Vue.use(uView);

Vue.config.productionTip = false
// Vue.prototype.$api=$api

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

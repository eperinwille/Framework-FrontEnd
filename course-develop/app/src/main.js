import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



// render: function (createElement) {
//   return createElement(App);
// }
// ...
// render(createElement) {
//   return createElement(App);
// }
// ...
// render(h) {
//   return h(App);
// }
// ...
// render: h => h(App);

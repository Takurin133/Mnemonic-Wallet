import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Ionic from '@ionic/vue'

Vue.use(Ionic)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App) // app.vue(import)⇒export defaultをAppにある
}).$mount('#app')
// render: function (createElement) {
// return createElement(App)
// }
// render (h) {
// return h(App)
// }hというエイリアスはhyperscriptから来ている（仮想DOMの実装でよく使われる）

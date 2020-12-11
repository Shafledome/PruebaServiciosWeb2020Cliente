import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueRouter from 'vue-router'
import Tabs from './components/Tabs.vue'

export {router}

Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.use(VueRouter)
Vue.use(Buefy);

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
      { path: '/home', name: 'home', component: Tabs, props: true}
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './registerServiceWorker'


import Vuikit from 'vuikit'
import '@vuikit/theme'
import VuikitIcons from '@vuikit/icons'

import axios from 'axios'
import VueAxios from 'vue-axios'


import VueSVGIcon from 'vue-svgicon'
import './custom-icons'

Vue.use(VueSVGIcon)

Vue.use(VueAxios, axios)
Vue.use(Vuikit)
Vue.use(VuikitIcons)




 
Vue.use(VueAxios, axios);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

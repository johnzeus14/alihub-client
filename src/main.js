import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store';
import './registerServiceWorker'


import axios from 'axios'
import VueAxios from 'vue-axios'


import VueSVGIcon from 'vue-svgicon'
import './custom-icons'

// import SuiVue from 'semantic-ui-vue';
import 'uikit/dist/js/uikit.js'
import './theme/theme.less'

// Vue.use(SuiVue)
Vue.use(VueSVGIcon)



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

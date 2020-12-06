import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'

// VUEX - https://vuex.vuejs.org/
import store from './store'

// VUE-ROUTER - https://router.vuejs.org/
import router from './router'

// PLUGINS
import vuetify from './plugins/vuetify'
import i18n from './plugins/vue-i18n'
import './plugins/vue-google-maps'
import './plugins/vue-shortkey'
import './plugins/vue-head'
import './plugins/vue-gtag'
import './plugins/apexcharts'
import './plugins/echarts'
import './plugins/animate'
import './plugins/clipboard'
import './plugins/moment'

// FILTERS
import './filters/capitalize'
import './filters/lowercase'
import './filters/uppercase'
import './filters/formatCurrency'
import './filters/formatDate'

// STYLES
// Main Theme SCSS
import './assets/scss/theme.scss'

// Animation library - https://animate.style/
import 'animate.css/animate.min.css'

// Set this to false to prevent the production tip on Vue startup.
Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyBVbUBuVYkdWyLd_Nwgm8NQ7EwE30lZXsk",
  authDomain: "caffe-clothing.firebaseapp.com",
  projectId: "caffe-clothing",
  storageBucket: "caffe-clothing.appspot.com",
  messagingSenderId: "682792803412",
  appId: "1:682792803412:web:f10bfefd8fea42195ce1c1",
  measurementId: "G-4WYYYFJTH9"
  };



firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()

const { TimeStamp, GeoPoint } = firebase.firestore

export { TimeStamp, GeoPoint }

/*
|---------------------------------------------------------------------
| Main Vue Instance
|---------------------------------------------------------------------
|
| Render the vue application on the <div id="app"></div> in index.html
|
| https://vuejs.org/v2/guide/instance.html
|
*/
export default new Vue({
  i18n,
  vuetify,
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')

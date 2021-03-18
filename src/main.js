import Vue from 'vue'
import App from './App.vue'
import router from './router'
import GSignInButton from 'vue-google-signin-button';
Vue.use(GSignInButton);

// import './axios'

Vue.config.productionTip = false

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')

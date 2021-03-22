import Vue from 'vue'
import Router from 'vue-router'
import HomeScreen from './components/screens/HomeScreen.vue'
import LoginScreen from './components/screens/LoginScreen.vue'
import RegisterScreen from './components/screens/RegisterScreen.vue'
import ProfileScreen from './components/screens/ProfileScreen.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{path: '/', component: HomeScreen},
		{path: '/login', component: LoginScreen},
		{path: '/register', component: RegisterScreen},
		{path: '/profile', component: ProfileScreen}
	]
})
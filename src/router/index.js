import Home from '../components/views/Home.vue'
import Login from '../components/views/Login.vue'
import Register from '../components/views/Register.vue'

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]

export default routes
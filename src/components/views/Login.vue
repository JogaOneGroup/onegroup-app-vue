<template>
  <Spinner v-if="loading" />
  <div v-else class="form">
    <h2 class="form__title">Login</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form__fields">
        <div class='input'>
          <img
            class="input__img"
            src="../../assets/images/Icons/mail.svg"
            alt="Input mail" />
          <input
            type="text"
            placeholder="Email"
            v-model="email"
            @keyup="validateInput"
          />
        </div>
        <div class='input'>
          <img
            class="input__img"
            src="../../assets/images/Icons/lock.svg"
            alt="Input password" />
          <input
            type="password"
            placeholder="Password"
            v-model="password"
            @keyup="validateInput"
          />
        </div>
      </div>
      <span class="form__error">{{ error }}</span>
      <button class="form__button">Sign In</button>
      <router-link
        class="form__description"
        to="/register">
        Sign Up here
      </router-link>
    </form>
  </div>
</template>

<script>
import { login } from '../../services/Users'
import articles from '../../services/Articles'
import Spinner from '../Spinner.vue'

export default {
  name: 'Login',
  components: { Spinner },
  data () {
    return {
      loading: false,
      error: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async handleSubmit () {
      try {
        if (this.error || !this.email || !this.password) {
          this.error = 'Complete the fields'
          return
        }

        this.loading = true
        const user = await login(this.email, this.password)
        localStorage.setItem('user', JSON.stringify(user))
        articles.setToken()
        this.$router.push('/')
      } catch (error) {
        console.log(error)
        this.loading = false
        this.error = 'Email and password do not match'
        this.email = ''
        this.password = ''
      }
    },

    validateInput () {
      if (!this.email) {
        this.error = 'Email required'
        return
      }
      this.error = ''

      if (!this.password) {
        this.error = 'Password required'
        return
      }
      this.error = ''
    }
  },
  beforeCreate () {
    const user = localStorage.getItem('user')
    if (user) {
      this.$router.push('/')
    }
  }
}
</script>

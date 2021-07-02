<template>
  <Spinner v-if="loading"/>
  <div v-else class="form">
    <h2 class="form__title">Register</h2>
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
      <button class="form__button">Sign Up</button>
      <router-link 
        class="form__description" 
        to="/login">
        Sign In here
      </router-link>
    </form>
  </div>
</template>

<script>
import { register } from '../../services/Users'
import Spinner from '../Spinner.vue'

export default {
  name: 'Register',
  components: { Spinner },
  data() {
    return {
      loading: false,
      error: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async handleSubmit() {
    try {
      if (this.error || !this.email || !this.password) {
        return this.error = 'Complete the fields'
      }

      this.loading = true
      await register(this.email, this.password)
      this.$router.push('/login')

    } catch (error) {
        console.log(error);
        this.loading = false
        this.error = 'Email in use'
        this.email = ''
        this.password = ''
      }
    },

    validateInput() {
    if (!this.email) return this.error = 'Email required'
      this.error = ''

    if (!this.password) return this.error = 'Password required'
      this.error = ''
    }
  },
  beforeCreate() {
    const user = localStorage.getItem('user')
    if (user) {
      this.$router.push('/')
    }
  }
}
</script>

<style>
  .form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 70vh;
}

form {
  margin: 0 auto;
  display: grid;
  justify-content: center;
  width: 350px;
  }

  .form__title {
    text-align: center;
    margin-bottom: 30px;
  }

  .form__fields {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .form__button {
    width: 326px;
    background-color: black;
    font-size: 16px;
    font-weight: bold;
    font-family: 'DM Sans', sans-serif;
    color: white;
    border: none;
    cursor: pointer;
    padding: 18px 0px;
    border-radius: 10px;
    margin-top: 32px;
    margin-bottom: 24px;
  }

  .form__button a {
    text-decoration: none;
    color: white;
  }

  .form__description {
    font-weight: bold;
    text-align: right;
    color: black;
  }

  .form__error {
    text-align: center;
    margin-top: 10px;
    font-size: 12px;
    color: rgb(168, 11, 11);
    height: 13px;
  }

  .create-form {
    position: fixed;
    top: 74px;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.616);
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;

  }

  .create-form form {
    margin-top: -110px;
    border: 1px solid #BABABA;
    border-radius: 15px;
    background-color:white;
    padding: 30px 25px;
    width: 80%;
    max-width: 600px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    position: relative;
  }

  .create-form .form__input {
    padding: 10px;
    border-radius: 15px;
    border: 1px solid #BABABA;
    height: 50px;
    background: none;
    outline: none;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    width: 100%;
    margin-top: 10px;
  }

  input[type="file"] {
    font-family: 'DM Sans', sans-serif;
    border-radius: 5px;
    font-size: 14px;
  }

  .input input {
  border: none;
  background: none;
  outline: none;
  width: 100%;
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  height: 100%;
  }

  .input input::placeholder {
    font-size: 14px;
    color: #BABABA;
    font-family: 'DM Sans', sans-serif;
  }

  .input__img {
    width: 20px;
  }

  .input {
    display: flex;
    border: 1px solid #BABABA;
    border-radius: 10px;
    width: 326px;
    height: 50px;
    padding: 0px 16px;
    gap: 12px;
    outline: none;
  }

  .create-form button {
    width: auto;
    margin-top: 10px;
  }

  .create-form span {
    font-weight: bold;
  }

  .form__button--close, .card__specialInfo-setting {
    background: none;
    outline: none;
    border: none; 
    cursor: pointer;
  }

  .form__button--close {
    position: absolute;
    top: 20px;
    right: 30px;
  }

  .form__button--close img {
    width: 25px;
  }

  .inactive {
    display: none;
  }
</style>
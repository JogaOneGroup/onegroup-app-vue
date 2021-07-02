<template>
  <header class="header">
    <h1 class="header__logo"><strong>ONE</strong>GROUP</h1>
    <!-- { isLogged && -->
      <div class="header__user">
        <button
          @click="handleLogout"
          class="header__user-logout"
        >
        <router-link to="login">
          <img 
            src="../assets/images/Icons/logout.svg" 
            alt="Logout Button" />
        </router-link>
      </button>
      <img 
        class="header__user-avatar" 
        src="../assets/images/avatar.jpg" 
        alt="Avatar" />
    </div>
    <!-- } -->
  </header>
</template>

<script>
import articles from '../services/Articles'

export default {
  methods: {
    handleLogout() {
      articles.setToken('')
      localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style >
  .header {
  position: sticky;
  top: 0;
  z-index: 1;
  height: 74px;
  padding: 12px 20px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__logo {
  font-family: "Monument-Regular";
}

.header__logo strong {
  font-family: "Monument-Bold";
}

.header__user {
  gap: 10px;
  display: flex;
  align-items: center;
}

.header__user-logout {
  background: none;
  border: none;
}

.header__user-logout img {
  cursor: pointer;
}

.header__user-avatar {
  width: 50px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
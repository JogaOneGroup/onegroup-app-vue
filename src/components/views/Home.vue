<template>
  <!-- <Spinner /> -->
  <main>
    <div className="main__manage-articles">
      <button
        @click="createForm = !createForm"
        className="form__button">
        Create new
      </button>
    </div>
    <CreateProductForm 
      v-if="createForm" 
      @close-form="createForm = !createForm"/>
    <CardsList />
  </main>
</template>

<script>
import CardsList from '../CardsList.vue'
import Spinner from '../Card.vue'
import CreateProductForm from '../CreateProductForm.vue'

export default {
  name: 'Home',
  components: {
    CardsList, Spinner, CreateProductForm
  },
  data() {
    return {
      loading: false,
      createForm: false
    }
  },
  methods: {
    addArticle() {
      this.loading = true;
    }
  },
  beforeCreate() {
    const user = localStorage.getItem('user')
    if (!user) {
      this.$router.push('/login')
    }
  }
}
</script>

<style>
  main {
  margin: 0 auto;
  font-family: 'DM Sans', sans-serif;
  padding-bottom: 60px;
  height: 100%;
  max-width: 1024px;
}

.main__manage-articles {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 30px;
}

.main__manage-articles button {
  background-color: #000;
  font-size: 16px;
  font-weight: 700;
  font-family: 'DM Sans',sans-serif;
  color: #fff;
  border: none;
  cursor: pointer;
  padding: 18px 0;
  border-radius: 10px;
  margin-top: 32px;
  margin-bottom: 24px;
  width: 150px;
  cursor: pointer;
}
</style>
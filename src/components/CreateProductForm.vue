<template>
  <div class='create-form'>
    <form @submit.prevent="handleSubmit">
      <button
        type="button"
        @click="$emit('close-form')"
        class="form__button--close">
        <img src="../assets/images/Icons/close.svg" />
      </button>
      <h3>Create product</h3>
      <label>
        <span>Attach the image</span><br/>
        <small style="{ color: 'gray' }">
        (The file name must not contain spaces)
        </small>
        <input
        name="image"
        type='file'
        accept=".jpg, .jpeg, .png"
        @change="handleFileInput"
        />
      </label>
      <label>
        <span>Product name</span>
        <input
          class="form__input"
          placeholder="Name"
          v-model="title"
          />
      </label>
      <label>
        <span>Product price</span>
        <input
          class="form__input"
          placeholder="Price"
          v-model="price"
          type="number"/>
      </label>
      <label>
        <span>Product score</span>
        <input
          class="form__input"
          placeholder="Score"
          type="number"
          step="any"
          min='1'
          max="5"
          v-model="rating"
          />
      </label>
      <span class="form__error">{{error}}</span>
      <button class="form__button">
        Create article
      </button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue' 
import { useStore } from 'vuex'

export default {
  setup(props, { emit }) {
    const store = useStore()

    let title = ref('')
    let price = ref('')
    let rating = ref('')
    let file = ref('')
    let error = ref('')

    const handleFileInput = (event) => {
      file.value = event.target.files[0]
    }

    const handleRating = ({ target }) => {
      rating.value = target.value
    }

    const handleSubmit = () => {

      if (!title.value || !price.value || !rating.value || !file.value) {
        error.value = 'Complete the fields'
        return
      }
      
      const articleData = new FormData()

      articleData.append('image', file.value)
      articleData.append('title', title.value)
      articleData.append('price', price.value)
      articleData.append('rating', rating.value)

      store.dispatch('createArticle', articleData)
      emit('close-form')
      error.value = ''
    }

    return { 
      title, 
      price, 
      rating, 
      file, 
      error, 
      handleFileInput, 
      handleRating,
      handleSubmit 
      }
  }
}
</script>
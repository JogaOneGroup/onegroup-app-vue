<template>
  <div class='create-form'>
    <form @submit.prevent="handleSubmit">
      <button
        type="button"
        @click="$emit('close-form')"
        class="form__button--close">
        <img src="../assets/images/Icons/close.svg" />
      </button>
      <h3>Edit product</h3>
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
        Send changes
      </button>
    </form>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  props: {
    cardId: String
  },
  setup(props, { emit }) {
    const store = useStore()
    const element = computed(() => 
      store.state.articles.find(el => el._id === props.cardId))
    
    let title = ref(element.value.title)
    let price = ref(element.value.price)
    let rating = ref(element.value.rating)
    const error = ref('')

    const handleRating = ({ target }) => {
      rating.value = target.value
    }


    const handleSubmit = () => {
      
      if (!title.value || !price.value || !rating.value ) {
        error.value = 'Complete the fields'
        return
      }

      const propsToUpdate = { 
        title: title.value, 
        price: price.value, 
        rating: rating.value 
      }

      store.dispatch('updateArticle', { id: props.cardId, propsToUpdate })
      emit('close-form')
      error.value = ''
    }


    return { error, title, price, rating, handleSubmit, handleRating }

    
  }
}
</script>

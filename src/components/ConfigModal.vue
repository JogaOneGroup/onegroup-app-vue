<template>
  <div class="card__modal">
    <button @click="configModal = !configModal">
      <img src="../assets/images/Icons/edit.svg" alt="Edit button" />
      Edit article
    </button>
    <button @click="deleteArticle(cardId)">
      <img src="../assets/images/Icons/delete.svg" alt="Delete button" />
      Delete article
    </button>
  <EditProductForm
    v-if="configModal"
    @close-form="handleClose"
    :cardId="cardId"
  />
  </div>
</template>

<script>
import EditProductForm from './EditProductForm.vue'
import { useStore } from 'vuex'
import { ref } from 'vue'

export default {
  components: { EditProductForm },
  props: {
    cardId: String
  },
  setup(props, {emit}) {
    const store = useStore()

    const configModal = ref(false)

    const deleteArticle = (id) => {
      store.dispatch('deleteArticle', id)
    }

    const handleClose = () => {
      configModal.value = !configModal.value
      emit('close-config')
    }

    return { configModal, deleteArticle, handleClose }
  }
}
</script>

<style scoped>
  .card__modal {
    z-index: 1;
    border: 1px solid black;
    background: white;
    display: flex;
    flex-direction: column;
    bottom: 3px;
    right: 13px;
    position: absolute;
    width: 160px;
    border-bottom: none;
  }

  .card__modal button {
    padding: 5px 10px;
    background: none;
    border: none;
    border-bottom: 1px solid black;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
  }

  .card__modal button:hover {
    background: #ecebeb;
  }
</style>

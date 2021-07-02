<template>
  <div class="cards-container">
    <div class="cards">
      <Card
        v-for="card in pagedCards"
        :key="card._id"
        :card="card"
      />
    </div>
    <div class="cards__pagination">
      <button
        @click="handlePrev"
        class="cards__pagination--prev">&lt;</button>
        <p>{{currentPage}}</p>
      <button 
        @click="handleNext"
        class="cards__pagination--next">&gt;</button>
    </div>
    <!-- <CardsPagination /> -->
  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import Card from './Card.vue'
import CardsPagination from './CardsPagination.vue'

export default {
  components: { Card, CardsPagination },
  setup () {
    const store = useStore()

    const page = ref(0)
    const pageLength = 4
    const results = computed(() => page.value + pageLength)

    const cards = computed(() => store.state.articles)

    const numOfPages = computed(() => Math.ceil(cards.value.length / pageLength))

    const maxPage = computed(() => (numOfPages.value * pageLength) - pageLength )

    const pagedCards = computed(() => {
      return store.getters.getArticlesFromPage(page.value, results.value)
      })

    const currentPage = computed(() => (Math.abs(page.value) / pageLength) + 1)

    const handleNext = () => {
      if (page.value === maxPage.value) {
        page.value = 0
      } else {
        page.value = page.value + pageLength
      }
    }

    const handlePrev = () => {
      if (page.value === 0) {
        page.value = maxPage.value
      } else {
        page.value = page.value - pageLength
      }
    }

    onMounted(() => {
      store.dispatch('getArticles')
      
    })

    return { pagedCards, cards, currentPage, handlePrev, handleNext }
  },
}
</script>

<style>
  .cards-container {
  width: 100%;
  display: grid;
  }

  .cards {
    margin: 0 auto;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 240px));
    gap: 10px;
    justify-content: center;
    justify-content: center;
    justify-items: center;
    row-gap: 35px;
  }

  .cards__pagination {
    display: flex;
    gap: 15px;
    margin: 0 auto;
    margin-top: 50px;
  }

  .cards__pagination button {
    font-weight: bold;
    background-color: black;
    color: white;
    border: none;
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 50%;
  }

  .cards__pagination p {
    font-weight: bold;
    text-decoration: underline;
  }
</style>

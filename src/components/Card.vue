<template>
  <div class="cards__item" style={{}}>
    <img
      class="cards__item-image"
      :src="`https://onegroup-app-api.herokuapp.com${card.image}`"
      :alt="card.title" />
    <div class="card__info">
      <p class="card__info-title">{{ card.title }}</p>
      <p class="card__info-price">{{`$${card.price} COP`}}</p>
      <div class="card__specialInfo">
        <div class="card__specialInfo-rating">
          <img
            src='../assets/images/Icons/start.svg'
            alt="Qualification" />

          <p>{{ card.rating }}</p>
        </div>
          <ConfigPanel
            @close-config="configModal= !configModal" 
            v-if="configModal" 
            :cardId="card._id"/>
        <button
          class="card__specialInfo-setting"
          @click="configModal= !configModal"
          >
          <img
            alt="card-settings"
            src='../assets/images/Icons/config.svg' />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ConfigPanel from './ConfigModal.vue'

export default {
  components: { ConfigPanel },
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      configModal: false
    }
  },
  methods: {
    closeModal () {
      console.log('Close')
    }
  }
}

</script>

<style>
  .cards__item {
  position: relative;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0px 4px 30px rgba(104, 117, 130, 0.05);
  padding: 20px 31px;
  width: 215px;
}

.cards__item-image {
  width: 100%;
  height: 143px;
  object-fit: cover;
  border-radius: 15px;
}

.card__info-title {
  font-weight: bold;
}

.card__info-price {
  font-weight: bold;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.51);
}

.card__specialInfo {
  position: relative;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card__specialInfo-rating {
  display: flex;
  gap: 8px;
}

.card__specialInfo-rating p {
  font-size: 12px;
}

.card__specialInfo-setting {
  background: none;
  border: none;
  width: 10px;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.51);
}

</style>

import { createStore } from 'vuex'
import articles from '../services/Articles'

export const store = createStore({
  state: {
    articles: []
  },
  mutations: {
    setArticles(state, payload) {
      state.articles = payload
    },
    createArticle(state, payload) {
      state.articles = [...state.articles, payload]
    },
    deleteArticle(state, payload) {
      state.articles = state.articles.filter(item => item._id !== payload)
    },
    updateArticle(state, payload) {
      console.log(payload.updatedItem);
      state.articles = state.articles.map(item => {
        if(item._id === payload.id) {
          return {
            ...payload.updatedItem
          }
        }

        return item
      })
    },
  },
  actions: {
    async getArticles({ commit }) {
      try {
        articles.setToken()
        const allArticles = await articles.getAll()
        commit('setArticles', allArticles)
      } catch (error) {
        console.log(error);
      }
    },
    async createArticle({ commit }, articleToCreate) {
      try {
        const createdArticle = await articles.create(articleToCreate)
        commit('createArticle', createdArticle)
      } catch (error) {
        console.log(error);
      }
    },
    async deleteArticle({ commit }, id) {
      try {
        commit('deleteArticle', id)
        await articles.delete(id)
      } catch (error) {
        
      }
    },
    async updateArticle({ commit }, { id, propsToUpdate } ) {
      try {
        console.log(id, propsToUpdate);
        const updatedItem = await articles.update(id, propsToUpdate)
        commit('updateArticle', { id, updatedItem })
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    getArticlesFromPage: (state) => (page, results) => {
      return state.articles.slice(page, results)
    }
  }
})

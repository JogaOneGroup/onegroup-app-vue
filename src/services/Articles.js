import axios from 'axios'
const API_URL = 'https://onegroup-app-api.herokuapp.com/api/articles'
// const API_URL = 'http://localhost:3001/api/articles'

class Articles {
  constructor (API_URL) {
    this.API_URL = API_URL
    this.token = ''
  }

  setToken () {
    const user = localStorage.getItem('user')
    const userParsed = JSON.parse(user)
    this.token = userParsed.token
  }

  async getAll () {
    try {
      const { data: articles } = await axios.get(this.API_URL, {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      })
      return articles
    } catch (error) {
      console.log(error)
    }
  }

  async create (formData) {
    try {
      const { data: createdArticle } = await axios.post(
        this.API_URL, formData, {
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        })

      return createdArticle
    } catch (error) {
      console.log(error)
    }
  }

  async delete (id) {
    try {
      const { data: deletedArticle } = await axios.delete(
        `${this.API_URL}/${id}`, {
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        })
      return deletedArticle
    } catch (error) {
      console.log(error)
    }
  }

  async update (id, propsToUpdate) {
    try {
      const { data: updatedArticle } = await axios.put(
        `${this.API_URL}/${id}`, { ...propsToUpdate }, {
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        })
      return updatedArticle
    } catch (error) {
      console.log(error)
    }
  }
}

const articles = new Articles(API_URL)

export default articles

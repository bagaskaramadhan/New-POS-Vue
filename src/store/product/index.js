import axios from 'axios'
import { URL } from '../../helpers/env'

const state = () => {
  return {
    product: [],
    category: [],
    isLoading: false,
    detail: {
      data: []
    }
  }
}

const getters = {
  getAllProduct (state) {
    return state.product
  }
}

const mutations = {
  SET_PRODUCT (state, payload) {
    state.product = payload
  }
}

const actions = {
  getProduct (context) {
    return new Promise((resolve, reject) => {
      axios.get(`${URL}books/getall`).then((response) => {
        context.commit('SET_PRODUCT', response.data.data)
        resolve()
      }).catch((err) => {
        reject(err)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}

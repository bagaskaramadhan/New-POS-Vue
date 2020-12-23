import axios from 'axios'
import { URL } from '../../helpers/env'

const state = () => {
  return {
    product: [] // getAll
  }
}

const getters = {
  getAllProduct (state) {
    return state.product
  }
}

const mutations = {
  SET_ALL_PRODUCT (state, payload) {
    state.product = payload
  }
}

const actions = {
  getProduct (context) {
    return new Promise((resolve, reject) => {
      axios.get(`${URL}product/getall`)
        .then((result) => {
          context.commit('SET_ALL_PRODUCT', result.data.data)
          resolve()
        })
        .catch((err) => {
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

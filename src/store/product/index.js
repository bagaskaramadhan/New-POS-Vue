import axios from 'axios'
import { URL } from '../../helpers/env'

const state = () => {
  return {
    product: []
  }
}

const getters = {
  getAllProduct (state) {
    return state.product // state.product di dapat dari functions state => product
  }
}

const mutations = { // mengubah state/data pada aplikasi
  SET_ALL_PRODUCT (state, payload) { // SET_ALL_PRODUCT di buat untuk actions
    state.product = payload
  }
}

const actions = {
  getProduct (context) {
    return new Promise((resolve, reject) => {
      axios.get(`${URL}books/getall`)
        .then((response) => {
          context.commit('SET_ALL_PRODUCT', response.data.data) // context.commit hanya digunakan untuk GET/Read
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

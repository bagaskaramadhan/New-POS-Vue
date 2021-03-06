import axios from 'axios'
import { URL } from '../../helpers/env'

const state = () => {
  return {
    product: [],
    categoryProduct: [],
    detail: []
  }
}

const getters = {
  getAllProduct (state) {
    return state.product // state.product di dapat dari functions state => product
  },
  getAllCategory (state) {
    return state.categoryProduct
  },
  getIdProduct (state) {
    return state.detail
  }
}

const mutations = { // mengubah state/data pada aplikasi
  SET_ALL_PRODUCT (state, payload) { // SET_ALL_PRODUCT di buat untuk actions
    state.product = payload
  },
  SET_ALL_CATEGORY (state, payload) {
    state.categoryProduct = payload
  },
  SET_ID_PRODUCT (state, payload) {
    state.detail = payload
  }
}

const actions = {
  getProduct (context) {
    return new Promise((resolve, reject) => {
      axios.get(`${URL}product/getall`)
        .then((response) => {
          context.commit('SET_ALL_PRODUCT', response.data.data) // context.commit hanya digunakan untuk GET/Read
          resolve()
        }).catch((err) => {
          reject(err)
        })
    })
  },
  getCategory (context) {
    return new Promise((resolve, reject) => {
      axios.get(`${URL}category/getall`)
        .then((response) => {
          context.commit('SET_ALL_CATEGORY', response.data.data)
          resolve()
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  insertProduct (context, payload) {
    return new Promise((resolve, reject) => {
      const fd = new FormData()
      fd.append('product_name', payload.product_name)
      fd.append('product_category', payload.product_category)
      fd.append('stock', payload.stock)
      fd.append('price', payload.price)
      fd.append('image', payload.image)
      axios.post(`${URL}product/insert`, fd)
        .then((result) => {
          resolve(result)
          window.location = '/'
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  deleteProduct (context, payload) {
    return new Promise((resolve, reject) => {
      axios.delete(`${URL}product/delete/${payload}`)
        .then((result) => {
          resolve(result)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  updateProduct (context, payload) {
    return new Promise((resolve, reject) => {
      const fd = new FormData()
      fd.append('product_name', payload.product_name)
      fd.append('product_category', payload.product_category)
      fd.append('stock', payload.stock)
      fd.append('price', payload.price)
      fd.append('image', payload.image)
      axios.patch(`${URL}product/update/${payload.product_id}`, fd)
        .then((result) => {
          // console.log(result)
          // alert(result)
          resolve(result.data)
          // resolve(result.data.message)
        }).catch((err) => {
          console.log(err)
          reject(err)
        })
    })
  },
  getDetail (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${URL}product/getbyid/${payload}`)
        .then((result) => {
          context.commit('SET_ID_PRODUCT', result.data.data)
          resolve(result.data.data)
          // console.log(result)
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

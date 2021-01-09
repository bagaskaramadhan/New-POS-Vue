import axios from 'axios'
import { URL } from '../../helpers/env'

const state = () => {
  return {
    token: localStorage.getItem('token') || null
  }
}
const getters = {
  isLogin (state) {
    if (state.token !== null) {
      return true
    } else {
      return false
    }
  }
}

const actions = {
  login (context, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`${URL}users/login`, payload)
        .then((result) => {
          localStorage.setItem('token', result.data.data.token)
          localStorage.setItem('admin', result.data.data.admin)
          // localStorage.setItem('token', result.data.data.token)
          // console.log(result.data.message)
          resolve(result.data.message)
        }).catch(() => {
          // eslint-disable-next-line prefer-promise-reject-errors
          reject('GAGAL')
        })
    })
  },
  register (context, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`${URL}users/register`, payload)
        .then((result) => {
          // console.log(result.data.message)
          resolve(result.data.message)
        })
        .catch(() => {
          // eslint-disable-next-line prefer-promise-reject-errors
          reject('GAGAL')
        })
    })
  }
}
export default {
  namespaced: true,
  state,
  actions,
  getters
}

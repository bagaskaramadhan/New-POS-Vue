<template>
  <div>
    <div class="container">
      <div class="row login-page-style">
        <div class="col-7">
          <img src="../assets/logo-cafe.png" alt="indonesian-food" />
        </div>
        <div class="col-5 login-card-style">
          <div>
            <b-card title="Login">
              <hr />
              <b-form @submit.prevent="formLogin()">
                <b-form-group>
                  <b-form-input
                    type="text"
                    placeholder="Username"
                    v-model="loginData.username"
                  />
                </b-form-group>
                <b-form-group>
                  <b-form-input
                    type="password"
                    placeholder="Password"
                    v-model="loginData.password"
                  />
                </b-form-group>
                <div class="d-flex button-login-style">
                  <b-button class="mr-3" variant="primary" type="submit"
                    >Login</b-button
                  >
                  <p class="mt-3">
                    Do not have account? Click
                    <router-link to="/register">Register</router-link>
                  </p>
                </div>
              </b-form>
            </b-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-page-style {
  margin-top: 7%;
}
.login-card-style {
  margin-top: 7%;
}
.button-login-style {
  justify-content: space-between;
}
</style>

<script>
import Swal from 'sweetalert2'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      loginData: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    formLogin () {
      if (this.loginData.username === '' || this.loginData.password === '') {
        Swal.fire({
          icon: 'error',
          text: 'Cannot empty'
        })
      } else {
        this.loginActions(this.loginData).then((result) => {
          if (result === 'Login success') {
            window.location = '/'
          } else if (result === 'username not registered') {
            Swal.fire({
              icon: 'error',
              text: 'Username not registered'
            })
          } else if (result === 'wrong password') {
            Swal.fire({
              icon: 'error',
              text: 'Wrong password'
            })
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
              footer: '<a href>Why do I have this issue?</a>'
            })
          }
        })
      }
    },
    ...mapActions({
      loginActions: 'auth/login'
    })
  }
}
</script>

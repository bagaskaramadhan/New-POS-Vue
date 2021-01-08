<template>
  <div>
    <div class="container">
      <div class="row register-page-style">
        <div class="col-7">
          <img src="../assets/logo-cafe.png" alt="indonesian-food" />
        </div>
        <div class="col-5 register-card-style">
          <div>
            <b-card title="Register">
              <hr />
              <b-form @submit.prevent="formRegister()">
                <b-form-group>
                  <b-form-input
                    type="text"
                    placeholder="Fullname"
                    v-model="registerData.fullname"
                  />
                </b-form-group>
                <b-form-group>
                  <b-form-input
                    type="text"
                    placeholder="Username"
                    v-model="registerData.username"
                  />
                  <b-form-text>
                    Your username must be 5-20 characters.
                  </b-form-text>
                </b-form-group>
                <b-form-group>
                  <b-form-input
                    type="text"
                    placeholder="Email"
                    v-model="registerData.email"
                  />
                </b-form-group>
                <b-form-group>
                  <b-form-input
                    type="password"
                    placeholder="Password"
                    v-model="registerData.password"
                    :state="passwordLength"
                  />
                  <b-form-invalid-feedback>
                    Password more than 10 characters.
                  </b-form-invalid-feedback>
                </b-form-group>
                <b-form-group>
                  <b-form-input
                    type="password"
                    placeholder="Password Confirmation"
                    v-model="registerData.password2"
                    :state="passwordValidation"
                  />
                </b-form-group>
                <div class="d-flex button-style">
                  <b-button class="mr-3" variant="primary" type="submit"
                    >Register</b-button
                  >
                  <p class="mt-3">
                    Do not have account? Click
                    <router-link to="/login">Login</router-link>
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
.register-page-style {
  margin-top: 7%;
}
.register-card-style {
  margin-top: 3%;
}
.button-style {
  justify-content: space-between;
}
</style>

<script>
import Swal from 'sweetalert2'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      registerData: {
        username: '',
        fullname: '',
        email: '',
        password: '',
        password2: ''
      }
    }
  },
  methods: {
    formRegister () {
      if (
        this.registerData.username === '' ||
        this.registerData.email === '' ||
        this.registerData.password === '' ||
        this.registerData.password2 === ''
      ) {
        Swal.fire({
          icon: 'error',
          text: 'Cannot empty'
        })
      } else {
        this.registerActions(this.registerData).then((result) => {
          if (result === 'Register success!') {
            Swal.fire({
              icon: 'success',
              text: 'Check your activation email'
            })
            window.location = '/login'
          } else if (result === 'Email or username has been taken') {
            Swal.fire({
              icon: 'error',
              text: 'Email or username has been taken'
            })
          } else if (result === 'Username must be 5-20 characters') {
            Swal.fire({
              icon: 'error',
              text: 'Username must be 5-20 characters'
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
      registerActions: 'auth/register'
    })
  },
  computed: {
    passwordValidation () {
      return this.registerData.password2 === this.registerData.password
    },
    passwordLength () {
      return this.registerData.password.length >= 10
    }
  }
}
</script>

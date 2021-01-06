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
              <b-form>
                <b-form-group>
                  <b-form-input v-model="username" :state="validation" />
                  <b-form-invalid-feedback :state="validation">
                    Your username must be 5-20 characters.
                  </b-form-invalid-feedback>
                  <b-form-valid-feedback :state="validation">
                    Looks Good.
                  </b-form-valid-feedback>
                </b-form-group>
                <b-form-group>
                  <b-form-input type="password" placeholder="Password" />
                </b-form-group>
                <b-button>TEST</b-button>
                <router-link to="/signup">Sign Up</router-link>
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
  margin-top: 10%;
}
.login-card-style {
  margin-top: 7%;
}
</style>

<script>
export default {
  data () {
    return {
      username: ''
    }
  },
  computed: {
    validation () {
      return this.username.length >= 5 && this.username.length <= 20
    }
  }
}
</script>

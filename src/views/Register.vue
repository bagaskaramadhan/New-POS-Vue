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
              <b-form>
                <b-form-group>
                  <b-form-input type="text" placeholder="Username" />
                  <b-form-text>
                    Your username must be 5-20 characters.
                  </b-form-text>
                </b-form-group>
                <b-form-group>
                  <b-form-input type="email" placeholder="Email" />
                </b-form-group>
                <b-form-group>
                  <b-form-input type="password" placeholder="Password" />
                </b-form-group>
                <div class="d-flex button-style">
                  <b-button class="mr-3" variant="primary">Register</b-button>
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
  margin-top: 7%;
}
.button-style {
  justify-content: space-between;
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
      return this.username.length >= 3
    }
  }
}
</script>

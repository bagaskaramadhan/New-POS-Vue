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
                  <b-form-input type="text" placeholder="Username" />
                </b-form-group>
                <b-form-group>
                  <b-form-input type="password" placeholder="Password" />
                </b-form-group>
                <div class="d-flex button-login-style">
                  <b-button class="mr-3" variant="primary">Login</b-button>
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
export default {}
</script>

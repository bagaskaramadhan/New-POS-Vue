<template>
  <div>
    <b-form @submit.stop.prevent>
      <label for="feedback-user">User ID</label>
      <b-form-input
        v-model="username"
        :state="validation"
        id="feedback-user"
      ></b-form-input>
      <b-form-invalid-feedback :state="validation">
        Your user ID must be 5-12 characters long.
      </b-form-invalid-feedback>
      <b-form-valid-feedback :state="validation">
        Looks Good.
      </b-form-valid-feedback>
    </b-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: ''
    }
  },
  computed: {
    validation () {
      return this.username.length > 4 && this.username.length < 13
    }
  }
}
</script>

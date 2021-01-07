<template>
  <div>
    <b-form>
      <b-form-input v-model="userId1" class="m-5"/>
      <b-form-input v-model="userId2" class="m-5" :state="validation"/>

      <b-form-invalid-feedback :state="validation">
        SALAH
      </b-form-invalid-feedback>
      <!-- <b-form-valid-feedback :state="validation">
        Looks Good.
      </b-form-valid-feedback> -->
    </b-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userId1: '',
      userId2: ''
    }
  },
  computed: {
    validation () {
      return this.userId2 === this.userId1
    }
  }
}
</script>

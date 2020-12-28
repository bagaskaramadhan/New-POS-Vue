<template>
  <div class="mt-3">
    <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')">Open Modal</b-button>

  <b-modal id="bv-modal-example" hide-footer>
    <template #modal-title>
      {{title}}
    </template>
    <div class="d-block text-center" v-for="(item, index) in idProductGetters" :key="index">
      <h3> asd</h3>
    </div>
    <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">Close Me</b-button>
  </b-modal>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
const { URL } = require('../helpers/env')
export default {
  props: [
    'title'
  ],
  data () {
    return {
      URL: URL
    }
  },
  computed: {
    ...mapGetters({
      idProductGetters: 'product/getIdProduct'
    })
  },
  methods: {
    ...mapActions({
      idProductActions: 'product/getDetail'
    })
  },
  mounted () {
    this.idProductActions()
  }
}
</script>

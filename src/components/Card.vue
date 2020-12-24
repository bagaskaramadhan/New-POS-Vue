<template>
  <div>
    <div v-for="(item, index) in product" :key="index" class="card-style">
      <b-card>
        <img :src="`${URL}/${item.image}`" />
        <b-card-text>
          {{ item.product_name }}
          <br />
          {{ item.category_name }}
          <br />
          {{ item.price }}
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
const { URL } = require('../helpers/env')
export default {
  data () {
    return {
      URL: URL
    }
  },
  computed: {
    ...mapGetters({
      product: 'product/getAllProduct'
    })
  },
  methods: {
    ...mapActions({
      getMenu: 'product/getProduct'
    })
  },
  mounted () {
    this.getMenu()
  }
}
</script>

<style scoped>
.card-style img {
  width: 250px;
  height: 200px;
}
</style>

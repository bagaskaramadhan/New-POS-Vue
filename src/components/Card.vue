<template>
  <div class="container">
  <div class="row">
    <div class="col-md-4 mb-3" v-for="(item, index) in productGetters" :key="index">
      <b-card class="b-card-style">
        <img :src="`${URL}/${item.image}`" :alt="`${URL}/${item.image}`">
        <div class="b-card-text-style">
          <h5>{{item.product_name}}</h5>
          <h5>{{item.stock}}</h5>
          <h5>{{item.price}}</h5>
          <h5>{{item.category_name}}</h5>
        </div>
        <div class="d-flex justify-content-around">
          <b-button>Detail</b-button>
          <b-button>Update</b-button>
          <b-button>Delete</b-button>
        </div>
  </b-card>
    </div>
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
      productGetters: 'product/getAllProduct'
    })
  },
  methods: {
    ...mapActions({
      productActions: 'product/getProduct'
    })
  },
  mounted () {
    this.productActions()
  }
}
</script>

<style scoped>
.b-card-style{
  margin-top: 60px;
  padding: 0px;
}
.b-card-style img {
 display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%
}
.b-card-text-style {
  padding-top: 10px;
  padding-bottom: 1px;
}
</style>

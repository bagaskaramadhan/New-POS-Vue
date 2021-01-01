<template>
  <div>
    <div class="row no-gutters">
      <div
        class="column"
        v-for="(product, index) in productGetters"
        :key="index"
      >
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                class="rectangular"
                :src="`${URL}${product.image}`"
                alt="Avatar"
                style="width: 240px"
              />
            </div>
            <div class="flip-card-back">
              <img
                class="rectangular"
                :src="`${URL}${product.image}`"
                alt="Avatar"
                style="width: 240px; height: 240px"
              />
              <div class="top-left">
                <p>Product: {{ product.product_name }}</p>
                <p>Category: {{ product.category_name }}</p>
                <p>Stock: {{ product.stock }}</p>
                <p>Price: {{ product.price }}</p>
              </div>
              <div class="button-card">
                <b-button variant="warning" class="mr-5">Update</b-button>
                <b-button
                  variant="danger"
                  @click="deleteProduct(product.product_id)"
                  >Delete</b-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.rectangular {
  background: 50% 50% no-repeat; /* 50% 50% centers image in div */
  width: 250px;
  height: 250px;
}
.button-card {
  position: absolute;
  top: 185px;
  left: 20px;
}
.top-left {
  position: absolute;
  top: 8px;
  left: 16px;
}

.flip-card {
  background-color: transparent;
  width: 15rem;
  margin-left: 45px;
  margin-top: 5%;
  /* width: 300px; */
  height: 15rem;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  /* text-align: center; */
  transition: transform 1s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  background-color: #000;
  color: #ffffff;
  transform: rotateY(180deg);
}

.flip-card-back img {
  opacity: 0.5;
}
</style>

<script>
// import DetailModal from './DetailModal'
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
      productActions: 'product/getProduct',
      deleteActions: 'product/deleteProduct'
    }),
    deleteProduct (id) {
      this.deleteActions(id).then(() => {
        this.productActions()
      })
    }
  },
  mounted () {
    this.productActions()
  },
  components: {
    // DetailModal
  }
}
</script>

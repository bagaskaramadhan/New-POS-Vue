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
                :src="`${URL}${product.image}`"
                alt="Avatar"
                style="width: 300px; height: 300px"
              />
            </div>
            <div class="flip-card-back">
              <img
                :src="`${URL}${product.image}`"
                alt="Avatar"
                style="width: 300px; height: 300px"
              />
              <div class="top-left">
                <h5>{{ product.product_name }}</h5>
                <p>{{ product.stock }}</p>
                <p>{{ product.category_name }}</p>
                <p>{{ product.price }}</p>
                <div class="d-flex justify-content-around">
                  <b-button variant="warning">OK</b-button>
                  <b-button variant="success">OK</b-button>
                  <b-button variant="danger">OK</b-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.top-left {
  position: absolute;
  top: 8px;
  left: 16px;
}

.flip-card {
  background-color: transparent;
  width: 300px;
  height: 300px;
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

/* .flip-card-front {
  background-color: #bbb;
  color: black;
} */

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

<template>
  <div>
    <div class="row no-gutters">
      <div
        class="card column card-style"
        v-for="(item, index) in productGetters"
        :key="index"
      >
        <img
          :src="`${URL}${item.image}`"
          class="card-img-top"
          :alt="`${URL}${item.image}`"
        />
        {{ item.product_name }}
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <b-button v-b-modal.modal-1>Launch demo modal</b-button>

            <b-modal id="modal-1" title="BootstrapVue">
        {{ item.product_name }}

              <p class="my-4">{{item.stock}}</p>
            </b-modal>
            <!-- <DetailModal /> -->
            <!-- <button class="btn" @click="detailProduct(item.product_id)">
              <b-icon scale="3" icon="clipboard-data" />
            </button> -->
            <button class="btn">
              <img src="../assets/refresh-button.png" width="50px" />
            </button>
            <button class="btn" @click="deleteProduct(item.product_id)">
              <b-icon scale="3" icon="trash" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-style {
  width: 15rem;
  margin-left: 45px;
  margin-top: 5%;
}
.btn {
  border: none;
  padding: 12px 16px;
  cursor: pointer;
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

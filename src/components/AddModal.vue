<template>
  <div>
    <img src="../assets/add.png" width="50px" v-b-modal.addModal />
    <b-modal
      ref="hide-Modal"
      hide-footer
      id="addModal"
      title="Add Product"
      class="text-center"
    >
      <form @submit.prevent="formInsert" enctype="multipart/form-data">
        <b-form-input
          v-model="input.product_name"
          type="text"
          placeholder="Product Name"
          class="mb-3"
        />
        <b-form-select class="mb-3" v-model="input.product_category">
          <b-form-select-option :value="null"> ---- </b-form-select-option>
          <b-form-select-option
            v-for="(item, index) in categoryGetters"
            :key="index"
            :value="item.category_id"
          >
            {{ item.category_name }}
          </b-form-select-option>
        </b-form-select>
        <b-form-input
          v-model="input.stock"
          type="number"
          placeholder="Stock"
          class="mb-3"
        />
        <b-form-input
          v-model="input.price"
          type="number"
          placeholder="Price"
          class="mb-3"
        />
        <div class="d-flex justify-content-around">
          <b-button variant="danger" type="reset">Reset</b-button>
          <b-button variant="warning" @click="buttonCancel()">Cancel</b-button>
          <b-button variant="success" @click="buttonInsert()">Upload Product</b-button>
        </div>
      </form>
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      input: {
        product_name: null,
        product_category: null,
        stock: null,
        price: null
      }
    }
  },
  computed: {
    ...mapGetters({
      categoryGetters: 'product/getAllCategory'
    })
  },
  methods: {
    ...mapActions({
      categoryActions: 'product/getCategory',
      formInsert: 'product/insertProduct',
      productActions: 'product/getProduct'
    }),
    buttonInsert () {
      this.formInsert(this.input)
        .then(() => {
          this.productActions()
          this.$refs['hide-Modal'].hide()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    buttonCancel () {
      this.$refs['hide-Modal'].hide()
    }
  },
  mounted () {
    this.categoryActions()
  }
}
</script>

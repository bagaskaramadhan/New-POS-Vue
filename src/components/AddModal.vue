<template>
  <div>
    <img src="../assets/add.png" width="50px" v-b-modal.addModal />
    <b-modal id="addModal" title="Add Product" class="text-center">
      <form>
        <b-form-input type="text" placeholder="Product Name" class="mb-3" />
        <b-form-select class="mb-3">
          <b-form-select-option
            v-for="(item, index) in categoryGetters"
            :key="index"
            :value="item.category_id"
          >
            {{ item.category_name }}
          </b-form-select-option>
        </b-form-select>
        <b-form-input type="number" placeholder="Stock" class="mb-3" />
        <b-form-input type="number" placeholder="Price" class="mb-3" />
        <b-button>Add</b-button>
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
        category_id: null,
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
      categoryActions: 'product/getCategory'
    }),
    load () {
      console.log(this.input)
    }
  },
  mounted () {
    this.categoryActions()
  }
}
</script>

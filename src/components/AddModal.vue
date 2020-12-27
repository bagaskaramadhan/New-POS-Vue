<template>
  <div>
    <img src="../assets/add.png" width="50px" v-b-modal.addModal />
    <b-modal id="addModal" title="Add Product" class="text-center">
      <form @submit.prevent="insert" enctype="multipart/form-data">
        <b-form-input v-model="input.product_name" type="text" placeholder="Product Name" class="mb-3" />
        <b-form-select v-model="input.category_id" class="mb-3" />
        <b-form-input v-model="input.stock" type="number" placeholder="Stock" class="mb-3" />
        <b-form-input v-model="input.Price" type="number" placeholder="Price" class="mb-3" />
        <!-- <b-form-file v-model="input." placeholder="Choose a file or drop it here..." /> -->
        <b-button class="mt-3" variant="outline-success" type="button" block @click="load()" name="button">Add</b-button
        >
      </form>
    </b-modal>
  </div>
</template>

<script>
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
  methods: {
    load () {
      console.log(this.input)
    }
  }
}
</script>

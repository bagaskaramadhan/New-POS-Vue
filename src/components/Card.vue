<template>
  <div>
    <div v-if="token === null">
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
                <p>Price: Rp. {{ product.price }}</p>
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div v-else-if="admin === '2'">
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
                <p>Price: Rp. {{ product.price }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div v-else>
      <div class="row no-gutters">
      <div>
        <b-modal id="editProduct" hide-footer centered title="Edit Item">
          <b-row>
            <b-col lg="12">
              <form @submit.prevent="formUpdate" enctype="multipart/form-data">
                <b-form-group label-cols="4" label="Product">
                  <b-form-input type="text" v-model="dataUpdate.product_name" />
                </b-form-group>

                <b-form-group label-cols="4" label="Category">
                  <b-form-select v-model="dataUpdate.product_category">
                    <b-form-select-option :value="dataUpdate.product_category">
                      Choose Category
                    </b-form-select-option>
                    <b-form-select-option
                      v-for="(category, index) in categoryGetters"
                      :key="index"
                      :value="category.category_id"
                    >
                      {{ category.category_name }}
                    </b-form-select-option>
                  </b-form-select>
                </b-form-group>

                <b-form-group label-cols="4" label="Stock">
                  <b-form-input type="number" v-model="dataUpdate.stock" />
                </b-form-group>
                <b-form-group label-cols="4" label="Price">
                  <b-form-input type="text" v-model="dataUpdate.price" />
                </b-form-group>
                <b-form-group label-cols="4" label="Image">
                  <b-form-file @change="processFile($event)" />
                </b-form-group>
                <div class="form-button">
                  <b-button
                    class="mt-3"
                    variant="outline-success"
                    type="submit"
                    block
                    >Save</b-button
                  >
                  <b-button
                    class="mt-3"
                    variant="outline-danger"
                    type="button"
                    block
                    >Cancel</b-button
                  >
                </div>
              </form>
            </b-col>
          </b-row>
        </b-modal>
      </div>
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
                <p>Price: Rp. {{ product.price }}</p>
              </div>
              <div class="button-card">
                <b-button
                  variant="warning"
                  class="mr-5 btn"
                  type="button"
                  v-b-modal.editProduct
                  @click="updateGet(product.product_id, index)"
                  >Update</b-button
                >
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
      <div class="col-lg-9 text-center my-5" v-if="productGetters.length === 0">
        <img
          src="https://media.giphy.com/media/l0MYICK7vFjhxwxhK/giphy.gif"
          alt="No-More"
        />
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
  border-radius: 10px 10px 0px 0px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
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
  margin-top: 15%;
  margin-bottom: 15%;
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
import { mapActions, mapGetters } from 'vuex'
const { URL } = require('../helpers/env')
export default {
  data () {
    return {
      token: localStorage.getItem('token') || null,
      admin: localStorage.getItem('admin'),
      URL: URL,
      dataUpdate: {
        product_id: null,
        product_name: null,
        product_category: null,
        price: null,
        stock: null,
        image: null
      }
    }
  },
  computed: {
    ...mapGetters({
      productGetters: 'product/getAllProduct',
      categoryGetters: 'product/getAllCategory'
    })
  },
  methods: {
    ...mapActions({
      productActions: 'product/getProduct',
      deleteActions: 'product/deleteProduct',
      updateProducts: 'product/updateProduct',
      getDetail: 'product/getDetail'
    }),
    deleteProduct (id) {
      this.deleteActions(id).then(() => {
        this.productActions()
      })
    },
    processFile (event) {
      this.dataUpdate.image = event.target.files[0]
      // console.log(this.dataUpdate.image)
    },
    updateGet (id, index) {
      this.getDetail(id)
        .then((response) => {
          this.dataUpdate.product_id = response[0].product_id
          this.dataUpdate.product_name = response[0].product_name
          this.dataUpdate.product_category = response[0].product_category
          this.dataUpdate.stock = response[0].stock
          this.dataUpdate.price = response[0].price
          this.dataUpdate.image = response[0].image
        })
        .catch((err) => {
          alert(err)
        })
    },
    formUpdate () {
      this.updateProducts(this.dataUpdate)
        .then((response) => {
          // alert(response)
          window.location = '/'
        })
        .catch((err) => {
          console.log(err)
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

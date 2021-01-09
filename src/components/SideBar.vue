<template>
  <div>
    <img v-b-toggle.my-sidebar src="../assets/menu.png" width="50px" />
    <b-sidebar id="my-sidebar" shadow width="110px">
      <div class="body-sidebar-style">
        <router-link to="/"
          ><img src="../assets/ListProduct.svg" alt="ListProduct"
        /></router-link>
      </div>
      <div class="body-sidebar-style">
        <router-link to="/history"
          ><img src="../assets/History.svg" alt="History"
        /></router-link>
      </div>
      <div class="body-sidebar-style">
        <AddModal />
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import AddModal from './AddModal'
export default {
  components: {
    AddModal
  }
}
</script>

<style scoped>
.body-sidebar-style {
  margin-top: 100px;
}
</style>

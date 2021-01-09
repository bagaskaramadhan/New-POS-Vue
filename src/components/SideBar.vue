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
      <div class="body-sidebar-style logout-Button" @click="onLogout()">
        <img src="../assets/logout.svg" alt="Logout" style="width: 50px">
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import AddModal from './AddModal'
export default {
  components: {
    AddModal
  },
  methods: {
    onLogout () {
      localStorage.removeItem('token')
      localStorage.removeItem('admin')
      window.location = '/login'
    }
  }
}
</script>

<style scoped>
.body-sidebar-style {
  margin-top: 60px;
}
.logout-Button {
  cursor: pointer;
}
</style>

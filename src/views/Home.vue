<template>
  <div>
    <div v-if="($route.path === '/' && token === null) || token === undefined">
      <Header />
    </div>
    <div v-else-if="admin === '2'">
      <HeaderCashier/>
    </div>
    <div v-else>
      <HeaderAdmin />
    </div>
  </div>
</template>

<style scoped>
.Navbar {
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  padding-bottom: 20px;
}
</style>

<script>
import Header from '../components/Header'
import HeaderAdmin from '../components/HeaderAdmin'
import HeaderCashier from '../components/HeaderCashier'
export default {
  data () {
    return {
      token: localStorage.getItem('token') || null,
      admin: localStorage.getItem('admin')
    }
  },
  components: {
    Header,
    HeaderAdmin,
    HeaderCashier
  }
}
</script>

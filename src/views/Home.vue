<template>
  <div>
    <div class="row no-gutters text-center Navbar">
      <div class="col-1 mt-3">
        <SideBar/>
      </div>
      <div class="col-8 mt-3"><h1>Online Shop</h1></div>
      <div class="col mt-3">Checkout</div>
    </div>
    <div class="row no-gutters">
      <div class="col-1" />
      <div class="col-8"><Card /></div>
      <div class="col" />
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
import Card from '../components/Card'
import SideBar from '../components/SideBar'
export default {
  components: {
    Card,
    SideBar
  }
}
</script>

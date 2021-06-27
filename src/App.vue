<template>
  <div class="container">
    <div class="nav-container">
      <span></span>
      <h1>{{ $router.currentRoute.value.name }}</h1>

      <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/units">Units</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
.nav-container {
  justify-content: space-between;
  align-items: center;
  display: flex;
  margin-bottom: 40px;
  #nav {
    a {
      color: #125d98;
      text-decoration: none;
      margin-right: 5px;
      font-size: 18px;
      letter-spacing: 0.5px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  h1 {
    color: #125d98;
    letter-spacing: 0.5;
  }
}
</style>

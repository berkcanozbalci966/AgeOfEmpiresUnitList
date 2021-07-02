<template>
  <div class="image-container">
    <img :src="require('@/assets/img/ageofempires.jpg')" alt="" />
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
.image-container {
  display: flex;
  justify-content: center;
  img {
    width: 100%;
  }
}
</style>

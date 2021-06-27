<template>
  <div class="image-container">
    <img :src="require('@/assets/img/ageofempires.jpg')" alt="" />
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      value: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.image-container {
  display: flex;
  justify-content: center;
}
</style>

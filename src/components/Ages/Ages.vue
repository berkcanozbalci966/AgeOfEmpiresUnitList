<template>
  <div>
    <Age
      v-for="(ageName, index) in ageList"
      :key="index"
      :ageInformation="ageName"
    />
  </div>
</template>

<script>
import Age from "./Age.vue";
export default {
  name: "Ages",
  components: { Age: Age },
  data() {
    return {
      ageList: ["All", "Dark", "Feudal", "Castle", "Imperial"],
    };
  },
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
}
</style>

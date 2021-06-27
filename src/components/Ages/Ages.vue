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
import { mapState } from "vuex";
export default {
  name: "Ages",
  components: { Age: Age },
  computed: {
    ...mapState({
      ageList: (state) => state.ageList,
    }),
  },
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
}
</style>

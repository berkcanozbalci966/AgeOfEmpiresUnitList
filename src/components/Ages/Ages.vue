<template>
  <div>
    <Age
      v-for="(ageName, index) in ageList"
      :key="index"
      :ageInformation="{ ageName, index, selectedAge }"
      @ageClick="changeSelectedAge($event)"
    />
  </div>
</template>

<script>
import Age from "./Age.vue";
import { mapState, mapMutations } from "vuex";
export default {
  name: "Ages",
  components: { Age: Age },
  computed: {
    ...mapState({
      ageList: (state) => state.Age.ageList,
      selectedAge: (state) => state.Age.selectedAge,
    }),
  },
  methods: {
    setAge(selectedAgeIndex) {
      this.selectedAge = selectedAgeIndex;
    },
    ...mapMutations("Age", ["changeSelectedAge"]),
  },
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
}
</style>

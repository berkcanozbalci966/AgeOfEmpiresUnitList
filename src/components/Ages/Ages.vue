<template>
  <div>
    <Age
      v-for="(ageName, index) in ageList"
      :key="index"
      :ageInformation="{ ageName, index, selectedAge }"
      @ageClick="setAge($event)"
    />
  </div>
</template>

<script>
import Age from "./Age.vue";
import { mapState } from "vuex";
export default {
  name: "Ages",
  components: { Age: Age },
  data() {
    return {
      selectedAge: 0,
    };
  },
  computed: {
    ...mapState({
      ageList: (state) => state.Age.ageList,
    }),
  },
  methods: {
    setAge(selectedAgeIndex) {
      this.selectedAge = selectedAgeIndex;
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
}
</style>

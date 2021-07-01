<template>
  <div
    @click="$emit('ageClick', ageInformation.ageName)"
    :class="[isSelected ? 'active' : null]"
    data-test="age"
  >
    <span> {{ ageInformation.ageName }} </span>
  </div>
</template>

<script>
export default {
  name: "Age",
  props: {
    ageInformation: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      selected: false,
    };
  },
  computed: {
    isSelected() {
      return this.ageInformation.selectedAge === this.ageInformation.ageName
        ? true
        : false;
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  border: 1px solid black;
  padding: 4px 10px;
  transition: all 0.5s;
  &:hover {
    cursor: pointer;
  }
  &.active {
    background: #125d98;
    color: #fff;
  }
}
</style>

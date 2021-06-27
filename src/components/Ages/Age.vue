<template>
  <div :class="[selected ? 'active' : null]">
    <span> {{ ageInformation }} </span>
  </div>
</template>

<script>
export default {
  name: "Age",
  props: {
    ageInformation: {
      type: String,
      default: () => "",
    },
  },
  data() {
    return {
      selected: false,
    };
  },
};
</script>

<style lang="scss" scoped>
div {
  border: 1px solid black;
  padding: 4px 6px;
  &:hover {
    cursor: pointer;
  }
  &.active {
    background: #125d98;
    color: #fff;
  }
}
</style>

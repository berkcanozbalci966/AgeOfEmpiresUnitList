<template>
  <div>
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
};
</script>

<style lang="scss" scoped>
div {
  border: 1px solid black;
  padding: 4px;
  &:hover {
    cursor: pointer;
  }
}
</style>

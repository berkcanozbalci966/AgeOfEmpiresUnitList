<template>
  <tr @click="routerNavigate()">
    <td>{{ unitInfo.id }}</td>
    <td>{{ unitInfo.name }}</td>
    <td>{{ unitInfo.age }}</td>
    <td>{{ unitInfo.cost }}</td>
  </tr>
</template>

<script>
export default {
  props: {
    unitInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  mounted() {},
  methods: {
    routerNavigate() {
      this.$router.push({
        name: "UnitDetail",
        params: { id: this.unitInfo.id },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
tr {
  &:hover {
    cursor: pointer;
    background-color: "red";
  }
}
</style>

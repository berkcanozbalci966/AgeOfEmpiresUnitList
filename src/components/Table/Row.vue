<template>
  <tr>
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
  mounted() {
    console.log(this.unitInfo);
  },
};
</script>

<style></style>

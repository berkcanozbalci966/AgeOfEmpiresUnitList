<template>
  <div>
    <Cost costcategory="Gold" />
    <Cost costcategory="Wood" />
    <Cost costcategory="Food" />
  </div>
</template>

<script>
import Cost from "./Cost";
export default {
  name: "Costs",
  components: { Cost },
};
</script>

<style lang="scss" scoped></style>

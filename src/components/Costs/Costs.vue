<template>
  <div>
    <Cost costCategorie="Gold" />
    <Cost costCategorie="Wood" />
    <Cost costCategorie="Food" />
  </div>
</template>

<script>
import Cost from "./Cost";
export default {
  name: "Costs",
  components: { Cost },
};
</script>

<style lang="scss" scoped>
div {
}
</style>

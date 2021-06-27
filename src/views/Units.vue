<template>
  <div>
    <h1>Age List</h1>
    <Ages style="margin-bottom: 40px" />
    <h1>Cost Lists</h1>
    <Costs />
  </div>
</template>
<script>
import Ages from "@/components/Ages/Ages";

import Costs from "@/components/Costs/Costs";
export default {
  components: {
    Ages,
    Costs,
  },

  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>

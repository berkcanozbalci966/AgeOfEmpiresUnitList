<template>
  <div>
    <UnitTable :getUnitInformations="getUnitInformations" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UnitTable from "@/components/UnitTable/Table";
export default {
  components: {
    UnitTable,
  },
  computed: {
    getUnitInformations() {
      const id = this.$route.params.id;
      return this.getUnitByID(id);
    },
    ...mapGetters("Units", ["getUnitByID"]),
  },
};
</script>

<style></style>

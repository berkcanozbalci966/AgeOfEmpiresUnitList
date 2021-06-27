<template>
  <div>
    <h1>Age List</h1>
    <Ages style="margin-bottom: 40px" />
    <h1>Cost Lists</h1>
    <Costs />
    <Table :unitsData="unitFormatedData" />
  </div>
</template>
<script>
import Ages from "@/components/Ages/Ages";
import Costs from "@/components/Costs/Costs";
import Table from "@/components/Table/Table";
import { mapState, mapGetters } from "vuex";
export default {
  components: {
    Ages,
    Costs,
    Table,
  },
  mounted() {
    console.log("mounted", this.unitState);
  },

  computed: {
    unitFormatedData() {
      return this.tableFormatter(this.getUnitsByAge(this.selectedAge));
    },
    ...mapGetters("Units", ["tableFormatter", "getUnitsByAge"]),
    ...mapState({
      unitState: (state) => state.Units.allUnitJson.units,
      selectedAge: (state) => state.Age.selectedAge,
    }),
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>

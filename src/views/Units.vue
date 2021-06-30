<template>
  <div>
    <h1>Age Options</h1>
    <Ages style="margin-bottom: 40px" />
    <h1>Cost Options</h1>
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
  mounted() {},
  computed: {
    unitFormatedData() {
      return this.tableFormatter(this.filteredUnitsData);
    },
    filteredUnitsData() {
      return this.unitsExportToTable(this.selectedAge);
    },
    ...mapGetters("Units", [
      "tableFormatter",
      "getUnitsByAge",
      "getUnitByCostCategory",
      "unitsExportToTable",
    ]),
    ...mapState({
      unitState: (state) => state.Units.allUnitJson.units,
      selectedCostOptions: (state) => state.Units.selectedCostOptions,
      selectedAge: (state) => state.Age.selectedAge,
    }),
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>

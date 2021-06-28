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
      if (this.selectedCostOptions.length === 0) {
        return this.getUnitsByAge(this.selectedAge);
      } else if (this.selectedCostOptions.length === 1) {
        return this.getUnitByCostCategory(
          this.selectedCostOptions[0],
          this.getUnitsByAge(this.selectedAge)
        );
      } else if (this.selectedCostOptions.length === 2) {
        // getCostCategory callback getCostCategory method
        return this.getUnitByCostCategory(
          this.selectedCostOptions[1],
          this.getUnitByCostCategory(
            this.selectedCostOptions[0],
            this.getUnitsByAge(this.selectedAge)
          )
        );
      } else {
        return this.getUnitsByAge(this.selectedAge);
      }
    },
    ...mapGetters("Units", [
      "tableFormatter",
      "getUnitsByAge",
      "getUnitByCostCategory",
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

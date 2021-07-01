<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>age</th>
          <th>cost</th>
        </tr>
      </thead>
      <tbody>
        <Row
          v-for="(unitInfo, index) in unitsData"
          :unitInfo="unitInfo"
          :key="index"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import Row from "@/components/UnitsTable/Row";
export default {
  components: {
    Row,
  },
  props: {
    unitsData: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
table {
  margin-top: 50px;
  width: 100%;
  border-collapse: collapse;
  tr {
    cursor: unset;
    td,
    th {
      border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;
    }
  }
}
</style>

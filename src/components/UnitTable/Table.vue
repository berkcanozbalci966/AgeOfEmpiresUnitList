<template>
  <table>
    <tr v-if="getUnitInformations.id">
      <th scope="row">ID:</th>
      <td>{{ getUnitInformations.id }}</td>
    </tr>
    <tr v-if="getUnitInformations.name">
      <th scope="row">Name:</th>
      <td>{{ getUnitInformations.name }}</td>
    </tr>
    <tr v-if="getUnitInformations.description">
      <th scope="row">Description:</th>
      <td>{{ getUnitInformations.description }}</td>
    </tr>
    <tr v-if="getUnitInformations.age">
      <th scope="row">Min.Required Age:</th>
      <td>{{ getUnitInformations.age }}</td>
    </tr>
    <template v-if="getUnitInformations.cost">
      <tr v-if="getUnitInformations.cost.Wood">
        <th scope="row">Wood Cost:</th>
        <td>{{ getUnitInformations.cost.Wood }}</td>
      </tr>
      <tr v-if="getUnitInformations.cost.Gold">
        <th scope="row">Gold Cost:</th>
        <td>{{ getUnitInformations.cost.Gold }}</td>
      </tr>

      <tr v-if="getUnitInformations.cost.Food">
        <th scope="row">Food Cost:</th>
        <td>{{ getUnitInformations.cost.Food }}</td>
      </tr>
    </template>

    <tr v-if="getUnitInformations.build_time">
      <th scope="row">Build Time:</th>
      <td>{{ getUnitInformations.build_time }}</td>
    </tr>
    <tr v-if="getUnitInformations.reload_time">
      <th scope="row">Reload Time:</th>
      <td>{{ getUnitInformations.reload_time }}</td>
    </tr>
    <tr v-if="getUnitInformations.hit_points">
      <th scope="row">Hit Points:</th>
      <td>{{ getUnitInformations.hit_points }}</td>
    </tr>
    <tr v-if="getUnitInformations.attack">
      <th scope="row">Attack:</th>
      <td>{{ getUnitInformations.attack }}</td>
    </tr>
    <tr v-if="getUnitInformations.accuracy">
      <th scope="row">Accuracy:</th>
      <td>{{ getUnitInformations.accuracy }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    getUnitInformations: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
caption {
  padding: 10px;
  caption-side: bottom;
}
table {
  border-collapse: collapse;
  border: 2px solid rgb(200, 200, 200);
  letter-spacing: 1px;
  font-family: sans-serif;
  font-size: 0.8rem;
  max-width: 450px;
}
td,
th {
  border: 1px solid rgb(190, 190, 190);
  padding: 7px 5px;
}
th {
  background-color: rgb(235, 235, 235);
}
td {
  text-align: left;
}
tr:nth-child(even) td {
  background-color: rgb(250, 250, 250);
}
tr:nth-child(odd) td {
  background-color: rgb(240, 240, 240);
}
</style>

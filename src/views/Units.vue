<template>
  <div>
    <div class="row">
      <div class="col-md-2">
        <h2>Test</h2>
      </div>
    </div>
    <Ages />
  </div>
</template>
<script>
import Ages from "@/components/Ages/Ages";
import Units from "@/assets/age-of-empires-units";
export default {
  components: {
    Ages: Ages,
  },
  created() {
    console.log(Units);
  },
  computed: {
    unitList() {
      console.log(Units);
      return Units;
    },
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <div class="input-container">
    <div class="input-group">
      <input
        @click="setCostOption(costcategory)"
        v-model="isChecked"
        type="checkbox"
        :id="costcategory"
      />
      <label :for="costcategory" class="check-box"></label>
      <span>{{ costcategory }} </span>
    </div>
    <div class="input-group">
      <input
        type="range"
        :min="getUnitCostRange.min"
        :max="getUnitCostRange.max"
        v-model="coastRange"
        name=""
        id=""
      />
    </div>
    <span> {{ `${coastRange} - ${getUnitCostRange.max}` }} </span>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Cost",
  props: {
    costcategory: {
      type: String,
    },
  },
  data() {
    return {
      coastRange: null,
      isChecked: false,
    };
  },

  mounted() {
    this.coastRange = this.getUnitCostRange.min;
  },
  beforeUpdate() {},
  computed: {
    getUnitCostRange() {
      return this.getUnitsCostRange(
        this.getUnitByCostCategory(this.costcategory),
        this.costcategory
      );
    },
    ...mapGetters("Units", ["getUnitByCostCategory", "getUnitsCostRange"]),
  },
  methods: {
    calculateStartRange() {
      return this.getUnitCostRange.min;
    },
    ...mapMutations("Units", ["setCostOption"]),
  },
};
</script>

<style lang="scss" scoped>
.input-container {
  display: flex;
  max-width: 310px;
  justify-content: space-between;
  margin-bottom: 10px;
}
.input-group {
  display: flex;
  align-items: center;
  span {
    margin-left: 8px;
    width: 50px;
  }
}

$checked-color: #125d98;
$unchecked-color: #da0037;
$checkbox-height: 20px;
$background-color: #fff;
$font-color: #efefef;
$duration: 0.4s;

@-moz-keyframes dothabottomcheck {
  0% {
    height: 0;
  }
  100% {
    height: $checkbox-height/2;
  }
}
@-webkit-keyframes dothabottomcheck {
  0% {
    height: 0;
  }
  100% {
    height: $checkbox-height/2;
  }
}
@keyframes dothabottomcheck {
  0% {
    height: 0;
  }
  100% {
    height: $checkbox-height/2;
  }
}
@keyframes dothatopcheck {
  0% {
    height: 0;
  }
  50% {
    height: 0;
  }
  100% {
    height: $checkbox-height * 1.2;
  }
}
@-webkit-keyframes dothatopcheck {
  0% {
    height: 0;
  }
  50% {
    height: 0;
  }
  100% {
    height: $checkbox-height * 1.2;
  }
}
@-moz-keyframes dothatopcheck {
  0% {
    height: 0;
  }
  50% {
    height: 0;
  }
  100% {
    height: $checkbox-height * 1.2;
  }
}
input[type="checkbox"] {
  display: none;
}
.check-box {
  height: $checkbox-height;
  width: $checkbox-height;
  background-color: transparent;
  border: $checkbox-height * 0.1 solid $unchecked-color;
  border-radius: 5px;
  position: relative;
  display: inline-block;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -moz-transition: border-color ease $duration/2;
  -o-transition: border-color ease $duration/2;
  -webkit-transition: border-color ease $duration/2;
  transition: border-color ease $duration/2;
  cursor: pointer;
  &::before,
  &::after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: absolute;
    height: 0;
    width: $checkbox-height * 0.2;
    background-color: $checked-color;
    display: inline-block;
    -moz-transform-origin: left top;
    -ms-transform-origin: left top;
    -o-transform-origin: left top;
    -webkit-transform-origin: left top;
    transform-origin: left top;
    border-radius: 5px;
    content: " ";
    -webkit-transition: opacity ease 0.5;
    -moz-transition: opacity ease 0.5;
    transition: opacity ease 0.5;
  }
  &::before {
    top: $checkbox-height * 0.72;
    left: $checkbox-height * 0.41;
    box-shadow: 0 0 0 $checkbox-height * 0.05 $background-color;
    -moz-transform: rotate(-135deg);
    -ms-transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
    transform: rotate(-135deg);
  }
  &::after {
    top: $checkbox-height * 0.37;
    left: $checkbox-height * 0.05;
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
}
input[type="checkbox"]:checked + .check-box,
.check-box.checked {
  border-color: $checked-color;
  &::after {
    height: $checkbox-height * 0.5;
    -moz-animation: dothabottomcheck $duration/2 ease 0s forwards;
    -o-animation: dothabottomcheck $duration/2 ease 0s forwards;
    -webkit-animation: dothabottomcheck $duration/2 ease 0s forwards;
    animation: dothabottomcheck $duration/2 ease 0s forwards;
  }
  &::before {
    height: $checkbox-height * 1.2;
    -moz-animation: dothatopcheck $duration ease 0s forwards;
    -o-animation: dothatopcheck $duration ease 0s forwards;
    -webkit-animation: dothatopcheck $duration ease 0s forwards;
    animation: dothatopcheck $duration ease 0s forwards;
  }
}
</style>

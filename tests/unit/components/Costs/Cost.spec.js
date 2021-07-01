import { shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import Cost from "../../../../src/components/Costs/Cost";
import UnitsModule from "../../../../src/store/modules/units";

describe("Cost", () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        Units: UnitsModule,
      },
    });
  });

  it("Render correctly", () => {
    const component = shallowMount(Cost, {
      global: {
        plugins: [store],
      },
      props: {
        costcategory: "Wood",
      },
    });

    expect(component.html()).toMatchSnapshot();
  });

  it("Render Cost values correctly", () => {
    const woodOption = shallowMount(Cost, {
      global: {
        plugins: [store],
      },
      props: {
        costcategory: "Wood",
      },
    });
    expect(woodOption.vm.costRange).toBe(15);
    expect(woodOption.vm.getUnitCostRange.max).toBe(225);

    const foodOption = shallowMount(Cost, {
      global: {
        plugins: [store],
      },
      props: {
        costcategory: "Food",
      },
    });
    expect(foodOption.vm.costRange).toBe(20);
    expect(foodOption.vm.getUnitCostRange.max).toBe(200);

    const goldOption = shallowMount(Cost, {
      global: {
        plugins: [store],
      },
      props: {
        costcategory: "Gold",
      },
    });
    expect(goldOption.vm.costRange).toBe(20);
    expect(goldOption.vm.getUnitCostRange.max).toBe(225);
  });

  it("Enable range input", async () => {
    const component = shallowMount(Cost, {
      global: {
        plugins: [store],
      },
      props: {
        costcategory: "Gold",
      },
    });

    await component.find("input[type='checkbox']").trigger("click");
    expect(component.find("input[type='range']").html()).not.toContain(
      "disabled"
    );
  });
});

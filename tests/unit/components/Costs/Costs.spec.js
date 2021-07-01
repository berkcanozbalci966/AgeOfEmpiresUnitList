import { shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import Costs from "../../../../src/components/Costs/Costs";
import UnitsModule from "../../../../src/store/modules/units";

describe("Costs", () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        Units: UnitsModule,
      },
    });
  });

  it("Render correctly", () => {
    const component = shallowMount(Costs, {
      global: {
        plugins: [store],
      },
    });

    expect(component.html()).toMatchSnapshot();
  });
});

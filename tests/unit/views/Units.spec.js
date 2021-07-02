import { mount } from "@vue/test-utils";
import Vuex from "vuex";
import UnitsModule from "../../../src/store/modules/units";
import AgeModule from "../../../src/store/modules/age";
import Units from "../../../src/views/Units";

describe("Units View", () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        Units: UnitsModule,
        Age: AgeModule,
      },
    });
  });

  it("Render width route param Correctly", () => {
    // Mock Test
    const component = mount(Units, {
      global: {
        plugins: [store],
      },
    });
    expect(component.html()).toContain("1");
    expect(component.html()).toContain("<table>");
    expect(component.html()).toContain("<h1>Age Options</h1>");
    expect(component.html()).toContain("<h1>Cost Options</h1>");
    expect(component.html()).toMatchSnapshot();
  });
  it("All age option is default", () => {
    // Mock Test
    const component = mount(Units, {
      global: {
        plugins: [store],
      },
    });
    expect(component.html()).toContain(
      '<div class="active" data-test="age"><span>All</span></div>'
    );
  });

  it("All options selected state", async () => {
    const component = mount(Units, {
      global: {
        plugins: [store],
      },
    });
    await component.findAll("label")[0].trigger("click");
    await component.findAll("label")[1].trigger("click");
    await component.findAll("label")[2].trigger("click");
    expect(component.html()).toContain("<tbody></tbody>");
  });
});

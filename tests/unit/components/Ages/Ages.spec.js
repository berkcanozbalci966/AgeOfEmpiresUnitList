import { mount } from "@vue/test-utils";
import Vuex from "vuex";
import Ages from "../../../../src/components/Ages/Ages";
import AgeModule from "../../../../src/store/modules/age";

describe("Ages", () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        Age: AgeModule,
      },
    });
  });

  it("list render", () => {
    const component = mount(Ages, {
      global: {
        plugins: [store],
      },
    });

    expect(component.html()).toContain("All");
    expect(component.html()).toContain("Dark");
    expect(component.html()).toContain("Feudal");
    expect(component.html()).toContain("Castle");
    expect(component.html()).toContain("Imperial");
  });

  it("Render correctly", () => {
    const component = mount(Ages, {
      global: {
        plugins: [store],
      },
    });

    expect(component.html()).toMatchSnapshot();
  });

  it("All option is selected", () => {
    const component = mount(Ages, {
      global: {
        plugins: [store],
      },
    });
    expect(component.findAll("div")[1].classes("active")).toBe(true);
  });

  it("Option Length must be 5", () => {
    const component = mount(Ages, {
      global: {
        plugins: [store],
      },
    });
    expect(component.findAll("[data-test='age']")).toHaveLength(5);
  });

  it("Change option correctly", async () => {
    const component = mount(Ages, {
      global: {
        plugins: [store],
      },
    });

    await component.findAll("[data-test='age']")[1].trigger("click");
    expect(component.findAll("[data-test]")[1].classes("active")).toBe(true);
  });
});

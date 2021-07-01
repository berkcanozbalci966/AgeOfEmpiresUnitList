import { shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import Age from "../../../../src/components/Ages/Age";
import AgeModule from "../../../../src/store/modules/age";

describe("Age", () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        Age: AgeModule,
      },
    });
  });

  it("Render correctly", () => {
    const component = shallowMount(Age, {
      global: {
        plugins: [store],
      },
      props: {
        ageInformation: {
          ageName: "Test",
        },
      },
    });

    expect(component.html()).toMatchSnapshot();
  });

  it("Selected class correctly", () => {
    const component = shallowMount(Age, {
      global: {
        plugins: [store],
      },
      props: {
        ageInformation: {
          ageName: "Test",
          selectedAge: "Test",
        },
      },
    });

    expect(component.classes("active")).toBe(true);
  });
  it("Click & emit", async () => {
    const component = shallowMount(Age, {
      global: {
        plugins: [store],
      },
      props: {
        ageInformation: {
          ageName: "Test",
          selectedAge: "Test",
        },
      },
    });

    await component.trigger("click");
    expect(component.emitted().ageClick).toBeTruthy();
  });
});

import { shallowMount, mount, flushPromises } from "@vue/test-utils";
import Vuex from "vuex";
import router from "../../../../src/router/index";
import Row from "../../../../src/components/UnitsTable/Row";
import UnitsModule from "../../../../src/store/modules/units";
import AgeModule from "../../../../src/store/modules/age";
import App from "../../../../src/App";

describe("Row", () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        Units: UnitsModule,
        Age: AgeModule,
      },
    });
  });

  it("Render correctly", () => {
    const component = shallowMount(Row, {
      props: {
        unitInfo: {
          id: 1,
          name: "Test",
          age: "Dark",
          cost: "50 food 50 gold",
        },
      },
    });
    expect(component.html()).toMatchSnapshot();
  });
  // Router Test
  it("Row click after router trigger correctly", async () => {
    router.push("/units");
    await router.isReady();
    const app = mount(App, {
      global: {
        plugins: [router, store],
      },
    });
    await app.find("[data-test='unitsrow']").trigger("click");
    await flushPromises();
    expect(app.find("h1").text()).toBe("Unit Detail");
  });
});

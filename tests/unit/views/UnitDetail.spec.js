import { mount } from "@vue/test-utils";
import Vuex from "vuex";
import Units from "../../../src/store/modules/units";
import Age from "../../../src/store/modules/age";
import UnitDetail from "../../../src/views/UnitDetail";

describe("Unit Detail", () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        Units,
        Age,
      },
    });
  });

  it("Render width route param Correctly", () => {
    const mockRoute = {
      params: {
        id: 3,
      },
    };
    const mockRouter = {
      push: jest.fn(),
    };
    // Mock Test
    const component = mount(UnitDetail, {
      global: {
        plugins: [store],
        mocks: {
          $route: mockRoute,
          $router: mockRouter,
        },
      },
    });
    expect(component.html()).toMatchSnapshot();
  });
});

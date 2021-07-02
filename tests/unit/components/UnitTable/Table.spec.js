import { mount } from "@vue/test-utils";
import Table from "../../../../src/components/UnitTable/Table";

describe("Unit Detail Table", () => {
  it("Table render correctly", () => {
    const component = mount(Table, {
      props: {
        getUnitInformations: {
          id: 0,
          name: "Test",
          description: "This is test post",
          age: "Dark",
          cost: {
            Wood: 25,
            Gold: 45,
            Food: 55,
          },
          build_time: 22,
          reload_time: 33,
          hit_points: 44,
          attack: 55,
          accuracy: 66,
        },
      },
    });

    expect(component.html()).toMatchSnapshot();
  });

  it("Table render correctly width empty fields", () => {
    const component = mount(Table, {
      props: {
        getUnitInformations: {
          name: "Test",
          description: "This is test post",
          age: "Dark",
          build_time: 22,
          reload_time: 33,
        },
      },
    });

    expect(component.html()).toMatchSnapshot();
  });
});

import { mount } from "@vue/test-utils";
import Table from "../../../../src/components/UnitsTable/Table";

describe("Table", () => {
  it("list render", () => {
    const component = mount(Table, {
      props: {
        unitsData: [
          {
            name: "Archer",
            age: "Feudal",
            id: 1,
            cost: "Wood:25, Gold:45",
          },
          {
            name: "Crossbowman",
            age: "Castle",
            id: 2,
            cost: "Wood:25, Gold:45",
          },
          {
            name: "Arbalest",
            age: "Imperial",
            id: 3,
            cost: "Wood:25, Gold:45",
          },
        ],
      },
    });

    expect(component.html()).toMatchSnapshot();
  });
});

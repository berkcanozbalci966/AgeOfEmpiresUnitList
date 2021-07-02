import { mount } from "@vue/test-utils";
import Home from "../../../src/views/Home";

describe("Home view", () => {
  it("Render correctly", () => {
    const component = mount(Home);
    expect(component.html()).toContain("<img");
  });

  it("Render snapshot", () => {
    const component = mount(Home);
    expect(component.html()).toMatchSnapshot();
  });
});

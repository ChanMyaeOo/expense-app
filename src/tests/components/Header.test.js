import React from "react";
import { shallow } from "enzyme";
import ReactRendererShallow from "react-test-renderer/shallow";
import Header from "../../components/Header";

test("should render header component correctly", () => {
  // const renderer = new ReactRendererShallow();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
  // expect(wrapper.find("h1").length).toBe(1);
});

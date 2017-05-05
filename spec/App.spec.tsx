import { mount, render, shallow } from "enzyme";
import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./../src/App";

describe("AppComponent", () => {

  describe("A suite", () => {
    it("contains h2 header", () => {
      expect(shallow(<App />).contains(<h2>Welcome to React</h2>)).toBe(true);
    });

    it("is css class App", () => {
      expect(shallow(<App />).is(".App")).toBe(true);
    });

    it("Mounted has 1 .App", () => {
      expect(mount(<App />).find(".App").length).toBe(1);
    });

    it("Rendered has 1 .App", () => {
      expect(render(<App />).find(".App").length).toBe(1);
    });
  });
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });
});

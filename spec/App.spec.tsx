import { assert } from "chai";
import { mount, render, shallow } from "enzyme";
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as sinon from "sinon";

import App from "./../src/App";

describe("AppComponent", () => {

  describe("A suite", () => {

    it("should expose the Chai assert method", () => {
      assert.ok("everything", "everything is ok");
    });

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

  describe("sinon timer", () => {


    it("test ticks", () => {
      function testSinonFakeTimersWith(interval: number, ticks: number) {
        const clock = sinon.useFakeTimers();
        const spy = sinon.spy();
        const id = setInterval(spy, interval);
        assert(!spy.calledOnce);
        clock.tick(ticks);
        assert(spy.callCount === Math.floor(ticks / interval));

        clearInterval(id);
        clock.restore();
      }

      testSinonFakeTimersWith(10, 101);
      testSinonFakeTimersWith(99, 101);
      testSinonFakeTimersWith(100, 200);

    });
  });
});

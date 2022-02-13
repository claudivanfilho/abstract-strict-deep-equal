import deepEqual from "../src/index";

/**
 * Matrix of inputs and expected results to be used in the tests.
 * Each element has the following format:
 *  [Input1, Input2, Abstract Expected Value, Strict Expected Value]
 */
const inputExpectedArray = [
  [null, undefined, true, false],
  [null, null, true, true],
  [NaN, undefined, false, false],
  [NaN, null, false, false],
  [NaN, NaN, false, false],
  [undefined, undefined, true, true],
  [1, 1, true, true],
  ["1", 1, true, false],
  ["1", "1", true, true],
  [false, false, true, true],
  [false, "false", false, false],
  [true, false, false, false],
  [true, true, true, true],
  [
    new Date("2022-01-01T21:36:48.362Z"),
    new Date("2022-01-01T21:36:48.362Z"),
    true,
    true,
  ],
  [
    new Date("2022-01-02T21:36:48.362Z"),
    new Date("2022-01-01T21:36:48.362Z"),
    false,
    false,
  ],
  [10.2, 10.2, true, true],
  [10.1, "10.10", true, false],
  [[1, 2, 3], [1, 2, 3], true, true],
  [[1, 2, 3], ["1", 2, 3], true, false],
  [{ a: "1" }, { a: "2" }, false, false],
  [{ a: "1" }, { a: "1" }, true, true],
  [{ a: "1" }, { a: 1 }, true, false],
  [{ a: "1", c: "2" }, { a: "1" }, false, false],
  [{ a: 1 }, 2, false, false],
];

describe("Test abstract equality", () => {
  describe.each(inputExpectedArray)(
    "when the input is %p and %p",
    (...args) => {
      it(`should return ${args[2]}`, () => {
        expect(deepEqual(args[0], args[1])).toBe(args[2]);
      });
    }
  );
});

describe("Test strict equality", () => {
  describe.each(inputExpectedArray)(
    "when the input is %p and %p",
    (...args) => {
      it(`should return ${args[3]}`, () => {
        expect(deepEqual(args[0], args[1], true)).toBe(args[3]);
      });
    }
  );
});

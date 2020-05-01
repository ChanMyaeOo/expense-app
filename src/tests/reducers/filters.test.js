import filtersReducer from "../../reducers/filters";
import moment from "moment";

test("should setup default filters values", () => {
  const result = filtersReducer(undefined, { type: "@@INIT" });

  expect(result).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  });
});

test("should set sort by value to amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("should set sort by value to date", () => {
  const currentState = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
  };
  const action = {
    type: "SORT_BY_DATE",
  };

  const result = filtersReducer(currentState, action);

  expect(result.sortBy).toBe("date");
});

test("should setup the set text value", () => {
  const text = "some text";
  const action = {
    type: "SET_TEXT",
    text,
  };

  const state = filtersReducer(undefined, action);

  expect(state.text).toBe("some text");
});

test("should set the start date", () => {
  const date = moment().startOf("month");
  const action = {
    type: "SET_START_DATE",
    date,
  };

  const result = filtersReducer(undefined, action);
  expect(result.startDate).toEqual(date);
});

test("should set the end date", () => {
  const date = moment().endOf("month");
  const action = {
    type: "SET_END_DATE",
    date,
  };

  const result = filtersReducer(undefined, action);
  expect(result.endDate).toEqual(date);
});

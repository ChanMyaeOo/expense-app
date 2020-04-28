// SET_TEXT
export const setTextFilter = (text = "") => ({
  type: "SET_TEXT",
  text,
});

// SORT_BY_AMOUNt
export const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
});

// SORT BY DATe
export const sortByDate = () => ({
  type: "SORT_BY_DATE",
});

// SET START DATE
export const setStartDate = (date) => ({
  type: "SET_START_DATE",
  date,
});
// SET END DATE
export const setEndDate = (date) => ({
  type: "SET_END_DATE",
  date,
});

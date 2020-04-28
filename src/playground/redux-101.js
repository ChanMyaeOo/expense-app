import { createStore } from "redux";

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy,
});

const setCount = ({ count } = {}) => ({
  type: "SET",
  count,
});

const resetCount = () => ({
  type: "RESET",
});

// Reducers
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy,
      };
    case "DECREMENT":
      const decrementBy =
        typeof action.decrementBy === "number" ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy,
      };
    case "SET":
      return {
        count: action.count,
      };
    case "RESET":
      return {
        count: 0,
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// Actions
// to increace by 1
// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5,
// });

// store.dispatch({
//   type: "INCREMENT",
// });

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());

// to reset count value
// store.dispatch({
//   type: "RESET",
// });
store.dispatch(resetCount());

// store.dispatch({
//   type: "DECREMENT",
// });

// store.dispatch({
//   type: "DECREMENT",
//   decrementBy: 10,
// });

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

// store.dispatch({
//   type: "SET",
//   count: 101,
// });
store.dispatch(setCount({ count: 202 }));

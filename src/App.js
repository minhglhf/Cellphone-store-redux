import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items

// redux stuff

//store: store data, think of state
//reducer: function update store
//reducer have 2 agrument = state, action
//state: old state before update
//action: what happen, what update
//return updated or old state

//dispatch method: send action to the store




//createStore(reducer, initialStore)

import { createStore } from "redux";
import reducer from "./reducer";
// react-redux - Provider - wraps app , connect - used in components
import { Provider } from "react-redux";
// initial store

// store
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);



function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;

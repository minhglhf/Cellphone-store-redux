import React from "react";
// components
import Home from "./components/Home";
import CartContainer from "./components/CartContainer";
import Detail from "./components/Detail";
// items
import { Switch, Route } from 'react-router-dom'
// redux stuff

//store: store data, think of state
//reducer: function update store
//reducer have 2 agrument = state, action
//state: old state before update
//action: what happen, what update
//return updated or old state

//dispatch method: send action to the store




//createStore(reducer, initialStore)
import { BrowserRouter as Router } from 'react-router-dom';
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
    <Router>
      <Provider store={store}>
        <Switch>
          
          <Route path="/detail" exact={true} component={Detail} />
          <Route path="/products" exact={true} component={CartContainer} />
          <Route path="/" exact={true} component={Home} />
          
        </Switch>

      </Provider>
    </Router>

  );
}

export default App;

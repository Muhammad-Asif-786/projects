import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/reduxToolkit/store.js";
import RootNavigation from "./src/navigations/root/RootNavigation.js";

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};


export default App;








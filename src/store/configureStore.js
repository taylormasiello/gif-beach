import { createStore } from "redux";
import rootReducer from "../reducers";

export default function configureStore(intialState) {
  const store = createStore(
    rootReducer,
    intialState,
    window.devToolsExtension ? window.devToolsExtension() : undefined
  );

  if (module.hot) {
    module.hot.accept("../reducers", () => {
      const nextRootReducer = require("../reducers").default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/";

let enhancer = applyMiddleware(thunk);

if (process.env.NODE_ENV !== "production") {
  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  enhancer = composeEnhancers(applyMiddleware(thunk));
}

export const store = createStore(rootReducer, enhancer);

import React from "react";
import { YellowBox, AppRegistry } from "react-native";
import App from "./app/index";
import {Provider} from "react-redux";
import configureStore from "./app/store/configStore";

const store = configureStore();

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);

AppRegistry.registerComponent("Cheddar", () => RNRedux);

import axios from "axios";
import React from "react";
import { Provider as AlertProvider, positions, transitions } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { persistStore } from "reduxjs-toolkit-persist";
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";
// import "tw-elements";
import App from "./App";
import "./main.css";
import { store } from "./Store/store";

// optional configuration for react-alert
const options = {
  position: positions.TOP_CENTER,
  timeout: 3000,
  offset: "30px",
  transition: transitions.SCALE,
};

// axios.defaults.headers.common["Set-Cookie"] =
//   document.cookie.split("token=")[1];
// axios.defaults.withCredentials = true;

// axios.defaults.headers.common["Authorization"] = `Bearer ${document.cookie}`;
axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "token"
)}`;

axios.defaults.baseURL = "https://classroom-backend-api.onrender.com";
// axios.defaults.baseURL = "http://localhost:5000";

let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
    </PersistGate>
  </Provider>
);

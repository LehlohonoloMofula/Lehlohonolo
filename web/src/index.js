/**
 * Entry point of application, where App is rendered within the div with the id of "app"
 */
navigator.serviceWorker.register(new URL("service-worker.js", import.meta.url), { type: "module" });
import React from "react";
import { render } from "react-dom";

import App from "./App";

render(<App></App>, document.getElementById("app"));

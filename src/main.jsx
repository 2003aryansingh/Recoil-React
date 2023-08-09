import React from "react";
import ReactDOM from "react-dom/client";
import TodoList from "../src/TodoList";
import "./index.css";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  </React.StrictMode>
);

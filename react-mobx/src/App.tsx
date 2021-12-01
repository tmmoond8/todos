import React from "react";
import { observer } from "mobx-react-lite";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as Pages from "./pages";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <header className="App-header">
        React + Mobx를 사용한 Todo App 코드 입니다.
      </header>
      <Routes>
        <Route path="/done" element={<Pages.Done />} />
        <Route path="*" element={<Pages.Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default observer(App);

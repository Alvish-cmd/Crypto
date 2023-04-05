import Home from "./pages/home/Home.tsx";
import Login from "./components/Login/Login.tsx";
import List from "./pages/list/List.tsx";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext.js";
import Chart from "./pages/chart/Market.tsx"

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
    <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="Coin">
              <Route index element={<List />} />
            </Route>
            <Route path="Marketchart">
              <Route index element={<Chart />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
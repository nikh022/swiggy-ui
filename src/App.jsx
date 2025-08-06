import React from "react";
import "./App.css";

import FrontPage from "./pages/frontPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchPage from "./pages/searchPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

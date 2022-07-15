import React from "react";
import { BrowserRouter, Routes, Switch, Route } from "react-router-dom";

import "./App.css";
import Create from "./components/create/Create";
import Events from "./components/eventsList/Events";
import Header from "./components/header/Header";
import Update from "./components/update/Update";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Events />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

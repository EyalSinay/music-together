import React from "react";
import Home from "./Home";
import Country from "./Country";
import Continent from "./Continent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Route path="/bahrain" exact component={Country} />
          <Route path="/continent" exact component={Continent} />
          {/* <Country /> */}
        </BrowserRouter>
      </div>
    </div>
  );
}

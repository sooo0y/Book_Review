import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import AddForm from "../pages/AddForm";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<AddForm />} />
        <Route
          path="/detail/:id" element={<Detail />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

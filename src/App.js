import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ProductPage from "./Pages/ProductPage/ProductPage";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/productPage" element={<ProductPage />} />
        

      </Routes>

    </BrowserRouter>

  );
}

export default App;

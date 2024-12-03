import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ProductPage from "./Pages/ProductPage/ProductPage";
import ProductModel from "./Pages/ProductPage/ProductModel";
import Cart from "./Pages/Cart/Cart";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/productPage" element={<ProtectedRoute><ProductPage /></ProtectedRoute>} />
        <Route path="/productPage/:id" element={<ProductModel />} />
        <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />

      </Routes>

    </BrowserRouter>

  );
}

export default App;

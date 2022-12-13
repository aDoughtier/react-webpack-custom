import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import FrontendAuth from "./FrontendAuth"

export default function Main(props) {
  return (
    <BrowserRouter>
      <Routes>
        <FrontendAuth></FrontendAuth>
      </Routes>
    </BrowserRouter>
  )
}
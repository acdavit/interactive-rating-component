import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import RatingElement from "./pages/rating/RatingElement";
import ThankYou from "./pages/thank-you/ThankYou";


export default function App(){
  return (
    <Routes>
      <Route path="/" element={<RatingElement />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

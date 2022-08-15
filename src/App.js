import React from "react";
import { Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";

const App = () => {
  return (
    <Box>
      <navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<exerciseDetail />} />
      </Routes>
    </Box>
  );
};

export default App;

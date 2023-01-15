import React from "react"
import { Routes, Route } from "react-router-dom"
import Box from "@mui/material/Box"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Home from "./pages/home"
import ExerciseDetail from "./pages/ExerciseDetail"

const App = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App

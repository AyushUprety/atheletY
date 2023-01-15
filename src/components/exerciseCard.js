import React from "react"
import { Box, Stack, Typography, Button } from "@mui/material"
import { Link } from "react-router-dom"

const ExerciseCard = ({ exercise }) => {
  //Note that Loading="lazy" makes the website load slowly
  //Later when you want to have same image in detail page you can use the id of the image
  return (
    <Link to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} Loading="lazy" />
    </Link>
  )
}

export default ExerciseCard

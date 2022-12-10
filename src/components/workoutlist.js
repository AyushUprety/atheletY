import React from "react"
import ExerciseCard from "./exerciseCard"
import { Box, Typography, Stack } from "@mui/material"
import { Pagination } from "@mui/material"

export const Workoutlist = ({ exercisesList, setExerciseList }) => {
  console.log(exercisesList)
  return (
    <Box id="exercises" sx={{ mt: { lg: "109px" } }} mt="50px" p="20px">
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="46px"
      >
        Showing Results
      </Typography>

      <Stack
        direction="row"
        sx={{ gap: { lg: "107px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {exercisesList.map((item, index) => {
          return <ExerciseCard exercise={item} key={item.id} />
        })}
      </Stack>
    </Box>
  )
}

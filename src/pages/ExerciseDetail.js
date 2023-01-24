import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"

import {
  exerciseoptions,
  exerciseData,
  youtubeOptions,
} from "../utils/fetchData"
import Detail from "../components/detail"
import ExerciseVideos from "../components/ExerciseVideos"
import SimilarExercises from "../components/SimiliarPart"

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
  const [equipmentExercises, setEquipmentExercises] = useState([])
  const { id } = useParams()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })

    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com"
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com"

      const exerciseDetailData = await exerciseData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseoptions
      )
      setExerciseDetail(exerciseDetailData)

      const exerciseVideosData = await exerciseData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`,
        youtubeOptions
      )
      setExerciseVideos(exerciseVideosData.contents)

      const targetMuscleExercisesData = await exerciseData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
        exerciseoptions
      )
      setTargetMuscleExercises(targetMuscleExercisesData)

      const equimentExercisesData = await exerciseData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        exerciseoptions
      )
      setEquipmentExercises(equimentExercisesData)
    }

    fetchExercisesData()
  }, [id])

  if (!exerciseDetail) return <div>No Data</div>

  return (
    <Box sx={{ mt: { lg: "96px", xs: "60px" } }}>
      <Detail exercisedata={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
    </Box>
  )
}

export default ExerciseDetail

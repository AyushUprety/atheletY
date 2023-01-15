import React from "react"
import Detail from "../components/detail"
import SimiliarPart from "../components/SimiliarPart"
import ExerciseVideos from "../components/ExerciseVideos"
import { exerciseData } from "../utils/fetchdata"
import { exerciseoptions } from "../utils/fetchdata"
import { useParams } from "react-router-dom"
import { useState } from "react"

const ExerciseDetail = () => {
  const { id } = useParams()
  const [icon, setIcon] = useState("")
  const fetchdata = async () => {
    const response = await exerciseData(
      `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
      exerciseoptions
    )
    console.log(response)
    setIcon(response.gifUrl)
  }
  fetchdata()

  return (
    <div>
      <Detail icon={icon} />
      <ExerciseVideos />
      <SimiliarPart />
    </div>
  )
}

export default ExerciseDetail

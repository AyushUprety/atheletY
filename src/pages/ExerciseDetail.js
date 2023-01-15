import React from "react"
import Detail from "../components/detail"
import SimiliarPart from "../components/SimiliarPart"
import ExerciseVideos from "../components/ExerciseVideos"
import { exerciseData } from "../utils/fetchdata"
import { exerciseoptions } from "../utils/fetchdata"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"

const ExerciseDetail = () => {
  const { id } = useParams() // useEffect use na garda infinte loop ma gako thiyo yo code.What happened was first fetchdata was executed.At execution it changed the state.Now, when state is changed component rerenders.When component is rendered again fetchdata function is called which again changed state due to which component is rendered agian.So first ma null state after this function runs.state value is updated.Now,again from top to bottom code is executed.As a result state again becomes null. This process continues infinetely.
  const [data, setData] = useState("")
  useEffect(() => {
    const fetchdata = async () => {
      const response = await exerciseData(
        `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
        exerciseoptions
      )
      console.log(response)
      setData(response)
    }
    fetchdata()
  }, [id])

  return (
    <div>
      <Detail name={data.name} icon={data.gifUrl} />
      <ExerciseVideos />
      <SimiliarPart />
    </div>
  )
}

export default ExerciseDetail

import React from "react"
import { useState, useEffect } from "react"
import TextField from "@mui/material/TextField"
import Button from "@material-ui/core/Button"
import { exerciseData, exerciseoptions } from "../utils/fetchdata"
import Scrollbar from "../components/scrollbar"
import { Box, Stack } from "@mui/system"

const SearchExercises = ({ bodyPart, setBodyPart }) => {
  const [exercises, setExercises] = useState("") // search ko lagi state
  const [exercisesList, setExerciseList] = useState([]) // exercise store garna state
  const [bodyParts, setBodyParts] = useState([]) // bodypart store garna state

  useEffect(() => {
    const fetchBodyParts = async () => {
      const bodyparts = await exerciseData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseoptions
      )
      console.log(bodyparts)
      setBodyParts([...bodyparts]) // setBodyParts(bodyparts) matra garis vana ta tero argument aauta whole array aako xa yo whole array nai aauta matra argument banera save hunxa.Array ko element lai seperate garerea bekla beklai element banauna spread operator use gareko ho
    }
    fetchBodyParts()
  }, [])

  const fetchApiData = async () => {
    if (exercises) {
      const showData = await exerciseData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseoptions
      )
      const filteredlist = showData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(exercises) ||
          exercise.target.toLowerCase().includes(exercises) ||
          exercise.equipment.toLowerCase().includes(exercises) ||
          exercise.bodyPart.toLowerCase().includes(exercises)
      )
      setExerciseList(filteredlist)
      console.log(exercisesList)
    }
  }

  // useEffect(
  //   (exercisesList) => {
  //     exercisesList.filter((exercise) => {
  //       return exercise.name.includes(exercises);
  //     });
  //   },
  //   [exercises]
  // );
  // const filterExercises = (exercisesList) => { -------------------->Yesari work garena i don't know the reason
  //   let filteredlist = exercisesList.filter((exercise) => {
  //     return exercise.name.toLowerCase().includes(exercises);
  //   });
  //   return filteredlist;
  // };
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Box position="relative" display="flex" justifyContent="center" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "1170px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          value={exercises} // value vaneko xi jasto state la state ma value ta rakhyo tara tyo form ma render garna xi you use this
          onChange={(e) => setExercises(e.target.value.toLowerCase())}
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            color: "success.dark",
            textTransform: "none",
            width: { lg: "173px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0px",
            fontSize: { lg: "20px", xs: "14px" },
          }}
          onClick={() => fetchApiData()}
        >
          Search
        </Button>
      </Box>

      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <Scrollbar
          bodyParts={bodyParts}
          bodyPart={bodyPart} // Note we only had bodyParts plural jasla array of bodypart linxa.This bodypart is for the individual bodypart selected
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  )
}

export default SearchExercises

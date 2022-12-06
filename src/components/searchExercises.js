import React from "react";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@material-ui/core/Button";
import { exerciseData, exerciseoptions } from "../utils/fetchdata";
import Scrollbar from "../components/scrollbar";
import { Box, Stack } from "@mui/system";

const SearchExercises = ({ bodyPart, setBodyPart }) => {
  const [exercises, setExercises] = useState("");
  const [exercisesList, setExerciseList] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchBodyParts = async () => {
      const bodyparts = await exerciseData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseoptions
      );
      setBodyParts(bodyparts);
    };
    fetchBodyParts();
    console.log(bodyParts);
  }, []);

  const fetchApiData = async () => {
    if (exercises) {
      const showData = await exerciseData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseoptions
      );
      const filteredlist = showData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(exercises) ||
          exercise.target.toLowerCase().includes(exercises) ||
          exercise.equipment.toLowerCase().includes(exercises) ||
          exercise.bodyPart.toLowerCase().includes(exercises)
      );
      setExercises("");
      setExerciseList(filteredlist);
      console.log(exercisesList);
    }
  };

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
    <Stack
      style={{
        display: "flex",
        justifyContent: "center",
        position: "relative",
        right: "0px",
      }}
    >
      <Box position="relative" display="flex" justifyContent="center" mb="72px">
        <TextField
          sx={{ width: "60%" }}
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
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;

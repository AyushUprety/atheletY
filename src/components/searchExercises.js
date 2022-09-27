import React from "react";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@material-ui/core/Button";
import FetchData from "../utils/fetchdata";

const SearchExercises = () => {
  const [exercises, setExercises] = useState("");
  const fetchApiData = FetchData(
    "https://exercisedb.p.rapidapi.com/exercises/bodyPartList"
  );
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        position: "relative",
        right: "0px",
      }}
    >
      <TextField
        sx={{ width: "60%" }}
        value={exercises}
        onChange={(e) => setExercises(e.target.value)}
      />
      <Button
        style={{ width: "8%" }}
        variant="contained"
        color="secondary"
        onClick={() => fetchApiData}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchExercises;

import React from "react";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@material-ui/core/Button";

const SearchExercises = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        position: "relative",
        right: "0px",
      }}
    >
      <TextField sx={{ width: "60%" }} />
      <Button style={{ width: "8%" }} variant="contained" color="secondary">
        Search
      </Button>
    </div>
  );
};

export default SearchExercises;

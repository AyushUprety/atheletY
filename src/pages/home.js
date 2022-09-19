import React from "react";
import { Typography } from "@mui/material";
import Button from "@material-ui/core/Button";

const home = () => {
  return (
    <>
      <div>
        <Typography sx={{ color: "orange" }} variant="h6">
          Atheletes Club
        </Typography>
        <Typography variant="h5">Eat,Lift,Sleep</Typography>
        <Typography variant="h5">Repeat</Typography>
        <Typography variant="h7">
          Check out the workouts trailored to you
        </Typography>
      </div>
      <div>
        <Button variant="contained">Browse workouts</Button>
      </div>
    </>
  );
};

export default home;

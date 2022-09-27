import React from "react";
import { Typography } from "@mui/material";
import Button from "@material-ui/core/Button";
import { Stack } from "@mui/system";
import banner from "../assets/assets/images/banner.png";
import Box from "@mui/material/Box";

export const Banner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
    >
      <Stack direction="row" sx={{ gap: "200px" }} p="20px">
        <Stack direction="column" spacing={2} justifyContent="center">
          <Typography sx={{ color: "orange" }} variant="h6">
            Atheletes Club
          </Typography>
          <Typography variant="h5">Eat,Lift,Sleep</Typography>
          <Typography variant="h5">Repeat</Typography>
          <Typography variant="h7">
            Check out the workouts tailored to you
          </Typography>
          <div>
            <Button style={{ background: "orange" }} variant="contained">
              Browse workouts
            </Button>
          </div>
        </Stack>
        <Stack>
          <img src={banner} className="hero-banner-img" />
        </Stack>
      </Stack>
      <Typography
        sx={{
          fontSize: 200,
          fontWeight: 80,
          color: "orange",
          opacity: 0.2,
          display: { lg: "block", xs: "none" },
        }}
      >
        Exercises
      </Typography>
      <Typography sx={{ fontSize: 40, fontWeight: 400, textAlign: "center" }}>
        Fantastic Workouts You <br />
        Should Know
      </Typography>
    </Box>
  );
};
export default Banner;

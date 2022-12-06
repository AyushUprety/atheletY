import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/assets/icons/gym.png";

const Partitem = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      typer="button"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart == item ? "4px solid #ff2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
      }}
    >
      <img src={Icon} style={{ width: "40px", height: "40px" }} />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        fontFamily="Alegreya"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default Partitem;

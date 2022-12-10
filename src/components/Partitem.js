import React from "react"
import { Stack, Typography } from "@mui/material"
import Icon from "../assets/assets/icons/gym.png"

const Partitem = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart == item ? "4px solid #ff2625" : "", // selected bodypart jun array ko item sangha milxa tesma nai border vanxa
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
      }}
    >
      <img
        onClick={() => {
          // yo kasari chali rakho xa bujna revise state change huda tyo state ma depend huna sab component rerender hunxa
          setBodyPart(item)
        }}
        src={Icon}
        style={{ width: "40px", height: "40px" }}
      />
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
  )
}

export default Partitem

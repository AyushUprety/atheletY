import React from "react"
import { Stack } from "@mui/system"
import { Typography } from "@mui/material"

const Detail = ({ icon }) => {
  return (
    <div>
      <Stack direction="row">
        {icon ? <img src={icon} /> : ""}
        <Typography variant="h7">
          Exercise can help you live healthy and feel dandy.thisexercise is one
          of the best exercise for target.It will help you grow them muscles in
          your target.
        </Typography>
      </Stack>
    </div>
  )
}

export default Detail

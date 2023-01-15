import React from "react"
import { Stack } from "@mui/system"
import { Typography } from "@mui/material"

const Detail = ({ icon, bodyPart, name }) => {
  // yo case ma name.toUpperCase garda error aayo kinaki name null xa kinaki jsx matra chaleko xa.But tyo null ma method to uppercase lauda error aauxa uppercase na lauda code majala chalxa reason being null la ta error dekhaudaina multiple rerender hunxa value aauxa ani display hunxa
  return (
    <div>
      <Stack direction="row" alignItems="center" justifyContent="center">
        {icon ? <img src={icon} className="detail-image" /> : ""}
        <Typography variant="h7">
          Exercise can help you live healthy and feel dandy.
          {name ? name.charAt(0).toUpperCase() + name.slice(1) : ""} is one of
          the best exercise for {bodyPart}.It will help you grow them muscles in
          your {bodyPart}.
        </Typography>
      </Stack>
    </div>
  )
}

export default Detail

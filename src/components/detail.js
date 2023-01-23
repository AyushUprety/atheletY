import React from "react"
import { Stack } from "@mui/system"
import { Button, Typography } from "@mui/material"
import BodyPartImage from "../assets/assets/icons/body-part.png"
import TargetImage from "../assets/assets/icons/target.png"
import EquipmentImage from "../assets/assets/icons/equipment.png"

const Detail = ({ exercisedata }) => {
  // yo case ma name.toUpperCase garda error aayo kinaki name null xa kinaki jsx matra chaleko xa.But tyo null ma method to uppercase lauda error aauxa uppercase na lauda code majala chalxa reason being null la ta error dekhaudaina multiple rerender hunxa value aauxa ani display hunxa
  const { bodyPart, gifUrl, name, target, equipment } = exercisedata
  const BodyImages = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ]
  console.log(BodyImages)
  return (
    <div>
      <Stack
        gap="60px"
        sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
      >
        {gifUrl ? <img src={gifUrl} className="detail-image" /> : ""}
        <Stack>
          <Typography variant="h3">{name && name.toUpperCase()}</Typography>
          <Typography variant="h7">
            Exercise can help you live healthy and feel dandy.
            {name ? name.charAt(0).toUpperCase() + name.slice(1) : ""} is one of
            the best exercise for {bodyPart}.It will help you grow them muscles
            in your {bodyPart}.
          </Typography>
          {BodyImages?.map((item) => {
            return (
              <Stack key={name} direction="row" gap="24px" alignItems="center">
                <Button
                  sx={{
                    background: "#FFF2DB",
                    borderRadius: "50%",
                    width: "100px",
                    height: "100px",
                  }}
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    style={{ width: "50px", height: "50px" }}
                  />
                </Button>
                <Typography
                  textTransform="capitalize"
                  sx={{ fontSize: { lg: "30px", xs: "20px" } }}
                >
                  {item.name}
                </Typography>
              </Stack>
            )
          })}
        </Stack>
      </Stack>
    </div>
  )
}

export default Detail
